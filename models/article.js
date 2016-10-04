var mongoose = require("mongoose");

var articleSchema = mongoose.Schema({
    title: {
      type: String,
      index: true,
      required: true
    },
    body: {
      type: String,
      required: true
    },
    date: {
      type: Date,
      default: Date.now
    },
    category: {
      type: String,
      index: true,
      required: true
    }
});

var Article = module.exports = mongoose.model('Article',articleSchema);

//Get All articles
module.exports.findArticles = function(callback){
  Article.find(callback);
}

//Get article by id
module.exports.findArticleById = function(id, callback){
  Article.findById(id,callback);
}

//Get Category articles
module.exports.findArticlesByCategory = function(category, callback){
  var query = {category: category};
  Article.find(query, callback);
}

// Save articles
module.exports.createArticle = function(newArticle,callback){
  newArticle.save(callback);
}

//Update Article
module.exports.updateArticle = function(id,data,callback){
  var title = data.title;
  var body = data.body;
  var category = data.category;

  var query = {_id: id};
  console.log("hmmmk....");
  Article.findById(id, function(err,article){
    if(!article){
        return next(new Error('could not load article'));
    }else{
      article.title = title;
      article.body = body;
      article.category = category;
      console.log("hmmmk....22");

      article.save(callback);
    }
  });
}

//Remove Article
module.exports.removeArticle = function(id,callback){
  Article.find({_id:id}).remove(callback);
}
