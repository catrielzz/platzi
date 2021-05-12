const somethingWillHappen = () => {
    return new Promise((resolve, reject) => {
        if (true) {
            resolve('Hey!');
        } else {
            reject('Whooops!');
        }

    });

};

somethingWillHappen()
.then(response => console.log(response))
.catch(reject => console.log(reject));


const somethingWillHappen2 = () => {
    return new Promise((resolve, reject) => {
        if (true) {
            setTimeout( () => {
                resolve("HEY!")
            }, 2000);
        } else {
            const error = new Error('Whooops');
            reject(error);
        }
    });
};

somethingWillHappen2()
.then(response => console.log(response))
.then(() => console.log('Hello'))
.catch(err => console.log(err));

Promise.all([somethingWillHappen(), somethingWillHappen2()])
.then(response => {
    console.log('Array of results', response);
})
.catch(err =>{
    console.log(err);
});