const fs = require('fs');
const stream = require('stream');
const util = require('util');

let data = '';

let readableStream = fs.createReadStream(__dirname + '/input.txt');

// Stream writing

// readableStream.setEncoding('UTF8');
// readableStream.on('data', (chunk) => {
//     data += chunk;
// });

// readableStream.on('end', () => {
//     console.log(data);
// });

//Buffer writing
// process.stdout.write('Hello');
// process.stdout.write('How');
// process.stdout.write('Are');
// process.stdout.write('You');

// 
const Transform = stream.Transform;

function Mayus() {
    Transform.call(this);
}

util.inherits(Mayus, Transform);

Mayus.prototype._transform = function (chunk, codif, cb) {
    chunkMayus = chunk.toString().toUpperCase();
    this.push(chunkMayus);
    cb();
};


let mayus = new Mayus();

readableStream
    .pipe(mayus)
    .pipe(process.stdout);