const makeShopService = require('./shopService');
const makeRecordService = require('./recordService');
const makeUserService = require('./userService');

const { shopDb } = require('../db');
const { mysqlDb } = require('../db');

const { shopValidator } = require('../validators');

const services = Object.freeze({
    shopService: makeShopService({ shopDb, shopValidator }),
    recordService: makeRecordService({ recordDb: mysqlDb.recordDb }),
    userService: makeUserService({ userDb: mysqlDb.userDb })
})

module.exports = services;