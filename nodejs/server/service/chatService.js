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
    },
    // update: function updateMessage(id, message) {
    //     return new Promise(async (resolve, reject) => {
    //         if(!id || !message){
    //             reject('[Message Service] Invalid Data');
    //             return false;
    //         }
    //         const result = await store.updateMessageFromDb(id, message);
    //         resolve(result);
    //     });
    // }, 
    // delete: function deleteMessage(id){
    //     return new Promise(async (resolve, reject) => {
    //         if(!id){
    //             reject('[Message Service] Invalid Data');
    //             return false;
    //         }
    //         const result = await store.deleteMessageFromDb(id);
    //         resolve(result);
    //     });
    // }
}

export default functions;