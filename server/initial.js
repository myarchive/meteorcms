Meteor.startup(function() {
	
	//	service: "facebook",
	//	appId: "329335093880226",
	//	secret: "e025ef6c9200aa925c929d913a52958c"

	//	service: "google",
	//	clientId: "404654317900-4jqj1u040ks6j9ik7610of653k09pcv9.apps.googleusercontent.com",
	//	secret: "wIOKkJVWafAojihAeKOTH8-S"

	// Initial Config
	if (Config.find({}).count() === 0) {
		Config.insert({
			settings: {
				"site": "My Site",
				"title": "My Title",
				"slogan": "My cool slogan!"
			},
			modules: {
				"foo": {
					"option": 0
				}
			},
			themes: {
				active: "default"
			}
		});
	}

	if (Pages.find({}).count() === 0) {
		Pages.insert({
			page: "admin", // unique name
			title: "Admin",
			content: "<legend>Admin Dashboard</legend>",
			resource: "admin",
			categories: null,
			tags: null,
			url: "/admin",
			btemplate: "admin",
			ptemplate: "admin"
		});
		Pages.insert({
			page: "home", // unique name
			title: "Home",
			content: "<legend>Welcome to Meteor CMS</legend><p>This is the home page.</p><blockquote><p>The WYSIWYG editor should be completely compatible with Twitter Bootstrap such as in quotes</p><small><cite>Aric Camarata</cite></small></blockquote>",
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

	if (AdminMenu.find({}).count() === 0) {
		AdminMenu.insert({
			order: 1,
			name: "dashboard",
			icon: "tachometer",
			label: "Dashboard",
			pages: [
				{
					name: null,
					icon: "th",
					label: "Overview"
				},
				{
					name: "stats",
					icon: "bar-chart",
					label: "Statistics"
				},
				{
					name: "config",
					icon: "cogs",
					label: "Configuration"
				}
			]
		});
		AdminMenu.insert({
			order: 2,
			name: "pages",
			icon: "file",
			label: "Pages",
			pages: [
				{
					order: 1,
					name: null,
					icon: "list",
					label: "List"
				},
				{
					order: 2,
					name: "new",
					icon: "plus",
					label: "New"
				}
			]
		});
		AdminMenu.insert({
			order: 2,
			name: "posts",
			icon: "pencil-square",
			label: "Posts",
			pages: [
				{
					order: 1,
					name: null,
					icon: "list",
					label: "List"
				},
				{
					order: 2,
					name: "new",
					icon: "plus",
					label: "New"
				}
			]
		});
		AdminMenu.insert({
			order: 3,
			name: "menus",
			icon: "bars",
			label: "Menus",
			pages: [
				{
					order: 1,
					name: null,
					icon: "list",
					label: "List"
				},
				{
					order: 2,
					name: "new",
					icon: "plus",
					label: "New"
				}
			]
		});
		AdminMenu.insert({
			order: 4,
			name: "themes",
			icon: "file-image-o",
			label: "Themes",
			pages: [
				{
					order: 1,
					name: null,
					icon: "list",
					label: "List"
				},
				{
					order: 2,
					name: "new",
					icon: "plus",
					label: "New"
				}
			]
		});
		AdminMenu.insert({
			order: 5,
			name: "plugins",
			icon: "plug",
			label: "Plugins",
			pages: [
				{
					order: 1,
					name: null,
					icon: "list",
					label: "List"
				},
				{
					order: 2,
					name: "new",
					icon: "plus",
					label: "New"
				}
			]
		});
		AdminMenu.insert({
			order: 6,
			name: "users",
			icon: "users",
			label: "Users",
			pages: [
				{
					order: 1,
					name: null,
					icon: "list",
					label: "List"
				},
				{
					order: 2,
					name: "new",
					icon: "plus",
					label: "New"
				}
			]
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
