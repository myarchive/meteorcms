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
