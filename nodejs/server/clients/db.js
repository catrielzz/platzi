import db from 'mongoose'
db.Promise = global.Promise;

async function connect (url) {
    await db.connect(url, {
    useNewUrlParser: true,
    useUnifiedTopology: true
});
console.log('[db] Connected Succesful')
}

export default connect;