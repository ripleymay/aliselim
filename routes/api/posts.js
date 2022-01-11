const express = require('express');
const router = express.Router();
const postsCtrl = require('../../controllers/api/posts');
const ensureLoggedIn = require('../../config/ensureLoggedIn');

// POST /api/posts
router.post('/', ensureLoggedIn, postsCtrl.create);
router.get('/all/:category', postsCtrl.getCat);
router.get('/all', postsCtrl.getAll);
router.get('/:id', postsCtrl.detail);

module.exports = router;