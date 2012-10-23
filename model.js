/* Pages Model
 * pageid: id
 * title: title
 * parent: null or pageid
 * content: html for the page with [[variables]]
 * resource: for acl
 */
Pages = new Meteor.Collection('pages');
var pageCursor = Pages.find();
var pageHandle = pageCursor.observe({
	added: function (page) {  }, // run when page is added
	changed: function (page) {  }, // run when page is changed
	removed: function (page) {  } // run when page is removed	
});



/* Posts Model
 * postid: id
 * title: title
 * author: userid
 * content: html for the post with [[variables]]
 * resource: for acl
 * category: category
 * tags: tags
 */
var Posts = new Meteor.Collection('posts');
var cursor = Posts.find({tags: 'important'});
var handle = cursor.observe({
	added: function (post) {  }, // run when post is added
	changed: function (post) {  }, // run when post is changed
	removed: function (post) {  } // run when post is removed
});
//Posts.update(my_post_id, {$addToSet: {tags: 'important'}});



/* Photos Model
 * photoid: id
 * title: title
 * caption: caption text
 * location: url to file
 * resource: for acl
 * category: category
 * tags: tags
 */
Photos = new Meteor.Collection('photos');
var photoCursor = Photos.find();
var photoHandle = photoCursor.observe({
	added: function (photo) {  }, // run when photo is added
	changed: function (photo) {  }, // run when photo is changed
	removed: function (photo) {  } // run when photo is removed	
});



/* Audios Model
 * audioid: id
 * title: title
 * author: name
 * summary: summary text
 * location: url to file
 * resource: for acl
 * category: category
 * tags: tags
 */
Audios = new Meteor.Collection('audios');
var audioCursor = Audios.find();
var audioHandle = audioCursor.observe({
	added: function (audio) {  }, // run when audio is added
	changed: function (audio) {  }, // run when audio is changed
	removed: function (audio) {  } // run when audio is removed	
});



/* Books Model
 * bookid: id
 * title: title
 * author: name
 * summary: summary text
 * location: url to file
 * resource: for acl
 * category: category
 * tags: tags
 */
Books = new Meteor.Collection('books');
var bookCursor = Books.find();
var bookHandle = bookCursor.observe({
	added: function (book) {  }, // run when book is added
	changed: function (book) {  }, // run when book is changed
	removed: function (book) {  } // run when book is removed	
});



/* Files Model
 * fileid: id
 * title: title
 * summary: summary text
 * location: url to file
 * resource: for acl
 * category: category
 * tags: tags
 */
Files = new Meteor.Collection('files');
var fileCursor = Files.find();
var fileHandle = fileCursor.observe({
	added: function (file) {  }, // run when file is added
	changed: function (file) {  }, // run when file is changed
	removed: function (file) {  } // run when file is removed	
});



// more here...