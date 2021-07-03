import messageDTO from '../dto/dbMessage.js';

const functions = {
    add: function addMessage(chat, user, message, file) {
        return new Promise((resolve, reject) => {
            if (!user || !message) {
                console.error('[messageControler] User or message are not included in the request.')
                return reject('Incorrect data request.');
            }
            let fileUrl = '';
            if (file){
                fileUrl = 'http://localhost:3000/app/files/' + file.filename;
            }
            const fullMessage = {
                chat: chat,
                user: user,
                message: message,
                file: fileUrl,
                date: new Date()
            }
            messageDTO.addMessageToDb(fullMessage);
            resolve(fullMessage);
        });
    },
    list: function getMessages(filterChat){
        return new Promise((resolve, reject) => {
            resolve(messageDTO.listMessagesFromDb(filterChat));
        });
    },
    update: function updateMessage(id, message) {
        return new Promise(async (resolve, reject) => {
            if(!id || !message){
                reject('[Message Service] Invalid Data');
                return false;
            }
            const result = await messageDTO.updateMessageFromDb(id, message);
            resolve(result);
        });
    }, 
    delete: function deleteMessage(id){
        return new Promise(async (resolve, reject) => {
            if(!id){
                reject('[Message Service] Invalid Data');
                return false;
            }
            const result = await messageDTO.deleteMessageFromDb(id);
            resolve(result);
        });
    }
}

export default functions;