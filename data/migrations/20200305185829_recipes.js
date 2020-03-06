exports.up = function(knex) {
  return knex.schema
    .createTable("recipes", table => {
      table.increments("id");
      table
        .text("recipe_name")
        .unique()
        .notNullable();
    })
    .createTable("ingredients", table => {
      table.increments("id");
      table
        .text("ingredient_name")
        .unique()
        .notNullable();
    })
    .createTable("shoppingList", table => {
      table.increments("id");
      table
        .integer("recipe_id")
        .references("id")
        .inTable("recipes");
      table
        .integer("ingredient_id")
        .references("id")
        .inTable("ingredients");
      table.text("measurement").notNullable();
      table.float("quantity").notNullable();
    })
    .createTable("steps", table => {
      table.increments();
      table
        .integer("recipe_id")
        .references("id")
        .inTable("recipes");
      table.integer("stepNumber").notNullable();
      table.text("description").notNullable();
    });
};

exports.down = function(knex) {
  return knex.schema
    .dropTableIfExists("steps")
    .dropTableIfExists("recipes_ingredients")
    .dropTableIfExists("ingredients")
    .dropTableIfExists("recipes");
};
