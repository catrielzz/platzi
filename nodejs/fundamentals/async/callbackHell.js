function hello(name, myCallback) {
    setTimeout(function () {
        console.log('Starting process...');
        console.log('Hello, ' + name);
        myCallback(name);
    }, 1000);
};

function speak(speakCallback) {
    let list =[
        'Hello, how are you?', 'I\'m fine thanks', 'No problem!'
    ];

    setTimeout(function () {
        console.log(randomChoice(list));
        speakCallback();
    }, 1000);
};

function conversation(name, times, callback) {
    if (times > 0) {
        speak(function () {
            conversation(name, --times, callback);
        });
    } else {
        bye(name, function () {
            console.log('Finishing proccess...')
        });
    }
    
};

function bye(name, anotherCallback) {
    setTimeout(function () {
        console.log('Good Bye, ' + name);
        anotherCallback(name);
    }, 1000);
};

//Random sentence picker
function randomChoice(arr) {
    return arr[Math.floor(arr.length * Math.random())];
};

// --
hello('Yoel', function (name) {
    conversation(name, 3, bye);
});
