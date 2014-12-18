Router.configure({
	layoutTemplate: 'layout',
	notFoundTemplate: 'notFound',
	loadingTemplate: 'loading'
});

Router.route('/', {
	name: 'home',
	path: '/',
	template: 'home',
	onBeforeAction: function() {
		document.title = "Site Name - slogan here";
		this.next();
	},
	action: function() {
		Session.set('page', 'home');
		Session.set('apage', null);
		Session.set('asect', null);
		this.render();
	}
});

Router.route('/profile', {
	name: 'profile',
	path: '/profile',
	template: 'profile',
	onBeforeAction: function() {
		document.title = "Site Name | My Profile";
		this.next();
	},
	action: function() {
		Session.set('page', 'profile');
		Session.set('apage', null);
		Session.set('asect', null);
		this.render();
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










Router.route('/:page', {
	name: 'content',
	path: '/:page',
	template: 'content',
	onBeforeAction: function() {
		result = Pages.findOne({'page': this.params.page});
		title = (result !== undefined) ? result.title : null;

		document.title = "Site Name | " + title;
		this.next();
	},
	action: function() {
		Session.set('page', this.params.page);
		Session.set('apage', null);
		Session.set('asect', null);
		this.render();
	}
});
