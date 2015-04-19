Template.admin_page.helpers({
	id: function () {
		return Session.get("pageid");
	},
	name: function() {
		var result = Pages.findOne({_id:Session.get("pageid")});
		return result.page;
	},
	title: function() {
		var result = Pages.findOne({_id:Session.get("pageid")});
		return result.title;
	},
	content: function() {
		var result = Pages.findOne({_id:Session.get("pageid")});
		return result.content;
	},
	hostname: function() {
		return "www.site.com";
	}
});

Template.admin_page.events({
	'click #save': function(event) {
		event.preventDefault();
		
		//update page info
		
		// callback error or success..
		
		var wid = $('#acontent').width() / 2; wid = wid - 150;
		$('legend:first').after('<span class="alert" id="alertmsg" style="display:none;position:absolute;top:0;left:'+wid+'px;width:300px;text-align:center;background:lightgreen;">You clicked save...</span>');
		$('#alertmsg').fadeIn('#alertmsg').delay('5000').fadeOut('#alertmsg');
	},
	'click #cancel': function(event) {
		event.preventDefault();
		Router.go('/admin/pages');
	}
});
