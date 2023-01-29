
const contactSchema= require('../model/contact');




exports.GetContact = async(req,res)=>{
    try{
        const getContact= await contactSchema.find({},{_id:true,email:true});
        res.status(200).send({message:"this is all the contact",getContact});
    }
    catch(err){
        res.status(500).send("cannot get contacts")
    }
}


exports.CreateContact=async(req,res)=>{
    try{
        const addUser = await new contactSchema(req.body) // bch t3ammer l name, email,age 
        
        addUser.save(); // t3ml save fl database 
        res.status(500).send("new user added",addUser);

    }
    catch{
        res.status(500).send("cannot add a new contact")


    }
}