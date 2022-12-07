const express = require('express');
const router = express.Router();
const { 
    admin, 
    create 
} = require('../controllers/adminControllers');

router.post('/admin', admin);

router.get('/create', create);

module.exports = router;