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

Router.route('adminUser', {
	path: '/admin/user/:user',
	layoutTemplate: 'layout_admin',
	onBeforeAction: function() {
		document.title = "Site Name | Admin > User: " + this.params.user;
		this.next();
	},
	action: function() {
		Session.set('asect', 'users');
		Session.set('apage', 'user');
		this.render('admin_user');
	}
});

Router.route('adminPage', {
	path: '/admin/:asect/:apage',
	layoutTemplate: 'layout_admin',
	onBeforeAction: function() {
		document.title = "Site Name | Admin > " + this.params.asect + " > " + this.params.apage;
		this.next();
	},
	action: function() {
		Session.set('asect', this.params.asect);
		Session.set('apage', this.params.apage);
		this.render('admin_' + this.params.asect + '_' + this.params.apage);
	}
});

Router.route('adminSect', {
	path: '/admin/:asect',
	layoutTemplate: 'layout_admin',
	onBeforeAction: function() {
		document.title = "Site Name | Admin > " + this.params.asect;
		this.next();
	},
	action: function() {
		Session.set('asect', this.params.asect);
		Session.set('apage', null);
		this.render('admin_' + this.params.asect);
	}
});

Router.route('admin', {
	path: '/admin',
	layoutTemplate: 'layout_admin',
	onBeforeAction: function() {
		document.title = "Site Name | Admin > Dahsboard";
		this.next();
	},
	action: function() {
		Session.set('asect', 'dashboard');
		Session.set('apage', null);
		this.render('admin_dashboard');
	}
});


/*
Router.route('admin',{
    path: '/admin/:asect?/:apage?',
    template: 'admin',
    layoutTemplate: 'layout_admin',
    action: function() {

        var asect  = this.params.asect || 'dashboard',
            apage  = this.params.apage || null,
            render = (function(){
                if(apage !== null) {
                    return 'admin_'+ asect +'_'+ apage;
                } else {
                    return 'admin_'+ asect;
                }
            })();

        Session.set('asect', asect);
        Session.set('apage', apage);
        this.render(render);
    }
});
 */