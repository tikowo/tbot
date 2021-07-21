module.exports = function makeUserDb({ mysqlConnection }) {
    return Object.freeze({
        insert,
        findById,
        findByUsername,
        all,
        allChatIds,
        insertUserAction
    })
    
    async function insert(user) {
        // const id = await mysqlConnection('users').insert({name: "tiko"});
        // const record = await mysqlConnection('records').where('id', id).first();

        return record;
    }

    async function findById(id) {
        if(!id) {
            throw new Error('id is required');
        }
        return await mysqlConnection('users').where('id', id).first();
    }

    async function all() {
        return await mysqlConnection('users');
    }

    async function allChatIds() {
        return await mysqlConnection('users').select('chat_id');
    }

    async function findByUsername(username) {
        if(!username) {
            throw new Error('username is required');
        }
        try {
            return await mysqlConnection('users').where('username', username).first();
        } catch {
            return null;
        }
    }

    async function insert(userInfo) {
        try {
            return await mysqlConnection('users').insert({
                username: userInfo.username,
                chat_id: userInfo.chat_id
            });
        } catch {
            return null;
        }
    }

    async function insertUserAction(userAction) {
        try {
            return await mysqlConnection('user_logs').insert({
                ...userAction
            })
        } catch(e) {
            return null;
        }
    }
}