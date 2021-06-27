async function hello(name) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (name === undefined) {
                reject('Name Not Found');
            }
            console.log('Starting process...');
            console.log('Hello, ' + name);
            resolve(name);
        }, 1000);
    });
};

async function speak(name) {
    let list = [
        'Hello, how are you?', 'I\'m fine thanks', 'No problem!'
    ];
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log(randomChoice(list));
            resolve(name);
            if (name === undefined) {
                reject('Name Not Found');
            }
        }, 1000);
    });
};

function randomChoice(arr) {
    return arr[Math.floor(arr.length * Math.random())];
};

async function bye(name) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('Good Bye, ' + name);
            resolve(name);
            console.log('Finishing proccess...')
        }, 1000);
    });
};

async function main(){
    let name = await hello('Yoel')
    await speak();
    await bye(name);
};

console.log('Testing async..');
main();
console.log('Testing async before exec..');