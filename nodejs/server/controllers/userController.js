import express from 'express';
import response from '../network/response.js';
import userService from '../service/userService.js';
const router = express.Router();

router.post('/', (req, res) => {
    userService.add(req.body.name)
    .then(data => {
        response.success(req, res, data, 201);
    })
    .catch(err => {
        response.error(req, res, 'Internal Error', 500, err);
    });
});

router.get('/', (req, res) => {
    const filterUsers = req.query.name || null;
    userService.list(filterUsers)
    .then((userList) => {
        response.success(req, res, userList, 200);
    })
    .catch(err =>{
        response.error(req, res, 'Unexpected Error', 500, err);
    })
});

export default router;