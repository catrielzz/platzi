import chatDTO from '../dto/dbChat.js';

const functions = {
    add: function addChat(userList) {
        return new Promise((resolve, reject) => {
            if (!userList || !Array.isArray(userList)) {
                console.error('[chatController] Chat')
                reject('Invalid List of Participants');
            }
            const chat = {
                users: userList
            }
            resolve(chatDTO.addChatToDb(chat));
        });
    },
    list: function listChats(userId){
        return new Promise((resolve, reject) => {
            resolve(chatDTO.listChatsFromDb(userId));
        });
    }
}

export default functions;