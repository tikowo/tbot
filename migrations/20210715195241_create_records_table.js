
exports.up = function (knex) {
    return knex.schema.createTable('users', function(table) {
        table.increments();
        table.integer('chat_id').unsigned().unique();

        table.string('username').unique();
    })
};

exports.down = function (knex) {
    return knex.schema.dropTable('users');
};
