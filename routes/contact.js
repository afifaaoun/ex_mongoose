const express = require('express');
const { GetContact, CreateContact } = require('../controllers/controllers');
const contactRouter = express.Router(); // bch najm nst3ml l post wl get..

// get all user puisque req kenet .find()
contactRouter.get('/',GetContact);

// post new contact
contactRouter.post('/',CreateContact)
module.exports= contactRouter
