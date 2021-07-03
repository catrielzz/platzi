function hello(name) {
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

function speak(name) {
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

function conversation(name, times) {
    return new Promise((resolve, reject) => {
        for (times; times < 0; --times) {
            speak();
            resolve(name);
        }
    });

};

function bye(name) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('Good Bye, ' + name);
            resolve(name);
            console.log('Finishing proccess...')
        }, 1000);
    });
};

//Random sentence picker
function randomChoice(arr) {
    return arr[Math.floor(arr.length * Math.random())];
};

// ---
hello('Yoel')
    .then(conversation(3))
    .then(bye)
    .catch(err => {
        console.error('The comunication has an error..');
        console.error(err);
    });