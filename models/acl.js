/* ACL Model
 * 
 * Users collection has a roles tag which can be an array of all roleid's they have
 * 
 * Roles Collection
 * id: id
 * title: title
 * inherits: id or id's to inherit their permissions
 * 
 * Resources Collection
 * id: id
 * title: title
 * 
 * Permissions Collection
 * roleid: role
 * resourceid: resource
 * privilege: null for all, or an array of things like edit, view, add, delete, etc.
 */

// To Do: discuss placing which parts in the server side
// Note: Since all content comes down from server we still have the ability to compare user perms to resource there

Roles = new Meteor.Collection('roles');
Resources = new Meteor.Collection('resources');
Permissions = new Meteor.Collection('permissions');