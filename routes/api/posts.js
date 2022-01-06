const express = require('express');
const router = express.Router();
const postsCtrl = require('../../controllers/api/posts');
const ensureLoggedIn = require('../../config/ensureLoggedIn');

// POST /api/users
router.post('/', postsCtrl.create);

module.exports = router;