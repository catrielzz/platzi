// let buffer = Buffer.alloc(1);
// let buffer = Buffer.from([1,2,'falopa']);

let buffer = Buffer.from('Hello.');
console.log(buffer);
console.log(buffer.toString())

//--

let abecedary = Buffer.alloc(26);

console.log();

for (let i = 0; i < abecedary.length; i++){
    abecedary[i] = i + 97
}
console.log(abecedary);
console.log(abecedary.toString());