const mongoose = require("mongoose");
mongoose.set("strictQuery", true);

const Product = require("./models/product");

mongoose
  .connect("mongodb://127.0.0.1:27017/farmStand")
  .then(() => {
    console.log("연결 성공!");
  })
  .catch((err) => {
    console.log("에러 발생!!");
    console.log(err);
  });

// const p = new Product({
//   name: "ruby",
//   price: 1.99,
//   category: "fruit",
// });

// p.save()
//   .then((p) => {
//     console.log(p);
//   })
//   .catch((e) => {
//     console.log(e);
//   });

const seedProducts = [
  {
    name: "fairy",
    price: 1.0,
    category: "vegetable",
  },
  {
    name: "organic",
    price: 4.99,
    category: "fruit",
  },
  {
    name: "watermelon",
    price: 3.99,
    category: "fruit",
  },
  {
    name: "celery",
    price: 1.5,
    category: "vegetable",
  },
  {
    name: "milk",
    price: 2.69,
    category: "dairy",
  },
];

Product.insertMany(seedProducts)
  .then((res) => {
    console.log(res);
  })
  .catch((e) => {
    console.log(e);
  });
