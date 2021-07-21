const knex = require('knex')({
    client: 'mysql',
    connection: {
        host: '127.0.0.1',
        user: 'root',
        password: 'password',
        database: 'tbot'
    },

    pool: {
        min: 2,
        max: 10
    },
});

const makeRecordDb = require('./recordDb');
const makeUserDb = require('./userDb');

const recordDb = makeRecordDb({ mysqlConnection: knex })
const userDb = makeUserDb({ mysqlConnection: knex })


module.exports = Object.freeze({
    recordDb,
    userDb
})