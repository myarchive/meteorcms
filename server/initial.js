/* Initialization script for a freshly installed CMS instance
 * This will check and create all default settings and configurations needed 
 * Upon first visit to the site with these default settings a user will go through a setup process
 */

Meteor.startup(function () {

	// Initial Config
	if (Config.find({}).count() === 0) {
		Config.insert({
			application : {
				"site": "Site name",
				"title": "Site title"
			},
			modules: {
				"foo": {
					"option": 0
				}
			},
			themes: {
				"default": {
					"active": true
				},
				"foo": {
					"active": false,
					"primaryColor": "#111",
					"secondaryColor": "#222"
				}
			}
		});
	}
	
	if (Pages.find({}).count() < 3) {
		Pages.insert({
			page: "home", // unique name
			title: "Home",
			content: "<legend>Welcome to Meteor CMS</legend><p>This is the home page. In reality this page should be rendered from MongoDB so creation and choosing of pages and paths would be dynamic</p><blockquote><p>The WYSIWYG editor should be completely compatible with Twitter Bootstrap such as in quotes</p><small><cite>Aric Camarata</cite></small></blockquote>",
			resource: "guest",
			categories: null,
			tags: null,
			url: "/",
			btemplate: null,
			ptemplate: "home"
			
		});
		Pages.insert({
			page: "about", // unique name
			title: "About",
			content: "<legend>About us</legend><p>This is a placeholder for the about page.</p>",
			resource: "guest",
			categories: null,
			tags: null,
			url: "/about",
			btemplate: null,
			ptemplate: null
		});
		Pages.insert({
			page: "contact", // unique name
			title: "Contact",
			content: "<legend>Contact us</legend><p>This is a placeholder for the contact page.</p>",
			resource: "guest",
			categories: null,
			tags: null,
			url: "/contact",
			btemplate: null,
			ptemplate: null
		});
	}
	
	if (NavAlt.find({}).count() < 1) {
		NavAlt.insert({
			id: 1, // unique id
			order: 1,
			label: "Meteor CMS",
			page: null,
			url: "http://cms.meteor.com"
		});
	}
	
	if (NavMenu.find({}).count() < 2) {
		NavMenu.insert({
			id: 1, // unique id
			order: 1,
			label: "Home",
			page: "home",
			url: null
		});
		NavMenu.insert({
			id: 2, // unique id
			order: 2,
			label: "About",
			page: "about",
			url: null
		});
	}
	
	if (NavFoot.find({}).count() < 2) {
		NavFoot.insert({
			id: 1, // unique id
			order: 1,
			label: "About",
			page: "about",
			url: null
		});
		NavFoot.insert({
			id: 2, // unique id
			order: 2,
			label: "Contact",
			page: "contact",
			url: null
		});
	}

	// MUST REVIEW THIS TO TRIGGER A FIRST TIME SETUP PAGE WHICH THE USER CHOOSES AN ADMIN USER+PASS
	// AFTER CREATING A USER+PASS and choosing SITE NAME, TITLE, BRAND/LOGO, ETC ETC ETC user will be taken to
	// admin section to create or edit pages, menus, content, etc...
	/*if (Meteor.users.find({}).count() === 0) {
		Meteor.users.insert({
			username: "admin@email.com", // unique name
			emails: [
				// each email address can only belong to one user.
				{ address: "admin@email.com", verified: true }
			],
			profile: {role: "admin"}
		});
	}*/

});
