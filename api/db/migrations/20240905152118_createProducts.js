exports.up = function (knex) {
    return knex.schema.createTable("products", (table) => {
      table.increments("product_id").primary(); // Sets `product_id` as the primary key
      table.string("product_name");
      table.text("aisle");
      table.text("department");
      table.decimal("price");
      table.timestamps(true, true);
    });
  };

exports.down = function(knex) {
    return knex.schema.dropTable("products");
};
