const express = require('express');
const router = express.Router();
const { 
    admin, 
    create,
    save 
} = require('../controllers/adminControllers');

router.post('/admin', admin);

router.get('/create', create);
router.post('/create', save);

module.exports = router;