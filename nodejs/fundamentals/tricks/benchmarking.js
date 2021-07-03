console.time('All');
let sum = 0;
console.time('Timer');
for (let i = 0; i < 100_000_000; i++){
    sum += i;
};
console.timeEnd('Timer');

console.time('AsyncTimer');
console.log('Async process init')
main();
let sum2 = 0;
console.time('Timer2');
for (let j = 0; j < 100_000_000; j++){
    sum2 += j;
};
console.timeEnd('Timer2');

async function asyncFunc() {
    return new Promise((resolve) => {
        setTimeout( () => {
            resolve(console.log('Async process finished'));
        }, 1000);
    });
};

console.timeEnd('All');

async function main(){
    await asyncFunc()
    .then(() =>{
        console.timeEnd('AsyncTimer');
    });
}