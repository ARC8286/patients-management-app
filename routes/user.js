const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const user = require('../models/userschema');

router.post('/register',async (req,res)=>{
    try{
        const {name,email,password} = req.body;
        const hashpassword = await bcrypt.hash(password,10);
        const newuser = new user({name,email,password:hashpassword});

        const userregistration = await newuser.save();
        res.status(201).json({ message: 'User registered successfully'})
    }catch(err){
        res.status(400).json({ error: err.message });
    }
})


router.post('/login', async (req, res) => {
    try {
        const { email, password } = req.body;
        const userinfo = await user.findOne({ email });

        if (!userinfo) {
            return res.status(401).json({ error: 'Invalid credentials' });
        }

        const isMatch = await bcrypt.compare(password, userinfo.password);

        if (!isMatch) {
            return res.status(401).json({ error: 'Invalid credentials' });
        }
        else{

            return res.status(200).json({ message: 'Login Successful' });
        }

    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

router.get("/",async (req,res)=>{
    try {
        const userdata = await user.find();
        res.status(200).json(userdata);
    } 
    catch (err) {
        res.status(500).json({ error: err.message });
    }
})
module.exports = router;