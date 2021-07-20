const makeShopController = require('./shopController');
const makeRecordController = require('./recordController');
const makeTelegramController = require('./telegramController');

const { shopService, recordService, userService } = require('../services');

const telegramController = makeTelegramController({ userService });
const shopController = makeShopController({ shopService });
const recordController = makeRecordController({ recordService });

module.exports = {
    shopController,
    recordController,
    telegramController
}