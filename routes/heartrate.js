const express = require('express');
const router = express.Router();
const heartrate = require('../models/heartrateschema');
router.post('/',async (req,res)=>{
    try {
        const patientheartrate  = req.body;
        const newrecord = new heartrate(patientheartrate);
        const record = await newrecord.save();
        res.status(201).json(record);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
    
})

router.get('/:patient_id',async (req,res)=>{
    try {
        const patient_id =  req.params.patient_id;
        const records = await heartrate.find(patient_id);
        res.json(records);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
})
module.exports = router;