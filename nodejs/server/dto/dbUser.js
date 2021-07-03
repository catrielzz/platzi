import UserModel from '../dao/userModel.js';

const functions = {
    addUserToDb: function addUser(name) {
        const myUser = new UserModel(name);
        return myUser.save();
    },
    listUsersFromDb: async function listUsers(filterUser) {
        let filter = {};
        if (filterUser !== null) {
            filter = { name: filterUser };
        }
        const users = await UserModel.find(filter);
        return users;
    },
}

export default functions;