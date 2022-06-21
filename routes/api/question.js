const express = require('express');
const router = express.Router();
const questionsCtrl = require('../../controllers/api/questions');
const ensureLoggedIn = require('../../config/ensureLoggedIn');

router.get('/', ensureLoggedIn, questionsCtrl.index);

router.post('/create', ensureLoggedIn, questionsCtrl.create);

router.get('/find/:id', ensureLoggedIn, questionsCtrl.findQuestion)


module.exports = router;