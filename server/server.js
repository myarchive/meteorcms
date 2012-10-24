// Do this action on Meteor server startup
Meteor.startup(function () {
	/* should create an initial front page if everything is null and require some type of initial setup
	 * such as naming the site and other things. */
	
	// If no users are set, create an admin without password, use "Forget Password" to define it
	if (Meteor.users.find().count() === 0) {
		Meteor.users.insert({
			username: "admin@email.com", // unique name
			emails: [
				// each email address can only belong to one user.
				{ address: "admin@email.com", verified: true }
			],
			profile: {role: "admin"}
		});
	}
/*	if (Meteor.pages.find().count() === 0) {
		Meteor.pages.insert({
			page: "home", // unique name
			title: "Home",
			resource: "guest",
			categories: null,
			tags: null,
			content: "\n\
	<div class='row'>\n\
		<div class='span9'>\n\
			<legend>Welcome to Meteor CMS</legend>\n\
			<p>This is the home page. In reality this page should be rendered from MongoDB so creation and choosing of pages and paths would be dynamic</p>\n\
			<blockquote>\n\
				<p>The WYSIWYG editor should be completely compatible with Twitter Bootstrap such as in quotes</p>\n\
				<small><cite>Aric Camarata</cite></small>\n\
			</blockquote>\n\
			<p>{{greeting}}</p>\n\
		</div>\n\
		<div class='span3'>\n\
			<legend>Announcements</legend>\n\
			<ul class='list'>\n\
				<li>Created a github project to start. (this is static but shouldn't be)<small>2012-10-22</small></li>\n\
			</ul>\n\
		</div>\n\
	</div>"
		});
	} */
});
