// -- Imports
import express from 'express';
import { createServer } from 'http';
import routes from './network/routes.js';
import bodyParser from 'body-parser';
import db from './clients/db.js';
import config from './config.js';
import socket from './socket.js';

// -- Init db
db(config.dbUrl);

// -- Server Configurations
const app = express();
const server = createServer(app);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
socket.connect(server);
routes(app);
app.use('/' + config.publicRoute, express.static('public'));

server.listen(3000, () => {
    console.log(`Server listening on port ${config.port}!`)
});

