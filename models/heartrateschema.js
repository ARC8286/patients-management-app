const mongoose = require('mongoose');
const heartrateSchema = new mongoose.Schema({
    patientId: { 
        type: mongoose.Schema.Types.ObjectId,
         ref: 'patient'
         },
         heartrate: {
            type:Number,
            require:true
        },
        recordedAt: {
             type: Date, 
             default: Date.now 
            }

})

const heartrate = mongoose.model('heartrate',heartrateSchema);
module.exports = heartrate;