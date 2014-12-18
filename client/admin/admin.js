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

/*
 <div class="panel panel-default">
 <div class="panel-heading"><a data-toggle="collapse" data-parent="#accordion" href="#dashboard"><h4><i class="fa fa-tachometer"></i> Dashboard</h4></a></div>
 <div id="dashboard" class="panel-body panel-collapse collapse in">
 <a href="#" class="active"><h5><i class="fa fa-th"></i> Overview</h5></a>
 <a href="#"><h5><i class="fa fa-bar-chart"></i> Statistics</h5></a>
 <a href="#"><h5><i class="fa fa-cogs"></i> Configuration</h5></a>
 </div>
 </div>
 
 <div class="panel panel-default">
 <div class="panel-heading"><a class="collapsed" data-toggle="collapse" data-parent="#accordion" href="#pages"><h4><i class="fa fa-file-o"></i> Pages</h4></a></div>
 <div id="pages" class="panel-body panel-collapse collapse">
 <a href="#"><h5><i class="fa fa-th"></i> Overview</h5></a>
 </div>
 </div>
 
 <div class="panel panel-default">
 <div class="panel-heading"><a class="collapsed" data-toggle="collapse" data-parent="#accordion" href="#posts"><h4><i class="fa fa-pencil-square-o"></i> Posts</h4></a></div>
 <div id="posts" class="panel-body panel-collapse collapse">
 <a href="#"><h5><i class="fa fa-th"></i> Overview</h5></a>
 </div>
 </div>
 
 <div class="panel panel-default">
 <div class="panel-heading"><a class="collapsed" data-toggle="collapse" data-parent="#accordion" href="#menus"><h4><i class="fa fa-bars"></i> Menus</h4></a></div>
 <div id="menus" class="panel-body panel-collapse collapse">
 <a href="#"><h5><i class="fa fa-th"></i> Overview</h5></a>
 </div>
 </div>
 
 <div class="panel panel-default">
 <div class="panel-heading"><a class="collapsed" data-toggle="collapse" data-parent="#accordion" href="#themes"><h4><i class="fa fa-picture-o"></i> Themes</h4></a></div>
 <div id="themes" class="panel-body panel-collapse collapse">
 <a href="#"><h5><i class="fa fa-th"></i> Overview</h5></a>
 </div>
 </div>
 
 <div class="panel panel-default">
 <div class="panel-heading"><a class="collapsed" data-toggle="collapse" data-parent="#accordion" href="#plugins"><h4><i class="fa fa-plug"></i> Plugins</h4></a></div>
 <div id="plugins" class="panel-body panel-collapse collapse">
 <a href="#"><h5><i class="fa fa-th"></i> Overview</h5></a>
 </div>
 </div>
 
 <div class="panel panel-default">
 <div class="panel-heading"><a class="collapsed" data-toggle="collapse" data-parent="#accordion" href="#users"><h4><i class="fa fa-users"></i> Users</h4></a></div>
 <div id="users" class="panel-body panel-collapse collapse">
 <a href="#"><h5><i class="fa fa-th"></i> Overview</h5></a>
 </div>
 </div>
 */

/*
 <div class="col-xs-6 col-sm-3 sidebar-offcanvas" id="sidebar" role="navigation">
 
 <div class="panel-group" id="accordion">
 
 <div class="panel panel-default">
 <div class="panel-heading"><a data-toggle="collapse" data-parent="#accordion" href="#dashboard"><h4><i class="fa fa-tachometer"></i> Dashboard</h4></a></div>
 <div id="dashboard" class="panel-body panel-collapse collapse in">
 <a href="#" class="active"><h5><i class="fa fa-th"></i> Overview</h5></a>
 <a href="#"><h5><i class="fa fa-bar-chart"></i> Statistics</h5></a>
 <a href="#"><h5><i class="fa fa-cogs"></i> Configuration</h5></a>
 </div>
 </div>
 
 <div class="panel panel-default">
 <div class="panel-heading"><a class="collapsed" data-toggle="collapse" data-parent="#accordion" href="#pages"><h4><i class="fa fa-file-o"></i> Pages</h4></a></div>
 <div id="pages" class="panel-body panel-collapse collapse">
 <a href="#"><h5><i class="fa fa-th"></i> Overview</h5></a>
 </div>
 </div>
 
 <div class="panel panel-default">
 <div class="panel-heading"><a class="collapsed" data-toggle="collapse" data-parent="#accordion" href="#posts"><h4><i class="fa fa-pencil-square-o"></i> Posts</h4></a></div>
 <div id="posts" class="panel-body panel-collapse collapse">
 <a href="#"><h5><i class="fa fa-th"></i> Overview</h5></a>
 </div>
 </div>
 
 <div class="panel panel-default">
 <div class="panel-heading"><a class="collapsed" data-toggle="collapse" data-parent="#accordion" href="#menus"><h4><i class="fa fa-bars"></i> Menus</h4></a></div>
 <div id="menus" class="panel-body panel-collapse collapse">
 <a href="#"><h5><i class="fa fa-th"></i> Overview</h5></a>
 </div>
 </div>
 
 <div class="panel panel-default">
 <div class="panel-heading"><a class="collapsed" data-toggle="collapse" data-parent="#accordion" href="#themes"><h4><i class="fa fa-picture-o"></i> Themes</h4></a></div>
 <div id="themes" class="panel-body panel-collapse collapse">
 <a href="#"><h5><i class="fa fa-th"></i> Overview</h5></a>
 </div>
 </div>
 
 <div class="panel panel-default">
 <div class="panel-heading"><a class="collapsed" data-toggle="collapse" data-parent="#accordion" href="#plugins"><h4><i class="fa fa-plug"></i> Plugins</h4></a></div>
 <div id="plugins" class="panel-body panel-collapse collapse">
 <a href="#"><h5><i class="fa fa-th"></i> Overview</h5></a>
 </div>
 </div>
 
 <div class="panel panel-default">
 <div class="panel-heading"><a class="collapsed" data-toggle="collapse" data-parent="#accordion" href="#users"><h4><i class="fa fa-users"></i> Users</h4></a></div>
 <div id="users" class="panel-body panel-collapse collapse">
 <a href="#"><h5><i class="fa fa-th"></i> Overview</h5></a>
 </div>
 </div>
 
 </div>
 </div> <!--/.sidebar-offcanvas-->
 */