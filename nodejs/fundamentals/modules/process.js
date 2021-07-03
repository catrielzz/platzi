
process.on('beforeExit', () => {
    console.log('Process close to finish..')
});
process.on('exit', () => {
    console.log('Finished, process...')
});
process.on('uncaughtException', (err, origin) => {
    console.log('Oops, we forgot to catch an exception');
    console.error(err);
});

unexistentFunction();
