const { exec, spawn } = require('child_process');

// exec('node modules/errors.js', (err, stdout, sterr) => {
//     if (err) {
//         console.error(err);
//         return false;
//     }
//     console.log(stdout);
// });

let process = spawn('dir');

console.log(process.pid);
console.log(process.connected);

process.stdout.on('data', (data) =>{
    console.log('Is killed?');
    console.log(process.killed);
    console.log(data.toString());
});

process.on('exit', () => {
    console.log('Process finished..');
});