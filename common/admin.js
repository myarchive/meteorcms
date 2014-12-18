/* Admin Model
 * 
 * All Collections:
 * id: unique id
 * order: in menu
 * label: label
 * page: internal only page name, or null
 * url: external only url, or null
 */

AdminMenu = new Meteor.Collection('adminmenu');

if (Meteor.isClient) {
	Meteor.subscribe("adminmenu");
}
if (Meteor.isServer) {
	Meteor.publish("adminmenu", function () { return AdminMenu.find({}, {fields: {id: 1, order: 1, name: 1, icon: 1, label: 1, pages: 1}}); });
}
