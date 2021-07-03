import express from 'express';
import response from '../network/response.js';
import chatService from '../service/chatService.js';
const router = express.Router();

router.post('/', (req, res) => {
    chatService.add(req.body.chat)
    .then(data => {
        response.success(req, res, data, 201);
    })
    .catch(err => {
        response.error(req, res, 'Internal Error', 500, err);
    });
});

router.get('/:userId', (req, res) => {
    chatService.list(req.params.userId)
    .then((chatList) => {
        response.success(req, res, chatList, 200);
    })
    .catch(err =>{
        response.error(req, res, 'Unexpected Error', 500, err);
    })
});

export default router;