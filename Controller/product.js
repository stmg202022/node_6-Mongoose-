// const fs = require("fs");
// const data = JSON.parse(fs.readFileSync("./public/data.json", "utf-8"));
// const products = data.products;

const model = require("../Model/product");
const Product = model.Product;

//post
exports.createProduct = (req, res) => {
  const product = new Product(req.body);

  // const product = new Product({
  //   title: "iphope",
  //   price: 99997,
  //   rating: 4.5,
  //   brand: "Apple",
  // });

  // product.save().then(() => {
  //   res.json(product);
  // });

  product
    .save()
    .then((result) => {
      console.log(result);
      res.status(201).json({ result }); // can be seen in the body
    })
    .catch((err) => {
      console.log(typeof err);
      console.log(err);
      res.status(500).json({
        error: err,
      });
    });

  // res.json({ type: "POST" });
  // console.log(req.body);
  // products.push(req.body);
  // res.json(products);
};

//get
// exports.getAllProducts = (req, res) => {
//   res.json(product);
// };

exports.getAllProducts = async (req, res) => {
  // const products = await Product.find({ price: { $gt: 900 } });
  const products = await Product.find();

  res.status(200).json(products);
};

//get
// exports.getProduct = (req, res) => {
//   console.log(typeof req.params.id); //string form
//   const id = +req.params.id;
//   console.log(typeof id); //number
//   const product = products.find((p) => p.id === id);
//   res.json(product);
//   // res.json(products);
// };

exports.getProduct = async (req, res) => {
  const id = req.params.id;
  console.log(id);
  const product = await Product.findById(id);
  // console.log(product);
  res.status(200).json(product);
};

// put
// exports.replaceProduct = (req, res) => {
//   console.log(typeof req.params.id); //string form
//   const id = +req.params.id;
//   console.log(typeof id); //number
//   const productIndex = products.findIndex((p) => p.id === id);
//   products.splice(productIndex, 1, { ...req.body, id: id });
//   res.status(201).json();

//   // res.json(products);
// };

exports.replaceProduct = async (req, res) => {
  const id = req.params.id;

  // console.log(id);

  const filter = { _id: id };
  const replace = req.body;
  options = { new: true };

  try {
    const product = await Product.findOneAndReplace(filter, replace, options);
    console.log(product);
    res.status(201).json(product);
  } catch (err) {
    console.log(err);
  }

  // res.json(products);
};

//patch
// exports.updateProduct = (req, res) => {
//   console.log(typeof req.params.id); //string form
//   const id = +req.params.id;
//   console.log(typeof id); //number
//   const productIndex = products.findIndex((p) => p.id === id);
//   const product = products[productIndex]; //old product
//   products.splice(productIndex, 1, { ...product, ...req.body });
//   res.status(201).json();
//   // res.json(products);
// };

exports.updateProduct = async (req, res) => {
  const id = req.params.id;
  console.log(id);
  const filter = { _id: id };
  const update = req.body;
  const options = { new: true };
  try {
    const product = await Product.findOneAndUpdate(filter, update, options);
    res.status(201).json(product);
  } catch (e) {
    console.log(e.message);
  }
};

//delete
// exports.deleteProduct = (req, res) => {
//   console.log(typeof req.params.id); //string form
//   const id = +req.params.id;
//   console.log(typeof id); //number
//   const productIndex = products.findIndex((p) => p.id === id);
//   const product = products[productIndex];
//   products.splice(productIndex, 1);
//   res.status(201).json(product);
//   // res.json(products);
// };

exports.deleteProduct = async (req, res) => {
  const id = req.params.id;
  console.log(typeof id);
  const filter = { _id: id };
  try {
    const product = await Product.findOneAndDelete(filter);
    res.status(201).json(product);
  } catch (e) {
    console.log(e.message);
  }
};
// above CRUD are imported in Routes/products
