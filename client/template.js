/* Templating system
 * Layouts can define multiple body templates if wanted
 * Containers can define multiple page templates if wanted
 * The page templates will then output the main content
 * Any layouts or pages can display other content such as a widget, etc.
 */

Template.body.template = function () {
	// Make this dynamic with page information
	var file = "body_default";
	return file;
}

Template.page.content = function () {
	if (!Session.get('page')) { page = 'home'; }
	else { page = Session.get('page'); }
	
	result = Pages.findOne({'page': page});
	// Set URL here with routing rules with page data vs. routing rules
	// var Router is set in route.js if possible make this dynamic so that it uses the routing rules
	// from route.js, you also have the page data from the mongoDB to utilize but must set URL correctly here
	// routes.js handles url -> page, where as this is page setting the url (page -> url) but we must consolidate
	// - the rules in one location, preferably route.js and simply duplicate that here to set the url on page load
	
	// Return the content of the page
	return (result !== undefined) ? result.content : "";
};

Template.navmenu.items = function () {
	return NavMenu.find({}, {sort:{order:1}});
};

Template.navfoot.items = function () {
	return NavFoot.find({}, {sort:{order:1}});
};

// Click Events
Template.header.events = {
	'click .brand': function() {
		Session.set('page', 'home');
	}
}

Template.navmenu.events = {
	'click .navitem': function(item) {
		Session.set('page', $(item.target).attr('alt'));
	}
}

Template.navfoot.events = {
	'click .navitem': function(item) {
		Session.set('page', $(item.target).attr('alt'));
	}
}

Template.page.events = {
	'click .navitem': function(item) {
		Session.set('page', $(item.target).attr('alt'));
	}
}
