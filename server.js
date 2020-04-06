const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const Food = require("./models/Food");
const seedDB = require("./seeds");
const app = express();

// seedDB();
mongoose.set("useNewUrlParser", true);
mongoose.set("useFindAndModify", false);
mongoose.set("useCreateIndex", true);
mongoose.set("useUnifiedTopology", true);
mongoose.connect("mongodb://localhost/bazaar-on-node");
app.use(bodyParser.urlencoded({ extended: true }));
app.set("view engine", "ejs");
app.use(express.static(__dirname + "/public"));

app.get("/", (req, res) => {
  // GET all Food from DB
  Food.find({}, (err, allFoods) => {
    if (err) {
      console.log(err);
    } else {
      res.render("home", { foods: allFoods });
    }
  });
});

app.post("/", (req, res) => {
  // get data from form and add to foods array
  let foodName = req.body.foodName;
  let foodImage = req.body.foodImage;
  let foodPrice = req.body.foodPrice;
  let foodDesc = req.body.foodDesc;
  const newFood = { foodName, foodImage, foodPrice, foodDesc };
  Food.create(newFood, (err, newCreated) => {
    if (err) {
      console.log(err);
    } else {
      res.redirect("/");
    }
  });
});

app.get("/foods/add-food", (req, res) => {
  res.render("add-food");
});

const port = process.env.PORT || 4000;
app.listen(port, () => {
  console.log(`Bazaar On connected on port ${port}...`);
});
