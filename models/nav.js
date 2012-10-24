/* Nav Model
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

NavMenu = new Meteor.Collection('navmenu');
NavFoot = new Meteor.Collection('navfoot');
NavAlt = new Meteor.Collection('navalt');
