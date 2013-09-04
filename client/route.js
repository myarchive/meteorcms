/* Routing system
 * Posts and other content types can have a dynamic routing generation..
 * ie. http://site.com/name-of-post vs. http://site.com/2012/10/24/name-of-post and any other variations
 * We can also do a default that http://site.com/pagename be a default behavior then a page can override that
 * Pages have a setting in mongo to have a url assigned to them, we need to loop and build that here also
 */

Meteor.Router.add({
  '/news': 'news',
  '*': 'not_found'
});
