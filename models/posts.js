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
