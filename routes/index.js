var express = require('express');
var router = express.Router();

const { dataadd } = require('../controller/restiones');
const { login } = require('../controller/login');
const { addss } = require('../controller/addpro');
const { finfone } = require('../controller/findallproduct');



router.post('/restions' , dataadd)
router.get('/login' , login)
router.post('/addproducts' , addss)
router.get('/findallproduct' , finfone)



module.exports = router;
