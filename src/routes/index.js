const express = require('express');
const router = express.Router();
const {controllers} = require('../controllers/Controllers');
const {data} = require('../controllers/Data');
const Warning = require('../models/Warning');


router.post('/controller/:state/:title',controllers);


router.get('/history/:title',data);

router.get('/warnings', async function (req,res){
    const data = await Warning.find();
    res.json(data);
    
});


module.exports = router
