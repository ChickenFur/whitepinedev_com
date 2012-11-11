
/*
 * GET home page.
 */

exports.index = function(req, res){
  res.render('index', { title: 'WhitePineDev.com' });
};

/*
* Get the blog page
*/

exports.blog = function(req, res){
  res.render('blog', { title: 'WhitePineDev.com: blog' } );
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