/* Users Model
 * 
 * Users Collection
 * id: id
 * username: username
 * email: email
 * password: password
 * salt: salt to use with hashing of password
 * first: name
 * last: name
 * phone: phone
 * country: country
 * firstlogin: true on creation of account, falsed after they confirm or complete profile
 * newpass: true to require password changed on next login, such as when admin manually creates them
 * cookieid: 40+ randomized hash for "remember me" that would match cookie on user (cookie can be matched to autologin)
 * created: timestamp of user creation
 * lastlogin: timestamp of last login
 * lastloginip: last ip that logged in
 * active: true or false
 * acttoken: null, or if needs activation the token put in on activation page to activate (email confirmations?)
 * rectoken: null, or token needed to recover password
 */
// To Do: Some things may be handled by 0.5 Meteor Authentication so we should review this

// Relies on Meteor built in user system so will break if you try to make a collection for it
//Users = new Meteor.Collection('users');
Meteor.methods({
	updateProfile: function (options) {
	var value = {};
		if (! (typeof options.real_name === "string" && options.real_name.length)) {
			Session.set('appMessage', "Missing name");
			// This throw error go on console like a console.log
			throw new Meteor.Error(400, "Required parameter missing");
	} else if (Session.get('role') === 'admin') {
		if (! (typeof options.role === "string" && options.role.length)) {
			Session.set('appMessage', "Missing Role");
			// This throw error go on console like a console.log
			throw new Meteor.Error(400, "Required parameter missing");
		} 
		} else {
			Meteor.users.update({_id: this.userId}, {$set: {profile: options}});
			Session.set('appMessage', "Fatto");
		}
		
	}
});
