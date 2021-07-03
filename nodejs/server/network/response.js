const functions = {
    success(req, res, message, status) {
        res.status(status || 200).send({
            'Error': '',
            'Body': message
        });
    },
    error(req, res, message, status, details) {
        console.error('[Response error]', details);
        res.status(status || 500).send({
            'Error': message,
            'Body': ''
        });
    }
}




export default functions;