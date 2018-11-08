
exports.up = function (knex, Promise) {
  return knex.schema.createTable('character', function (table) {
    table.increments()
    table.string('name')
    table.integer('height')
    table.integer('mass')
    table.integer('force_id').references('force.id').unsigned().onDelete('cascade')
  })

};

//last table column above, specifies foreign key. reference('tableName.pk')
//unsigned specifies non-negative integer, onDelete('cascade') specifies that
//if reference is deleted, delete this column too (bc they rely on each other)

exports.down = function (knex, Promise) {
  return knex.schema.dropTableIfExists('character')
};
