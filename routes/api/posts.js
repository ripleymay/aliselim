const express = require('express');
const router = express.Router();
const postsCtrl = require('../../controllers/api/posts');
const ensureLoggedIn = require('../../config/ensureLoggedIn');

// POST /api/posts
router.post('/', postsCtrl.create);
router.get('/:category', postsCtrl.getAll);

module.exports = router;