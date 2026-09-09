const mongoose = require("mongoose");
const initData = require("./data.js");
const Listing = require("../models/listing.js");

if (process.env.NODE_ENV !== "production") {
  require("dotenv").config({ path: "../.env" });
}
const User = require("../models/user.js");

const MONGO_URL = process.env.ATLASDB_URL || process.env.DB_URL || "mongodb://127.0.0.1:27017/wanderlust";

main()
  .then(() => {
    console.log("connected to DB");
    return initDB();
  })
  .then(() => {
    mongoose.disconnect();
  })
  .catch((err) => {
    console.log(err);
  });

async function main() {
  await mongoose.connect(MONGO_URL, { dbName: "wanderlust" });
}

const initDB = async () => {
  await Listing.deleteMany({});
  let hostUser = await User.findOne();
  if (!hostUser) {
    hostUser = new User({
      username: "wanderlust_host",
      email: "support@devanshupatil.tech",
    });
    await User.register(hostUser, "Admin@123");
  }
  const listingsWithOwner = initData.data.map((obj) => ({
    ...obj,
    owner: hostUser._id,
  }));
  await Listing.insertMany(listingsWithOwner);
  console.log(`data was initialized with ${listingsWithOwner.length} listings`);
};
