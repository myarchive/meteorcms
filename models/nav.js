/* Nav Model
 * 
 */
NavMenu = new Meteor.Collection('navmenu');
NavFoot = new Meteor.Collection('navfoot');
NavAlt = new Meteor.Collection('navalt');

if (Meteor.isClient) {
	Meteor.subscribe("navmenu");
	Meteor.subscribe("navfoot");
	Meteor.subscribe("navalt");
}