const makeUserService = require('./userService');

const { mysqlDb } = require('../db');

const services = Object.freeze({
    userService: makeUserService({ userDb: mysqlDb.userDb })
})

module.exports = services;