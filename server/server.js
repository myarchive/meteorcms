// Do this action on Meteor server startup
Meteor.startup(function () {
	// code to run on server at startup
	
	/* should create an initial front page if everything is null and require some type of initial setup
	 * such as naming the site and other things. */
	
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
