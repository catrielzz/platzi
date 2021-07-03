import express from 'express';
import message from '../controllers/messageController.js';
import user from '../controllers/userController.js';
import chat from '../controllers/chatController.js'

const routes = (server) => {
    server.use('/message', message)
    server.use('/user', user)
    server.use('/chat', chat)
}

export default routes;