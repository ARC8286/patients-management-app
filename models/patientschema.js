const mongoose = require('mongoose');
const patientSchema = new mongoose.Schema({
    name:{
        type:String,
        require:true
    },
    age:{
        type:Number,
        require:true
    },
    gender:{
        type:String,
        require:true
    },
    createdBy: {
         type: mongoose.Schema.Types.ObjectId,
          ref: 'user' 
        },
        createdAt: {
             type: Date, 
             default: Date.now 
            }
    
})
const patient = mongoose.model('patient',patientSchema);
module.exports = patient;