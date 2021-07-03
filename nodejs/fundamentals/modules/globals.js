let i = 0;
let interval = setInterval(() => {
    console.log('Interval Hello');
    if (i === 3 ){
        clearInterval(interval);
    }
    i++;
}, 1000);

setImmediate(() =>{
    console.log('Immediate Hello');
});