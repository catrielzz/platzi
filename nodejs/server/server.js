// -- Imports
import express from 'express';
import routes from './network/routes.js'
import bodyParser from 'body-parser';
import db from './clients/db.js'

const server = express();

// -- Init db
db('Insert database here');

// -- Server Configurations

server.listen(3000, () => {
    console.log('Server listening on port 3000!')
});
server.use(bodyParser.json());
server.use(bodyParser.urlencoded({extended: false}));
routes(server);
server.use('/app', express.static('public'));

