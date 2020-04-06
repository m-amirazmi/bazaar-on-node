const mongoose = require("mongoose");
const foodSchema = new mongoose.Schema({
  foodImage: String,
  foodName: String,
  foodPrice: String,
  foodDesc: String,
});
module.exports = mongoose.model("Food", foodSchema);
