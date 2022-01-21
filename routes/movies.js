var express = require('express');
var movies = require('../movies_reduit.json');
var router = express.Router();
router.get('/' ,(req,res,next)=>{
  
    res.json(movies);
})



module.exports=router;