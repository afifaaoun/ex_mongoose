const mongoose= require('mongoose');
const dotenv=require('dotenv').config();
const URI=process.env.MONGO_URI;

const connectDb=async()=>{  // assync bch ma tbloquilich les instructions li ba3dha 
    try{ // si err reussi te5dem l try 
        // ContactList nzidouha fl lien
await mongoose.connect(URI,{useNewUrlParser:true, useUnifiedTopology:true})
console.log('connected to database')
    }catch(err){ // si nn recherche des errors    
        console.log(err)
        }
}


module.exports= connectDb;
