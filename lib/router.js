Slugs = {
	news: Posts,
	books: Posts
};
Routes = [Pages, Posts];

Router.configure({
	layoutTemplate: 'layout',
	notFoundTemplate: 'notFound',
	loadingTemplate: 'loading'
});

Router.route('admin', {
	path: '/admin/:apage?/:asect?',
	onBeforeAction: function() {
		var loggedInUser = Meteor.user();
		if (Meteor.loggingIn()) {
			//while logging in.. nothing needed here for access
		}
		else if (!loggedInUser || !Roles.userIsInRole(loggedInUser, ['admin'])) {
			//throw new Meteor.Error(403, "Access denied");
			this.layout('layout');
			this.render('denied');
		}
		else {
			this.next();
		}
	},
	action: function() {
		var apage = this.params.apage || 'dashboard';
		var asect = this.params.asect || null;

		if (apage === 'user') {
			document.title = "Admin > Edit User";
			Session.set('page', null);
			Session.set('apage', 'users');
			Session.set('asect', 'user');
			Session.set('usern', asect);
			this.layout('layout_admin');
			this.render('admin_user');
		}
		
		else if (apage === 'page') {
			document.title = "Admin > Edit Page";
			Session.set('page', null);
			Session.set('apage', 'pages');
			Session.set('asect', 'page');
			Session.set('pageid', asect);
			this.layout('layout_admin');
			this.render('admin_page');
		}

		else {
			var render = (function() {
				if (asect !== null) {
					document.title = "Admin > " + apage.capitalize() + " > " + asect.capitalize();
					return 'admin_' + apage + '_' + asect;
				} else {
					document.title = "Admin > " + apage.capitalize();
					return 'admin_' + apage;
				}
			})();

			Session.set('page', null);
			Session.set('apage', apage);
			Session.set('asect', asect);
			this.layout('layout_admin');
			this.render(render);
		}
	}
});

Router.route('profile', {
	path: '/profile',
	data: function() {
		return Meteor.user();
	},
	action: function() {
		document.title = "Site Name | My Profile";
		Session.set('page', 'profile');
		Session.set('apage', null);
		Session.set('asect', null);
		this.render('profile');
	}
});

Router.route('content', {
	path: '/:page?/:a?/:b?/:c?',
	waitOn: function() {
		var waiton = [];
		Routes.forEach(function(route) {
			waiton.push(Meteor.subscribe(route._name));
		});
		return waiton;
	},
	action: function() {
		var slugs = Object.getOwnPropertyNames(Slugs);
		var page = this.params.page || 'home';
		var a = this.params.a || null;
		var b = this.params.b || null;
		var c = this.params.c || null;

		var info = null;
		var tmpl = null;

		if (slugs.indexOf(page) >= 0) {
			if (a) {
				info = Slugs[page].findOne({page: a});
				tmpl = Slugs[page]._name;
			}
			else {
				info = Slugs[page]._name + '-home';
				tmpl = Slugs[page]._name + '-home';
			}
		}

		else {
			Routes.forEach(function(route) {
				if (!info) {
					var res = route.findOne({page: page});
					if (res !== undefined) {
						info = res;
						tmpl = route._name;
					}
				}
			});
		}

		document.title = "Site Name | " + info.title;
		Session.set('page', page);
		Session.set('info', info);
		Session.set('apage', null);
		Session.set('asect', null);
		this.render(tmpl);
	}
});