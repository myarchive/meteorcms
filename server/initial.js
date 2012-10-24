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
				"title": "Site title",
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
			template: "default",
			resource: "guest",
			categories: null,
			tags: null,
			content: "<legend>Welcome to Meteor CMS</legend><p>This is the home page. In reality this page should be rendered from MongoDB so creation and choosing of pages and paths would be dynamic</p><blockquote><p>The WYSIWYG editor should be completely compatible with Twitter Bootstrap such as in quotes</p><small><cite>Aric Camarata</cite></small></blockquote>"
		});
	}
	
});
