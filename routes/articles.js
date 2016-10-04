var express = require('express');
var router = express.Router();
var Article = require('../models/article');


/* GET users listing. */
router.get('/', function(req, res, next) {
  Article.find(function(err,articles){
    if(err){
      console.log(err);
    }
      res.json(articles);

  });
//  res.send('respond with a resource');
});

/* GET users listing. */
router.get('/:id', function(req, res, next) {
  Article.findById(req.params.id,function(err,article){
    if(err){
      console.log(err);
    }
      res.json(article);

  });
//  res.send('respond with a resource');
});

/* GET users listing. */
router.get('/category/:category', function(req, res, next) {
  Article.findArticlesByCategory(req.params.category, function(err,articles){
    if(err){
      console.log(err);
    }
      res.json(articles);

  });
//  res.send('respond with a resource');
});

/* Post Article */
router.post('/', function(req, res, next) {

//getting values
  var title = req.body.title;
  var body = req.body.body;
  var category = req.body.category;

//new Article object;
  var newArticle = new Article({
    title: title,
    body: body,
    category: category
  });

//createArticle
  Article.createArticle(newArticle, function(err,article){
    if(err){
      console.log(err);
    }
      res.location('/articles');
      res.redirect('/articles');

  });
//  res.send('respond with a resource');
});

/* update Article */
router.put('/', function(req, res, next) {

console.log("ojmvoismiovm");
//getting values
  var id = req.data.id;
  var data = {
  title : req.body.title,
  body : req.body.body,
  category : req.body.category
};

//create Article

  Article.updateArticle(id, data, function(err,article){
    if(err){
      console.log(err);
    }
      res.location('/articles');
      res.redirect('/articles');

  });
//  res.send('respond with a resource');
});

/* delete Article */
router.delete('/:id', function(req, res, next) {

//getting values
  var id = req.params.id;

//create Article
  Article.removeArticle(id,function(err,article){
    if(err){
      console.log(err);
    }
      res.location('/articles');
      res.redirect('/articles');

  });
//  res.send('respond with a resource');
});


module.exports = router;
