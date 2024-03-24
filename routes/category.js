import express from "express";
import {
  createCategory,
  deleteCategory,
  getCategory,
  getCategories,
  updateCategory,
  updateCategoryAvailability,
} from "../controllers/category.js";

const router = express.Router();
//CREATE
router.post("/:itemid", createCategory);

//UPDATE
router.put("/availability/:id", updateCategoryAvailability);
router.put("/:id", updateCategory);
//DELETE
router.delete("/:id/:itemid", deleteCategory);
//GET

router.get("/:id", getCategory);
//GET ALL

router.get("/", getCategories);

export default router;

