const mongoose = require("mongoose");
const Campground = require("../models/campground");
const cities = require("./cities");
const { places, descriptors } = require("./seedHelpers");

mongoose.connect("mongodb://127.0.0.1:27017/yelp-camp");
mongoose.set("strictQuery", true);

const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error:"));
db.once("open", () => {
  console.log("database connected");
});

const sample = (array) => {
  return array[Math.floor(Math.random() * array.length)];
};

const seedDB = async () => {
  await Campground.deleteMany({});
  for (let i = 0; i < 300; i++) {
    const random1000 = Math.floor(Math.random() * 1000);
    const price = Math.floor(Math.random() * 20) + 10;
    const camp = new Campground({
      author: "64009f18deb888842c45eb5d",
      location: `${cities[random1000].city}, ${cities[random1000].state}`,
      title: `${sample(descriptors)} ${sample(places)}`,
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia esse beatae voluptates, suscipit nobis alias. Laudantium maiores quasi sit voluptatum quam repellendus aut quae aliquam minima ipsam dignissimos, praesentium non?",
      price,
      geometry: {
        type: "Point",
        coordinates: [
          cities[random1000].longitude,
          cities[random1000].latitude,
        ],
      },
      images: [
        {
          url: "https://res.cloudinary.com/dioidlf99/image/upload/v1677920827/YelpCamp/fzd4skscnecm2686v1pj.png",
          filename: "YelpCamp/fzd4skscnecm2686v1pj",
        },
        {
          url: "https://res.cloudinary.com/dioidlf99/image/upload/v1677920829/YelpCamp/lrvq0ubewrrytgbodpgh.png",
          filename: "YelpCamp/lrvq0ubewrrytgbodpgh",
        },
        {
          url: "https://res.cloudinary.com/dioidlf99/image/upload/v1677920830/YelpCamp/wwh4ajw0pz1ztwfam4s6.png",
          filename: "YelpCamp/wwh4ajw0pz1ztwfam4s6",
        },
      ],
    });
    await camp.save();
  }
};

seedDB().then(() => {
  mongoose.connection.close();
});
