function breaks() {
    return 3 + z;
}

async function asyncBreaks() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            try{
                resolve(3 + z);
            } catch(err){
                console.error('async function error..');
                reject(err);
            }
        });
    });
};

async function main (){
    await asyncBreaks()
    .catch((err) => {
        console.log(err);
    });
}

main();

// try {
//     breaks();
// } catch(err) {
//     console.error('Something goes wrong');
//     console.log(err.message);
// }
// console.log('Proccess Finished..')
