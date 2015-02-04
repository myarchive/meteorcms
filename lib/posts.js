Posts = new Meteor.Collection('posts');

if (Meteor.isClient) {
	Meteor.subscribe("posts");
}
if (Meteor.isServer) {
	Meteor.publish("posts", function() {
		return Posts.find({}, {fields: {id: 1, page: 1, title: 1, date: 1, edited: 1, author: 1, content: 1, resource: 1, categories: 1, tags: 1}});
	});

	if (Posts.find({}).count() === 0) {
		Posts.insert({
			page: "about", // unique name
			title: "Post About",
			date: "",
			edited: "",
			author: 1,
			content: "This is the about POST",
			resource: 1,
			categories: 1,
			tags: 1
		});
	}
}

TabularTables.Posts = new Tabular.Table({
	name: "Posts",
	collection: Posts,
	columns: [
		{data: "title", title: "Title"},
		{data: "author", title: "Author"},
		{data: "date", title: "Date"},
		{data: "category", title: "Category"},
		{data: "tags", title: "Tags"}
	]
});