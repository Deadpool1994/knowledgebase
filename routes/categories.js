var express = require('express');
var router = express.Router();
var Category = require('../models/category');


/* GET users listing. */
router.get('/', function(req, res, next) {
  Category.find(function(err,categories){
    if(err){
      console.log(err);
    }else{
      res.json(categories);
    }
  });
//  res.send('respond with a resource');
});

/* GET users listing. */
router.get('/:id', function(req, res, next) {
  Category.findById(req.params.id,function(err,category){
    if(err){
      console.log(err);
    }else{
      res.json(category);
    }
  });
//  res.send('respond with a resource');
});

module.exports = router;
