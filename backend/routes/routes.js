const express = require("express");
const router = express.Router();
const { showAvailableCars, bookCar, getAllCars, sentMail } = require("../controllers/controller");

app.get("/", (req,res)=>{
    res.send("You are on backend server");
})

router.route("/available-cars").post(showAvailableCars);
router.route("/book-car").post(bookCar);
router.route("/sent-mail").post(sentMail);
router.route("/dashboard").get(getAllCars);

module.exports = router;
