
exports.up = function (knex) {
    return knex.schema.createTable('user_logs', function (table) {
        table.increments();
        table.integer('user_id').unsigned().nullable();
        table.integer('date').unsigned();

        table.json('action');
        table.foreign('user_id').references('users.id');
    })
};

exports.down = function (knex) {
    return knex.schema.dropTable('user_logs');
};
