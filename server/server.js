// Needs redone

Meteor.publish("directory", function () {
	return Meteor.users.find({}, {fields: {emails: 1, profile: 1}});
});

Meteor.publish("pages", function () {
	return Parties.find(
		{$or: [{"public": true}, {invited: this.userId}, {owner: this.userId}]});
});
