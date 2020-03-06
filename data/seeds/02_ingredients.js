exports.seed = async function(knex) {
  await knex("ingredients").insert([
    { ingredient_name: "Dough" },
    { ingredient_name: "Sauce" },
    { ingredient_name: "Mozzarella" }
  ]);
};
