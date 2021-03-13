const express = require('express');
const router = express.Router();
const {googlelogin, updateRole} = require('../controllers/user');

router.post('/googlelogin', googlelogin)
router.post('/updateRole', updateRole)

module.exports = router;