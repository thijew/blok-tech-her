const express = require('express');
const router = express.Router();
const addMovie = require('../controllers/addMovie')
const multer = require('multer');  

const store = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, './static/images/movies');
    },
    filename: function (req, file, cb) {
        cb(null, Date.now()  + file.originalname);
}
});

const upload = multer({
    store: store,
});

router.post('/', upload.single('image'), addMovie.addMovie);

module.exports = router;


