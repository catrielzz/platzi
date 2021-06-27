const bcrypt = require('bcrypt');

const pass = 'Sfabsolution11!';

async function hashPassword(pass){
    return new Promise((resolve, reject) => {
    bcrypt.hash(pass, 5, (err, hash) => {
            console.log(hash);
            if (pass.length < 7){
                reject('Your password is too short');
            }
            resolve(hash);
        });
})};

async function comparePassword(pass, hash) {
    return new Promise((resolve, reject) => {
    bcrypt.compare(pass, hash, (err, res) => {
            console.log(res);
            resolve(res);
        });
    });
};

async function main(){
    let hash = await hashPassword(pass);
    await comparePassword(pass, hash);
};

main();