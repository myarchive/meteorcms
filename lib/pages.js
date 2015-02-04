Pages = new Meteor.Collection('pages');

if (Meteor.isClient) {
	Meteor.subscribe("pages");
}
if (Meteor.isServer) {
	Meteor.publish("pages", function() {
		return Pages.find({}, {fields: {page: 1, title: 1, content: 1, resource: 1, categories: 1, tags: 1, url: 1, btemplate: 1, ptemplate: 1}});
	});

	if (Pages.find({}).count() === 0) {
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
}

TabularTables = {};
Meteor.isClient && Template.registerHelper('TabularTables', TabularTables);

TabularTables.Pages = new Tabular.Table({
	name: "Pages",
	collection: Pages,
	columns: [
		{data: "title", title: "Title"},
		{data: "page", title: "Slug"},
		{data: "date", title: "Date"},
		{data: "category", title: "Category"},
		{data: "tags", title: "Tags"}
	]
});
