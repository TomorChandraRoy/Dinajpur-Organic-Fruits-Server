const mongoose = require("mongoose");

const productSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Product name is required"],
      trim: true,
    },
    cat: {
      type: String,
      required: [true, "Category is required"],
    },
    badge: {
      type: String,
      required: [true, "Badge is required"],
    },
    tags: {
      type: [String],
      default: [],
    },
    desc: {
      type: String,
      required: [true, "Description is required"],
    },
    orig: {
      type: Number,
      default: 0,
    },
    price: {
      type: Number,
      required: [true, "Price is required"],
      min: [0, "Price cannot be negative"],
    },
    stock: {
      type: Number,
      required: [true, "Stock is required"],
      min: [0, "Stock cannot be negative"],
    },
    availability: {
      type: String,
      enum: ["In Stock", "Out of Stock"],
      default: "In Stock",
    },
    weight: {
      type: Number,
      required: [true, "Weight is required"],
    },

    image: {
      type: [String],
      validate: {
        validator: function (v) {
          return v && v.length > 0 && v.length <= 5;
        },
        message: "A product must have between 1 and 5 images",
      },
      required: [true, "At least one image is required"],
    },
  },
  {
    versionKey: false,
  },
);
const productModel = mongoose.model("productsData", productSchema); //databaser aer collection aer name dite hobe
module.exports = productModel;
