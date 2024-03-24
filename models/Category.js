import mongoose from "mongoose";
const CategorySchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    qty: {
      type: Number,
      required: true,
    },
    desc: {
      type: String,
      required: true,
    },
    availability: [{ size: String, unavailable: {type: [Number]}}],
  },
  { timestamps: true }
);

export default mongoose.model("Category", CategorySchema);

