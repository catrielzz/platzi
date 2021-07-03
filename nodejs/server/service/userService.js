import userDTO from '../dto/dbUser.js';

const functions = {
    add: function addUser(name) {
        return new Promise((resolve, reject) => {
            if (!name) {
                console.error('[userController] User')
                reject('Invalid Name');
            }
            const user = {
                name,
            }
            resolve(userDTO.addUserToDb(user));
        });
    },
    list: function getUsers(filterUser){
        return new Promise((resolve, reject) => {
            resolve(userDTO.listUsersFromDb(filterUser));
        });
    },
}

export default functions;