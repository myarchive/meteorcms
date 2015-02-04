/* Config model
 * 
 * Config Collection
 * settings: array
 * modules: array
 * themes: array
 */

Config = new Meteor.Collection('config');

if (Meteor.isClient) {
	Meteor.subscribe("config");
}
if (Meteor.isServer) {
	Meteor.publish("config", function() {
		return Config.find({}, {fields: {settings: 1, modules: 1, themes: 1}});
	});

	if (Config.find({}).count() === 0) {
		Config.insert({
			settings: {
				"site": "My Site",
				"title": "My Title",
				"slogan": "My cool slogan!",
				"theme": "Cerulean"
			},
			modules: {
				"foo": {
					"option": 0
				}
			}
		});
	}
}
