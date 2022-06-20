const express = require('express');
const router = express.Router();
const commentsCtrl = require('../../controllers/api/comments');
const ensureLoggedIn = require('../../config/ensureLoggedIn');

router.post('/create', ensureLoggedIn, commentsCtrl.create)

router.get('/', ensureLoggedIn, commentsCtrl.index)

module.exports = router;
