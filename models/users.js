/* Users Model
 * This will store all things related to querying users and updating user information
 */

// Create the callable methods 
Meteor.methods({
	updateProfile: function (options) {
	var value = {};
		if (! (typeof options.real_name === "string" && options.real_name.length)) {
			Session.set('appMessage', "Nome mancante");
			// This throw error go on console like a console.log
			throw new Meteor.Error(400, "Required parameter missing");
	} else if (Session.get('role') === 'admin') {
		if (! (typeof options.role === "string" && options.role.length)) {
			Session.set('appMessage', "Role mancante");
			// This throw error go on console like a console.log
				throw new Meteor.Error(400, "Required parameter missing");
		} 
		} else {
// USE THIS ONLY FOR STARTED ADMIN:
// options.role = "admin";
			Meteor.users.update({_id: this.userId}, {$set: {profile: options}});
			Session.set('appMessage', "Fatto");
		}
		
	}
});
