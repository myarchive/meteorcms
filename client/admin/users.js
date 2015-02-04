Template.admin_user.helpers({
	name: function() {
		var result = Meteor.users.findOne({_id:Session.get("usern")});
		return result.profile.name;
	},
	email: function() {
		var result = Meteor.users.findOne({_id:Session.get("usern")});
		console.log(result);
//		return result.registered_emails[0].address;
	}
});
