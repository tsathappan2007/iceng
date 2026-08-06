const express = require('express');
const router = express.Router();
const { syncUser, getUserProfile } = require('../controllers/user.controller');

router.post('/sync', syncUser);
router.get('/:clerkId', getUserProfile);

module.exports = router;
