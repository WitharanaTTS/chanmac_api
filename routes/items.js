import express from "express";
import {
  createItem,
  deleteItem,
  countByType,
  getItem,
  getItemCats,
  getItems,
  updateItem,
} from "../controllers/item.js";
import Item from "../models/Item.js";

const router = express.Router();

//CREATE
router.post("/", createItem);

//UPDATE
router.put("/:id", updateItem);
//DELETE
router.delete("/:id", deleteItem);
//GET

router.get("/find/:id", getItem);
//GET ALL

router.get("/", getItems);
router.get("/countByType", countByType);
router.get("/category/:id", getItemCats);

export default router;

