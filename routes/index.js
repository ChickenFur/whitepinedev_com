var ArticleProvider = require('./articleprovider-memory').ArticleProvider
/*
 * GET home page.
 */

exports.index = function(req, res){
  res.render('index', { title: 'WhitePineDev.com' });
};

/*
* Get the blog page
*/
var articleProvider=new ArticleProvider();
exports.blog = function(req, res){
  articleProvider.findAll(function(error, docs){
  res.render('blog', { 
      title: 'WhitePineDev.com: blog',
      articles:docs} );
  })
  
      
 
};
/*
* Get new blog post page
*/
exports.blog_new_get = function(req, res){
  res.render('new-post', {
      title: 'New Post'} );
};
/*
* post new blog post page
*/
exports.blog_new_post = function(req, res){
  articleProvider.save({
      title: req.param('title'),
      body: req.param('body')
  }, function( error, docs) {
       res.redirect('/blog')  ;
  } );
};


/*
* Get the projects page
*/

exports.projects = function(req, res){
  res.render('projects', { title: 'WhitePineDev.com: projects' } );
};
/*
* Get the about page
*/

exports.about = function(req, res){
  res.render('about', { title: 'WhitePineDev.com: about' } );
};