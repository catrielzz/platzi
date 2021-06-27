function hello(name, myCallback) {
    setTimeout(function () {
        console.log('Hello, '+name)
        myCallback(name);
    }, 1000);
};

function bye(name, anotherCallback){
    setTimeout(function () {
        console.log('Good Bye, '+name)
        anotherCallback(name);
    }, 1000);
};

console.log('Starting process...');

hello('Yoel', function (name) {
    bye(name, function() {
        console.log('Finishing process...');
})});
