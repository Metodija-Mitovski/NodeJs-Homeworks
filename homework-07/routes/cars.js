const express = require("express");
const router = express.Router();
const carList = require("../data/cars");

router.get("/:id", (req, res, next) => {
  const carId = req.params.id;
  const car = carList.find((car) => car.id == carId);

  res.render("car", { car, isHomePage: false });
});

module.exports = router;
