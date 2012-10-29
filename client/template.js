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
	if (!Session.get('page')) {
		page = 'home'; }
	else {
		page = Session.get('page'); }
	
	result = Pages.findOne({'page': page});
	return (result !== undefined) ? result.content : "";
};

// Rendering navmenu items
Template.navmenu.items = function () {
    return NavMenu.find({}, {sort:{order:1}});
};

