/* Templating system
 * Layouts can define multiple body templates if wanted
 * Containers can define multiple page templates if wanted
 * The page templates will then output the main content
 * Any layouts or pages can display other content such as a widget, etc.
 */

Template.body.template = function () {
	if (!Session.get('page')) { page = 'home'; }
	else { page = Session.get('page'); }
	
	result = Pages.findOne({'page': page});
	if (result !== undefined) { bt = result.btemplate; bt = bt ? "body_"+bt : "body_default"; }
	else { bt = "body_default"; }
	return Template[bt]();
}

Template.header.siteName = function () {
	result = Config.findOne({});
	text = result ? result.settings.site : "Meteor CMS";
	return text;
}

Template.container.template = function () {
	if (!Session.get('page')) { page = 'home'; }
	else { page = Session.get('page'); }
	
	result = Pages.findOne({'page': page});
	if (result !== undefined) { pt = result.ptemplate; pt = pt ? "page_"+pt : "page_default"; }
	else { pt = "page_default"; }
	return Template[pt]();
}

Template.content.siteTitle = function () {
	if (!Session.get('page')) { page = 'home'; }
	else { page = Session.get('page'); }
	
	result = Config.findOne({});
	title = result ? result.settings.title : "Meteor CMS";
	slogan = result ? result.settings.slogan : null;
	
	result = Pages.findOne({'page': page});
	text = (result !== undefined) ? result.title : null;
	
	if (text) { return title+" | "+text; }
	return slogan ? title+" - "+slogan : title;
}

Template.content.html = function () {
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

Template.content.test1 = function() {
	return "<strong>TEST ONE</strong>";
}
Template.content.test2 = function() {
	return "<em>TEST TWO</em>";
}
Template.navalt.items = function () {
	return NavAlt.find({}, {sort:{order:1}});
};

Template.navalt.isPage = function () {
	return (this.page == Session.get("page")) ? true : false;
}

Template.navmenu.items = function () {
	return NavMenu.find({}, {sort:{order:1}});
};

Template.navmenu.isPage = function () {
	return (this.page == Session.get("page")) ? true : false;
}

Template.navfoot.items = function () {
	return NavFoot.find({}, {sort:{order:1}});
};

Template.navfoot.isPage = function () {
	return (this.page == Session.get("page")) ? true : false;
}

// Click Events
Template.header.events = {
	'click .brand': function() {
		Session.set('page', 'home');
	}
}

Template.navalt.events = {
	'click .navitem': function(item) {
		Session.set('page', $(item.target).attr('alt'));
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

Template.content.events = {
	'click .navitem': function(item) {
		Session.set('page', $(item.target).attr('alt'));
	}
}
