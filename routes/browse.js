const express = require('express');
const router = express.Router();
const browse = require('../controllers/browseMovies')

router.get('/', browse.browse);

module.exports = router;