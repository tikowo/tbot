const makeTelegramController = require('./telegramController');

const { userService } = require('../services');

const telegramController = makeTelegramController({ userService });

module.exports = {
    telegramController
}