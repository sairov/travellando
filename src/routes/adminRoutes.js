const express = require('express');
const router = express.Router();
const uploadFile = require('../middlewares/fileUpload');

const { 
    admin, 
    create,
    save 
} = require('../controllers/adminControllers');

router.post('/admin', admin);

router.get('/create', create);
router.post('/create', uploadFile.single('imagePath'), save);

module.exports = router;