const multer = require('multer');
const uuid = require('uuid/v1');

const MIME_TYPE_MAP = {
    'image/png': 'png',
    'image/jpg': 'jpg',
    'image/jpeg': 'jpeg',
};

const fileUpload = multer({
    limits: 500000,
    storage: multer.diskStorage({
        destination: (req, file, cb)=>{

        },
        filename: (req, file, cb)=>{
            const ext= MIME_TYPE_MAP[file.mimetype];
            cb(null, uuid()+'.'+ext);
        },
    }),
});

module.exports = fileUpload;