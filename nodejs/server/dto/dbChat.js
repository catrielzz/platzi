import ChatModel from '../dao/chatModel.js';

const functions = {
    addChatToDb: function addChat(userList) {
        const myChat = new ChatModel(userList);
        return myChat.save();
    },
    listChatsFromDb: async function listChats(userId) {
        return new Promise((resolve, reject) => {
            let filter = {};
        if (userId) {
            filter = { users: userId };
        }
        ChatModel.find(filter)
        .populate('users')
        .exec((err, populatedData) =>{
            if (err){
                reject(err);
                return false;
            }
            resolve(populatedData);
        })
    })},
}

export default functions;