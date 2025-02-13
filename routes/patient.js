const express = require('express');
const router = express.Router();
const patient = require('../models/patientschema');
router.post('/addpatient',async (req,res)=>{
    try {
        const patientdata = req.body;
    const newpatient = new patient(patientdata);
    const addpatient = await newpatient.save();
    res.status(201).json(newpatient);
    } 
    catch (err) {
        res.status(400).json({ error: err.message });
    }
    
})

router.get('/',async (req,res)=>{
    try {
        const patients = await patient.find();
        res.status(200).json(patients);
    } catch (err) {
        res.status(500).json({err:'server error'})
    }
})
router.get('/:id',async (req,res)=>{
    try {
        const patientId = req.params.id;
        const patients = await patient.findById(patientId);
        res.status(201).json(patients);
    } catch (err) {
        res.status(404).json({ error: 'Patient not found' });
}
})

router.patch('/:id',async (req,res)=>{
    try{
        const patient_id = req.params.id;
        const patientupdate = req.body;
        const updateddetails = await person.findByIdAndUpdate(patient_id,patientupdate,{
            new : true,
            runValidators : true
        })
        if(!updateddetails){
            res.status(404).json({err:"patient not found"})
        }
        else{
            res.status(200).json(updateddetails);
        }

    }catch(err){
        res.status(500).json({err : "server error"});
    }
})

router.delete('/:id',async (req,res)=>{
    try{
        const patient_id = req.params.id;
        const deletedpatient = await person.findByIdAndDelete(object_id);
        if(!deletedpatient){
            res.status(404).json({err:"patient not found"})
        }else{
            res.status(200).json({message:'patient details deleted successful '});
        }

    }catch(err){
        res.status(500).json({err : "server error"});
    }
})
module.exports = router;


