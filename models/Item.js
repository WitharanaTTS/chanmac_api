import mongoose from "mongoose";
const ItemSchema = new mongoose.Schema({
  title: {
    type: String
  },
  type: {
    type: String
  },
  desc: {
    type: String
  },
  photos: {
    type: [String],
  },
  rating: {
    type: Number,
    min: 0,
    max: 5,
  },
  categories: {
    type: [String],
  },
  sizes: {
    type: [String],
  },
  price: {
    type: Number
  },
  qty: {
    type: Number
  },
  availability: {
    type: Boolean,
    default: true,
  },
  keywords: {
    type: [String],
  },
});

export default mongoose.model("Item", ItemSchema)
