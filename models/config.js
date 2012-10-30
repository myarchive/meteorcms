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

