import e from 'express';
import MessageModel from '../dao/messageModel.js';

const functions = {
    addMessageToDb: function addMessage(message) {
        const myMessage = new MessageModel(message);
        myMessage.save();
    },
    listMessagesFromDb: function listMessages(filterChat) {
        return new Promise((resolve, reject) => {
            let filter = {};
        if (filterChat !== null) {
            filter = { chat: filterChat };
        }
        MessageModel.find(filter)
        .populate('user')
        .exec((err, populatedData) =>{
            if (err){
                reject(err);
                return false;
            }
            resolve(populatedData);
        })
    })},
    updateMessageFromDb: async function updateMessage(id, message) {
        const foundMessage = await MessageModel.findOne({
            _id: id,
        });

        foundMessage.message = message;
        const updatedMessage = await foundMessage.save();
        return updatedMessage;
    },
    deleteMessageFromDb: function deleteMessage(id) {
        return MessageModel.deleteOne({
            _id: id,
        });
    }
}

export default functions;