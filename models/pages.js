/* Pages Model
 * 
 * Pages Collection
 * id: id
 * title: title
 * content: html for the page with handlebar support
 * resource: for acl
 * categories: ...
 * tags: ...
 */

Pages = new Meteor.Collection('pages');

if (Meteor.isClient) {
	Meteor.subscribe("pages");
}
