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
NavFoot = new Meteor.Collection('navfoot');
NavMenu = new Meteor.Collection('navmenu');

if (Meteor.isClient) {
	Meteor.subscribe("navalt");
	Meteor.subscribe("navfoot");
	Meteor.subscribe("navmenu");
}
if (Meteor.isServer) {
	Meteor.publish("navalt", function() {
		return NavAlt.find({}, {fields: {id: 1, order: 1, label: 1, page: 1, url: 1}});
	});
	Meteor.publish("navfoot", function() {
		return NavFoot.find({}, {fields: {id: 1, order: 1, label: 1, page: 1, url: 1}});
	});
	Meteor.publish("navmenu", function() {
		return NavMenu.find({}, {fields: {id: 1, order: 1, label: 1, page: 1, url: 1, divider: 1, dropdown: 1}});
	});

	if (NavAlt.find({}).count() === 0) {
		NavAlt.insert({
			order: 1,
			label: "Meteor CMS",
			page: null,
			url: "http://cms.meteor.com"
		});
	}

	if (NavMenu.find({}).count() === 0) {
		NavMenu.insert({
			order: 1,
			label: "About",
			page: "about",
			url: "/about"
		});
		NavMenu.insert({
			order: 2,
			label: "Menu",
			page: null,
			url: null,
			divider: 1,
			dropdown: [
				{
					label: "Contact",
					page: "contact",
					url: "contact"
				},
				{
					label: "Google",
					page: null,
					url: "http://www.google.com",
					divider: 1
				}
			]
		});
	}

	if (NavFoot.find({}).count() === 0) {
		NavFoot.insert({
			order: 1,
			label: "About",
			page: "about",
			url: null
		});
		NavFoot.insert({
			order: 2,
			label: "Contact",
			page: "contact",
			url: null
		});
	}
}
