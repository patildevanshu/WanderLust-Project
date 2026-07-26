const mongoose = require("mongoose");
const initData = require("./data.js");
const Listing = require("../models/listing.js");

const MONGO_URL = "mongodb+srv://devanshupatil35:KrPpHvSkOryfo7C6@wanderlust.lqpxuoo.mongodb.net/?retryWrites=true&w=majority&appName=WanderLust";

main()
  .then(() => {
    console.log("connected to DB");
  })
  .catch((err) => {
    console.log(err);
  });

async function main() {
  await mongoose.connect(MONGO_URL);
}

const initDB = async () => {
  await Listing.deleteMany({});
  // initData = initData.data.map((obj) => ({...obj , }));
  await Listing.insertMany(initData.data);
  console.log("data was initialized");
};

initDB();
