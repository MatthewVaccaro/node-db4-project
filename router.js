const express = require("express");
const db = require("./dbModle");
const router = express.Router();

router.get("/recipes", async (req, res, next) => {
  try {
    const recipes = await db.getRecipes();
    res.status(200).json(recipes);
  } catch (error) {
    next(error);
  }
});

router.get("/ShoppingList/:id", async (req, res, next) => {
  try {
    const id = req.params.id;
    const shoppingList = await db.getShoppingList(id);
    res.status(200).json(shoppingList);
  } catch (error) {
    next(error);
  }
});

router.get("/steps/:id", async (req, res, next) => {
  try {
    const steps = await db.getInstructions(req.params.id);
    res.status(200).json(steps);
  } catch (error) {
    next(error);
  }
});

module.exports = router;
