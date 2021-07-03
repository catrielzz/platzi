const os = require('os');

console.log(os.arch());
console.log(os.platform());
console.log(os.cpus().length);

console.log(os.constants);

const SIZE = 1024;
function kb(bytes) { return bytes / SIZE}
function mb(bytes) { return kb(bytes) / SIZE}
function gb(bytes) { return mb(bytes) / SIZE}

console.log('kb = ', kb(os.freemem()));
console.log('mb= ', mb(os.freemem()));
console.log('gb= ', gb(os.freemem()));