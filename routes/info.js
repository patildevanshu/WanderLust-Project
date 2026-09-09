const express = require("express");
const router = express.Router();

router.get("/about", (req, res) => {
  res.render("info/about.ejs");
});

router.get("/privacy", (req, res) => {
  res.render("info/privacy.ejs");
});

router.get("/terms", (req, res) => {
  res.render("info/terms.ejs");
});

router.get("/blog", (req, res) => {
  res.render("info/blog.ejs");
});

router.get("/press", (req, res) => {
  res.render("info/press.ejs");
});

module.exports = router;
