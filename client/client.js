// Session variable initialize
Session.set('page', null);
Session.set('role', null);

function loadPage(page) {
	if (page === null) { page = 'home'; }
	content = Pages.findOne({page: 'home'});
	return content;
}