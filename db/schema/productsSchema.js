import mongoose, { Schema } from "mongoose";

const productsSchema = new Schema({
  category: String,
  products: [
    {
      name: String,
      price: mongoose.Decimal128,
      discount: mongoose.Decimal128,
      imageUrl: String,
      brand: String,
    },
  ],
});

const Product =
  mongoose.models?.Product || mongoose.model("Product", productsSchema);

export default Product;
