import mongoose from "mongoose";
const ItemSchema = new mongoose.Schema(
  {
  title: {
    type: String,
    required: true,
  },
  type: {
    type: String,
    required: true,
  },
  desc: {
    type: String,
    required: true,
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
    required: true,
  },
  sizes: {
    type: [String],
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  qty: {
    type: Number,
    required: true,
  },
  availability: {
    type: Boolean,
    default: true,
  },
  keywords: {
    type: [String],
  },
},
{ timestamps: true }
);

export default mongoose.model("Item", ItemSchema)
