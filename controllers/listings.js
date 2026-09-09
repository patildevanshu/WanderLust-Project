const Listing = require("../models/listing.js");
const mbxGeocoding = require('@mapbox/mapbox-sdk/services/geocoding');
const mapToken = process.env.MAP_TOKEN;
const geocodingClient = mbxGeocoding({ accessToken: mapToken });

module.exports.index = async (req, res, next) => {
  let { category, q } = req.query;
  let conditions = [];

  if (category && category.trim() !== "" && category.trim().toLowerCase() !== "all") {
    let cat = category.trim();
    let baseWord = cat.replace(/s$/i, "");
    let catRegex = new RegExp(`^${baseWord}|${cat}`, "i");
    conditions.push({
      $or: [
        { category: { $regex: catRegex } },
        { title: { $regex: new RegExp(baseWord, "i") } },
        { description: { $regex: new RegExp(baseWord, "i") } },
      ],
    });
  }

  if (q && q.trim() !== "") {
    let searchRegex = new RegExp(q.trim(), "i");
    conditions.push({
      $or: [
        { title: searchRegex },
        { location: searchRegex },
        { country: searchRegex },
        { category: searchRegex },
      ],
    });
  }

  let filter = conditions.length > 0 ? { $and: conditions } : {};

  const allListings = await Listing.find(filter);
  res.render("listings/index.ejs", {
    allListings,
    searchQuery: q || "",
    activeCategory: category || "",
  });
};

module.exports.renderNewForm = (req, res) => {
  res.render("listings/new.ejs");
};

module.exports.showListing = async (req, res) => {
  let { id } = req.params;
  const listing = await Listing.findById(id)
    .populate({ path: "review", populate: { path: "author" } })
    .populate("owner");
  if (!listing) {
    req.flash("error", " Listing Does Not Exist!");
    return res.redirect("/listings");
  }
  res.render("listings/show.ejs", { listing });
};

module.exports.createListing = async (req, res) => {
  let geometry = { type: "Point", coordinates: [77.209, 28.6139] }; // default fallback coordinates
  try {
    let response = await geocodingClient.forwardGeocode({
      query: req.body.location,
      limit: 1
    }).send();

    if (response && response.body && response.body.features && response.body.features.length > 0) {
      geometry = response.body.features[0].geometry;
    }
  } catch (err) {
    console.error("Geocoding error:", err.message);
  }

  let url = req.file.path;
  let filename = req.file.filename;
  let newListing = new Listing(req.body);
  newListing.owner = req.user._id;
  newListing.image = { url, filename };
  newListing.geometry = geometry;
  
  await newListing.save();
  req.flash("success", "New Listing Added Successfully!");
  res.redirect("/listings");
};

module.exports.renderEditForm = async (req, res) => {
  let { id } = req.params;
  let oldListing = await Listing.findById(id);
  if (!oldListing) {
    req.flash("error", " Listing Does Not Exist!");
    return res.redirect("/listings");
  }

  let originalImageUrl = oldListing.image ? oldListing.image.url : "";
  if (originalImageUrl) {
    originalImageUrl = originalImageUrl.replace("/upload", "/upload/w_250");
  }

  res.render("listings/edit.ejs", { oldListing , originalImageUrl });
};

module.exports.updateListing = async (req, res) => {
  let { id } = req.params;
  
  if (req.body.location) {
    try {
      let response = await geocodingClient.forwardGeocode({
        query: req.body.location,
        limit: 1
      }).send();

      if (response && response.body && response.body.features && response.body.features.length > 0) {
        req.body.geometry = response.body.features[0].geometry;
      }
    } catch (err) {
      console.error("Geocoding update error:", err.message);
    }
  }

  let listing = await Listing.findByIdAndUpdate(id, req.body, { new: true });

  if (typeof req.file !== "undefined") {
    let url = req.file.path;
    let filename = req.file.filename;
    listing.image = { url, filename };
    await listing.save();
  }

  req.flash("success", "Listing Updated Successfully!");
  res.redirect(`/listings/${id}`);
};

module.exports.deleteListing = async (req, res) => {
  let { id } = req.params;
  await Listing.findByIdAndDelete(id);
  req.flash("success", " Listing Deleted Successfully!");
  res.redirect("/listings");
};
