exports.seed = async function(knex) {
  await knex("steps").insert([
    { recipe_id: 1, stepNumber: 1, description: "Roll your dough out" },
    {
      recipe_id: 1,
      stepNumber: 2,
      description: "Rub in that sweet sweet sauce with your hands"
    },
    {
      recipe_id: 1,
      stepNumber: 3,
      description: "Add more cheese then what is called for"
    }
  ]);
};
