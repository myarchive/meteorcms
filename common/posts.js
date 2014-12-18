/* Posts Model
 * 
 * Posts Collection
 * id: id
 * date: created
 * edited: array of edited by, and timestamp
 * title: title
 * author: author
 * content: content html
 * resource: for acl
 * categories: ...
 * tags: ...
 */

Posts = new Meteor.Collection('posts');

if (Meteor.isClient) {
	Meteor.subscribe("posts");
}
if (Meteor.isServer) {
	Meteor.publish("posts", function () { return Posts.find({}, {fields: {id: 1, date: 1, edited: 1, title: 1, author: 1, content: 1, resource: 1, categories: 1, tags: 1}}); });
}
