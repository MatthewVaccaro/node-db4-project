exports.seed = async function(knex) {
  await knex("shoppingList").insert([
    { recipe_id: 1, ingredient_id: 1, measurement: "lbs", quantity: 3.2 },
    { recipe_id: 1, ingredient_id: 2, measurement: "cup", quantity: 2.5 },
    { recipe_id: 1, ingredient_id: 3, measurement: "lbs", quantity: 1 }
  ]);
};
