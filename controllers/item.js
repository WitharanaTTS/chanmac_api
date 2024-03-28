import Item from "../models/Item.js";
import Category from "../models/Category.js";

export const createItem = async (req, res, next) => {
  const newItem = new Item(req.body);

  try {
    const savedItem = await newItem.save();
    res.status(200).json(savedItem);
  } catch (err) {
    next(err);
  }
};
export const updateItem = async (req, res, next) => {
  try {
    const updatedItem = await Item.findByIdAndUpdate(
      req.params.id,
      { $set: req.body },
      { new: true }
    );
    res.status(200).json(updatedItem);
  } catch (err) {
    next(err);
  }
};
export const deleteItem = async (req, res, next) => {
  try {
    await Item.findByIdAndDelete(req.params.id);
    res.status(200).json("Item has been deleted.");
  } catch (err) {
    next(err);
  }
};
export const getItem = async (req, res, next) => {
  try {
    const item = await Item.findById(req.params.id);
    res.status(200).json(item);
  } catch (err) {
    next(err);
  }
};
export const getItems = async (req, res, next) => {
  const { min, max, ...others } = req.query;
  try {
    const items = await Item.find({
      ...others,
      price: { $gt: min | 1, $lt: max || 9999 },
    }).limit(req.query.limit);
    res.status(200).json(items);
  } catch (err) {
    next(err);
  }
};
export const countByCity = async (req, res, next) => {
  const cities = req.query.cities.split(",");
  try {
    const list = await Promise.all(
      cities.map((city) => {
        return Item.countDocuments({ city: city });
      })
    );
    res.status(200).json(list);
  } catch (err) {
    next(err);
  }
};
export const countByType = async (req, res, next) => {
  try {
    const itemCount = await Item.countDocuments({ type: "item" });
    const poloCount = await Item.countDocuments({ type: "polo" });
    const vNeckCount = await Item.countDocuments({ type: "vNeck" });
    const crewNeckCount = await Item.countDocuments({ type: "crewNeck" });

    res.status(200).json([
      { type: "item", count: itemCount },
      { type: "polo", count: poloCount },
      { type: "vNeck", count: vNeckCount },
      { type: "crewNeck", count: crewNeckCount },
      
    ]);
  } catch (err) {
    next(err);
  }
};

export const getItemCats = async (req, res, next) => {
  try {
    const item = await Item.findById(req.params.id);
    const list = await Promise.all(
      item.categories.map((category) => {
        return Category.findById(category);
      })
    );
    res.status(200).json(list)
  } catch (err) {
    next(err);
  }
};

