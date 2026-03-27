const mongoose = require('mongoose');

const authSchema = new mongoose.Schema({
    name:{
        type:String,
        required: true //If the value of this field is not given, the system will display an error.
    },
    email:{
        type:String,
        required:true,
        unique: true
    },
    phoneNumber:{
      type:String,
      required:false,
    },
    photoURL:{
        type:String,
        required: false,
    },
    role: {
        type:String,
        default: 'user',
        enum: ['user','admin']
    },
    method:{
        type:String,
        default:'email-password',
        enum:['google','email-password']
    }
},
{
  versionKey: false,
  timestamps: true
}
);
const authModel =  mongoose.model("userData", authSchema); //databaser aer collection aer name dite hobe
module.exports = authModel;