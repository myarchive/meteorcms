/* Nav Model
 * 
 * All Collections:
 * id: unique id
 * order: in menu
 * label: label
 * page: internal only page name, or null
 * url: external only url, or null
 */

NavAlt = new Meteor.Collection('navalt');
NavMenu = new Meteor.Collection('navmenu');
NavFoot = new Meteor.Collection('navfoot');

if (Meteor.isClient) {
	Meteor.subscribe("navalt");
	Meteor.subscribe("navmenu");
	Meteor.subscribe("navfoot");
}
if (Meteor.isServer) {
	Meteor.publish("navalt", function () { return NavAlt.find({}, {fields: {id: 1, order: 1, label: 1, page: 1, url: 1}}); });
	Meteor.publish("navmenu", function () { return NavMenu.find({}, {fields: {id: 1, order: 1, label: 1, page: 1, url: 1}}); });
	Meteor.publish("navfoot", function () { return NavFoot.find({}, {fields: {id: 1, order: 1, label: 1, page: 1, url: 1}}); });
}
