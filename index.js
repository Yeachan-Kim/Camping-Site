// getting-started.js
const mongoose = require("mongoose");
mongoose.set("strictQuery", true);

mongoose
  .connect("mongodb://127.0.0.1:27017/movieApp")
  .then(() => {
    console.log("연결 성공!");
  })
  .catch((err) => {
    console.log("에러 발생!!");
    console.log(err);
  });

const movieSchema = new mongoose.Schema({
  title:{
    type: String,
    require: true,
  },
  year: Number,
  score: Number,
  rating: String,
});

const Movie = mongoose.model("Movie", movieSchema);
const amadeus = new Movie({
  title: "amadeus",
  year: 1986,
  score: 9.2,
  rating: "R",
});
amadeus.save()
Movie.insertMany([
  {}
])
