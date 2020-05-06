var express = require("express");
var router = express.Router();

/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("index", { title: "Express" });
});

router.get("/form", function (req, res, next) {
  res.render("form");
});

router.post("/form", function (req, res, next) {
  let { name, age } = req.body;
  res.render("formresponse", { name: name, age: age });
});

module.exports = router;
