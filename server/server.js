/*
* 
* The server definitions
*/

// Do this action on Meteor server startup
Meteor.startup(function () {
    // If no users are set, create an admin without password, use "Forget Password" to define it
    if (Meteor.users.find().count() === 0) {
        Meteor.users.insert({
	    username: "admin@admin.com", // unique name
	    emails: [
                // each email address can only belong to one user.
                { address: "admin@admin.com", verified: true }
  	    ],
	    profile: {role: "admin"}
	});
    }
});
