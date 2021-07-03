import express from 'express';
import multer from 'multer';
import response from '../network/response.js';
import messageService from '../service/messageService.js';
const router = express.Router();

const upload = multer({
    dest: 'public/files/',
});

router.get('/', (req, res) => {
    const filterMessages = req.query.chat || null;
    messageService.list(filterMessages)
    .then((messageList) => {
        response.success(req, res, messageList, 200);
    })
    .catch(err =>{
        response.error(req, res, 'Unexpected Error', 500, err);
    })
});

router.post('/', upload.single('file'), (req, res) => {
    console.log(req.file)
    messageService.add(req.body.chat, req.body.user, req.body.message, req.file)
    .then((fullMessage) => {
        response.success(req, res, fullMessage, 201);
    })
    .catch( err => {
        response.error(req, res, 'Invalid data', 400,'Controller Error' + err);
    });
});

router.patch('/:id', (req, res) =>{
    messageService.update(req.params.id, req.body.message)
    .then((data) => {
        response.success(req, res, data, 200);
    })
    .catch(err =>{
        response.error(req, res, 'Internal Error', 500, err);
    })
});

router.delete('/:id',(req, res) => {
    messageService.delete(req.params.id)
    .then(() => {
        response.success(req, res, `Message ${req.params.id} deleted`, 200);
    })
    .catch(err =>{
        response.error(req, res, 'Internal Error', 500, err);
    })
});

export default router;