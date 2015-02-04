/* Themes Model
 * 
 * id: id
 * name: created
 * thumb: array of edited by, and timestamp
 * link: title
 */

Themes = new Meteor.Collection('themes');

if (Meteor.isClient) {
	Meteor.subscribe("themes");
}
if (Meteor.isServer) {
	Meteor.publish("themes", function() {
		return Themes.find({}, {fields: {id: 1, name: 1, img: 1, css: 1}});
	});

	Meteor.startup(function() {
		if (Themes.find({}).count() === 0) {
			Themes.insert({
				name: "Default",
				img: "/default-theme.png",
				css: null
			});
			Themes.insert({
				name: "Cerulean",
				img: "http://bootswatch.com/cerulean/thumbnail.png",
				css: "http://bootswatch.com/cerulean/bootstrap.min.css"
			});
			Themes.insert({
				name: "Cosmo",
				img: "http://bootswatch.com/cosmo/thumbnail.png",
				css: "http://bootswatch.com/cosmo/bootstrap.min.css"
			});
			Themes.insert({
				name: "Cyborg",
				img: "http://bootswatch.com/cyborg/thumbnail.png",
				css: "http://bootswatch.com/cyborg/bootstrap.min.css"
			});
			Themes.insert({
				name: "Darkly",
				img: "http://bootswatch.com/darkly/thumbnail.png",
				css: "http://bootswatch.com/darkly/bootstrap.min.css"
			});
			Themes.insert({
				name: "Flatly",
				img: "http://bootswatch.com/flatly/thumbnail.png",
				css: "http://bootswatch.com/flatly/bootstrap.min.css"
			});
			Themes.insert({
				name: "Journal",
				img: "http://bootswatch.com/journal/thumbnail.png",
				css: "http://bootswatch.com/journal/bootstrap.min.css"
			});
			Themes.insert({
				name: "Lumen",
				img: "http://bootswatch.com/lumen/thumbnail.png",
				css: "http://bootswatch.com/lumen/bootstrap.min.css"
			});
			Themes.insert({
				name: "Paper",
				img: "http://bootswatch.com/paper/thumbnail.png",
				css: "http://bootswatch.com/paper/bootstrap.min.css"
			});
			Themes.insert({
				name: "Readable",
				img: "http://bootswatch.com/readable/thumbnail.png",
				css: "http://bootswatch.com/readable/bootstrap.min.css"
			});
			Themes.insert({
				name: "Sandstone",
				img: "http://bootswatch.com/sandstone/thumbnail.png",
				css: "http://bootswatch.com/sandstone/bootstrap.min.css"
			});
			Themes.insert({
				name: "Simplex",
				img: "http://bootswatch.com/simplex/thumbnail.png",
				css: "http://bootswatch.com/simplex/bootstrap.min.css"
			});
			Themes.insert({
				name: "Slate",
				img: "http://bootswatch.com/slate/thumbnail.png",
				css: "http://bootswatch.com/slate/bootstrap.min.css"
			});
			Themes.insert({
				name: "Spacelab",
				img: "http://bootswatch.com/spacelab/thumbnail.png",
				css: "http://bootswatch.com/spacelab/bootstrap.min.css"
			});
			Themes.insert({
				name: "Superhero",
				img: "http://bootswatch.com/superhero/thumbnail.png",
				css: "http://bootswatch.com/superhero/bootstrap.min.css"
			});
			Themes.insert({
				name: "United",
				img: "http://bootswatch.com/united/thumbnail.png",
				css: "http://bootswatch.com/united/bootstrap.min.css"
			});
			Themes.insert({
				name: "Yeti",
				img: "http://bootswatch.com/yeti/thumbnail.png",
				css: "http://bootswatch.com/yeti/bootstrap.min.css"
			});
		}
	});

}

