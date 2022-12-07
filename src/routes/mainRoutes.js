const express = require('express');
const router = express.Router();
const { 
    index, 
    blog, 
    contact, 
    post, 
    login 
} = require('../controllers/mainControllers');

router.get('/', index);

router.get('/blog', blog);

router.get('/contact', contact);

router.get('/post', post);

router.get('/login', login);




module.exports = router;