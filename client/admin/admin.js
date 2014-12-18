Template.layout_admin.rendered = function() {
	window.onresize = function() {
		var cheight = $(window).height() - 51 - 30; // Nav & Footer
		$("#anav").css("min-height", cheight);
	};
};

UI.registerHelper('adminmenu', function() {
	// had timing issues when using this in .rendered above
	setTimeout(function() {
		var cheight = $(window).height() - 51 - 30; // Nav & Footer
		$("#anav").css("min-height", cheight);
	}, 1);
	
	menu = AdminMenu.find({}, {sort: {order: 1}}).fetch();
	return printAdminMenu(menu, 1);
});

function printAdminMenu(menu, top) {
	if (menu.length === 0) {
		return;
	}

	var asect = Session.get('asect');
	var apage = Session.get('apage');

	var output = '<div class="col-xs-6 col-sm-3 sidebar-offcanvas" id="anav" role="navigation">';
	var output = output + '<div class="panel-group" id="amenu">';
	for (i = 0; i < menu.length; i++) {
		item = menu[i];

		var coll = (asect !== item.name) ? 'class="collapsed"' : '';
		var open = (asect === item.name) ? 'in' : '';

		var output = output + '<div class="panel panel-default">';
		var output = output + '<div class="panel-heading"><a ' + coll + ' data-toggle="collapse" data-parent="#amenu" href="#' + item.name + '"><h4><i class="fa fa-' + item.icon + '"></i> ' + item.label + '</h4></a></div>';
		var output = output + '<div id="' + item.name + '" class="panel-body panel-collapse collapse ' + open + '">';

		for (j = 0; j < item.pages.length; j++) {
			page = item.pages[j];
			var acti = (asect === item.name && apage === page.name) ? 'class="active"' : '';
			if (item.name === 'dashboard' && page.name === null) {
				var href = '/admin';
			}
			else {
				var href = (page.name === null) ? '/admin/' + item.name : '/admin/' + item.name + '/' + page.name;
			}

			var output = output + '<a href="' + href + '" ' + acti + '><h5><i class="fa fa-' + page.icon + '"></i> ' + page.label + '</h5></a>';
		}
		var output = output + '</div>';
		var output = output + '</div>';
	}

	output = output + '</div></div>';
	return output;
}
