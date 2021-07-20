module.exports = function makeTelegramController({ userService }) {
    return Object.freeze({
        index
    })

    async function index(msg) {
        const userInfo = {
            chat_id: msg.chat.id,
            username: msg.chat.username
        }
        const user = await userService.getOrCreateUserByUsername(userInfo);
        const userAction = {
            user_id: user.id,
            date: msg.date,
            action: JSON.stringify(msg)
        }
        const userLog = await userService.logUserAction(userAction);
        return user.username;
    }
}