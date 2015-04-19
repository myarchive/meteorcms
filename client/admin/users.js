Template.admin_user.helpers({
	name: function() {
		var result = Meteor.users.findOne({_id:Session.get("usern")});
		return result.profile.name;
	},
	email: function() {
		var result = Meteor.users.findOne({_id:Session.get("usern")});
		console.log(result);
//		return result.registered_emails[0].address;
	}
});

Template.admin_user.events({
	'click #save': function(event) {
		event.preventDefault();
		var wid = $('#acontent').width() / 2; wid = wid - 150;
		$('legend:first').after('<span class="alert" id="alertmsg" style="display:none;position:absolute;top:0;left:'+wid+'px;width:300px;text-align:center;background:lightgreen;">You clicked save...</span>');
		$('#alertmsg').fadeIn('#alertmsg').delay('5000').fadeOut('#alertmsg');
	},
	'click #cancel': function(event) {
		event.preventDefault();
		Router.go('/admin/users');
	}

});
