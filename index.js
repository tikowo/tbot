const TelegramBot = require('node-telegram-bot-api');
const schedule = require('node-schedule');
const token = '1899888966:AAFhoorXNvum94jMsaSdumZx7sJ6xCjb2nM';
const bot = new TelegramBot(token, { polling: true });
const { telegramController } = require('./src/controllers');


bot.onText(/\/echo (.+)/, (msg, match) => {
    // 'msg' is the received Message from Telegram
    // 'match' is the result of executing the regexp above on the text content
    // of the message
    const chatId = msg.chat.id;
    const resp = match[1]; // the captured "whatever"

    // send back the matched "whatever" to the chat
    bot.sendMessage(chatId, resp);
});

// Listen for any kind of message. There are different kinds of
// messages.
bot.on('message', async (msg) => {
    const a = await telegramController.index(msg);

    const { username = null, id = null } = msg.chat;
    if (!username || !id) {
        return;
    }

    const chatId = msg.chat.id;

    // send a message to the chat acknowledging receipt of their message
    bot.sendMessage(chatId, 'Received your message');

    bot.sendMessage(chatId, a);

    // bot.sendMessage(msg.chat.id, "Welcome", {
    //     "reply_markup": {
    //         "keyboard": [["Sample text", "Second sample"], ["Keyboard"], ["I'm robot"]]
    //     }
    // });
});

const job = schedule.scheduleJob('* * * * *', async function (fireDate) {
    await telegramController.notifyAllUsers(bot);
    console.log('This job was supposed to run at ' + fireDate + ', but actually ran at ' + new Date());
});