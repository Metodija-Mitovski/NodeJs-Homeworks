const express = require("express");
const router = express.Router();
const data = require("../data/cars");

/* GET home page. */
router.get("/", function (req, res, next) {
  const carList = data.map((car) => {
    return { id: car.id, model: car.model, img: car.img };
  });

  res.render("index", { carList, isHomePage: true });
});

module.exports = router;
