module.exports = function makeUserService({ userDb }) {
    return Object.freeze({
        getOrCreateUserByUsername,
        logUserAction
    });

    async function getOrCreateUserByUsername(userInfo) {
        let user;
        user = await userDb.findByUsername(userInfo.username);
        if (!user) {
            const ids = await userDb.insert(userInfo);
            user = await userDb.findById(ids[0]);
        }
        return user;
    }

    async function logUserAction(userAction) {
        await userDb.insertUserAction(userAction)
    }
}