import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const mySchema = new Schema({
    users: [{
        type: Schema.ObjectId,
        ref: 'User'
    }]
});

const chatModel  = mongoose.model('Chat', mySchema);

export default chatModel;