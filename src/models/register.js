const mongoose=require('mongoose');

//schema creation
const MemberSchema = new mongoose.Schema({
    //  sid:{
    //  type:String,
    //  //required:true,
    //  unique:true   
    // },
    name:{
        type:String,
     required:true,
    },
    hnumber:{
        type:Number,
     required:true
    },
    fnumber:{
        type:String,
        required:true
    },
    familymemcount:{
        type:Number,
    required:true
    },
    sname:{
        type:String,
     required:true,
     unique:true
    },
    dname:{
        type:String,
     required:true
    },
    owner:{
        type:String,
     required:true
    },
    roles:{
        type:String,
     //required:true
    },
    dob:{
        type:Date,
    },
    phone:{
        type:Number,
        required:true,
        unique:true
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    password:{
        type:String,
        required:true
    },
    cpassword:{
        type:String,
        required:true
    },
    // addproof:{
    //     type:Image,
    //     required:true
    // },
    // rcproof:{
    //     type:Image,
    //     required:true
    // }

})

//to create a collection
const Register= new mongoose.model("SocietyMember",MemberSchema);
module.exports = Register;

