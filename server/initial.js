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

	// Form for user to create this? may be removed?
	if (Meteor.users.find({}).count() === 0) {
		Meteor.users.insert({
			username: "admin@email.com", // unique name
			emails: [
				// each email address can only belong to one user.
				{ address: "admin@email.com", verified: true }
			],
			profile: {role: "admin"}
		});
	}
	
	// More robust?
	if (Pages.find({}).count() === 0) {
		Pages.insert({
			page: "home", // unique name
			title: "Home",
			template: "home",
			resource: "guest",
			categories: null,
			tags: null,
			url: "/",
			content: "<legend>Welcome to Meteor CMS</legend><p>This is the home page. In reality this page should be rendered from MongoDB so creation and choosing of pages and paths would be dynamic</p><blockquote><p>The WYSIWYG editor should be completely compatible with Twitter Bootstrap such as in quotes</p><small><cite>Aric Camarata</cite></small></blockquote>"
		});
		Pages.insert({
			page: "about", // unique name
			title: "About",
			template: "default",
			resource: "guest",
			categories: null,
			tags: null,
			url: "/about",
			content: "<legend>About us</legend><p>This is a placeholder for the about page.</p>"
		});
		Pages.insert({
			page: "contact", // unique name
			title: "Contact",
			template: "default",
			resource: "guest",
			categories: null,
			tags: null,
			url: "/contact",
			content: "<legend>Contact us</legend><p>This is a placeholder for the contact page.</p>"
		});
	}
	
	// More robust?
	if (NavMenu.find({}).count() === 0) {
		NavMenu.insert({
			id: 1, // unique id
			order: 1,
			label: "Home",
			page: "home",
			url: null
		});
	}
	
	// More robust?
	if (NavFoot.find({}).count() === 0) {
		Pages.insert({
			id: 1, // unique id
			order: 1,
			label: "About",
			page: "about",
			url: null
		});
		Pages.insert({
			id: 2, // unique id
			order: 2,
			label: "Contact",
			page: "contact",
			url: null
		});
	}
	
	// Alternate navigation at the top right (usually) of the page usually for other sections or sites
	/* 	if (NavAlt.find({}).count() === 0) {
	 * 	Pages.insert({
	 * 		id: 1, // unique id
	 * 		order: 1,
	 * 		label: "Home",
	 * 		page: "home"
	 * 	});
	 * }
	 */
	
});
