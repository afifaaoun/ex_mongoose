const mongoose=require('mongoose');



const contactSchema=mongoose.Schema({
    name : String,
    age: Number,
    email: String
    //{
    //     type:String,
    //     required: true,
    //     unique: true
    // }
    
    //,
    // foods : {
    //     type : Array,
    //     items:{
    //         type : String
    //     }
    // }
})


module.exports= mongoose.model('contact', contactSchema)