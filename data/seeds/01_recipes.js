const cleaner = require("knex-cleaner");

exports.seed = async function(knex) {
  await knex("recipes").insert([{ recipe_name: "Pizza" }]);
};
