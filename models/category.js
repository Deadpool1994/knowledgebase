var mongoose = require("mongoose");

var categorySchema = mongoose.Schema({
    name: {
      type: String,
      index: true,
      required: true
    },
    description: {
      type: String,
    },
});

var Category = module.exports = mongoose.model('Category',categorySchema);

//Get All Categories
module.exports.findCategories = function(callback){
  Category.find(callback);
}

//Get Category by id
module.exports.findCategoryById = function(id, callback){
  Category.findById(id,callback);
}

//Get Category articles
//module.exports.findArticlesByCategory = function(category, callback){
//  var query = {category: category};
//  Article.find(query, callback);
//}

// Save Category
module.exports.createCategory = function(newCategory,callback){
  newCategory.save(callback);
}
