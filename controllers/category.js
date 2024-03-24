import Category from "../models/Category.js";
import Item from "../models/Item.js";
import { createError } from "../utils/error.js";

export const createCategory = async (req, res, next) => {
  const itemId = req.params.itemid;
  const newCategory = new Category(req.body);

  try {
    const savedCategory = await newCategory.save();
    try {
      await Item.findByIdAndUpdate(itemId, {
        $push: { categories: savedCategory._id },
      });
    } catch (err) {
      next(err);
    }
    res.status(200).json(savedCategory);
  } catch (err) {
    next(err);
  }
};

export const updateCategory = async (req, res, next) => {
  try {
    const updatedCategory = await Category.findByIdAndUpdate(
      req.params.id,
      { $set: req.body },
      { new: true }
    );
    res.status(200).json(updatedCategory);
  } catch (err) {
    next(err);
  }
};
export const updateCategoryAvailability = async (req, res, next) => {
  try {
    await Category.updateOne(
      { "availability._id": req.params.id },
      {
        $push: {
          "availability.$.unavailable": req.body.number
        },
      }
    );
    res.status(200).json("Category status has been updated.");
  } catch (err) {
    next(err);
  }
};
export const deleteCategory = async (req, res, next) => {
  const itemId = req.params.itemid;
  try {
    await Category.findByIdAndDelete(req.params.id);
    try {
      await Item.findByIdAndUpdate(itemId, {
        $pull: { categories: req.params.id },
      });
    } catch (err) {
      next(err);
    }
    res.status(200).json("Category has been deleted.");
  } catch (err) {
    next(err);
  }
};
export const getCategory = async (req, res, next) => {
  try {
    const category = await Category.findById(req.params.id);
    res.status(200).json(category);
  } catch (err) {
    next(err);
  }
};
export const getCategories = async (req, res, next) => {
  try {
    const categories = await Category.find();
    res.status(200).json(categories);
  } catch (err) {
    next(err);
  }
};

