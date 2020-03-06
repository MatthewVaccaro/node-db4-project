const db = require("./data/config");

//All functions here
function getRecipes() {
  return db("*").from("recipes");
}

function getShoppingList(id) {
  return db
    .select(
      "ingredients.ingredient_name",
      "shoppingList.measurement",
      "shoppingList.quantity"
    )
    .from("shoppingList")
    .join("ingredients", "shoppingList.ingredient_id", "ingredients.id")
    .where("recipe_id", id);
}

function getInstructions(id) {
  return db
    .select("steps.stepNumber", "steps.description")
    .from("steps")
    .where("recipe_id", id);
}

module.exports = {
  getRecipes,
  getShoppingList,
  getInstructions
};

// SELECT steps.stepNumber, steps.description from steps
// JOIN recipes ON steps.recipe_id = 1
