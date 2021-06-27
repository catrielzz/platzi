const fs = require('fs').promises;

const readFile = async (dir) => {
    const file = await fs.readFile(dir, { encondig: 'utf-8' });
    console.log(file.toString());
};

const writeFile = async (dir, text) => {
    const file = await fs.writeFile(dir, text);
}

const deleteFile = async (dir) => {
    const file = await setTimeout(() => {
        fs.unlink(dir);
    }, 1000);
    console.log('Deleted' + dir)
}

readFile('./modules/file.txt');
writeFile('./modules/file1.txt', 'Hello, world, falopa');
readFile('./modules/file1.txt');
deleteFile('./modules/file1.txt');

