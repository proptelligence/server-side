const express = require('express');
const { signup, login } = require('../controllers/auth.js');
const { contactus } = require('../controllers/contact.js');

const router=express.Router();
router.post('/signup',signup)
router.post('/login',login);
router.post('/contactus',contactus);


module.exports = router;
