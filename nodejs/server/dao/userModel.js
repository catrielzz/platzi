import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const mySchema = new Schema({
    name: String,
});

const userModel  = mongoose.model('User', mySchema);

export default userModel;