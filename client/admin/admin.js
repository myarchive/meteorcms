Template.layout_admin.rendered = function() {
	var cheight = $(window).height() - 51 - 30; // Nav & Footer
	$("#sidebar").css("min-height", cheight);
	window.onresize = function() {
		var cheight = $(window).height() - 51 - 30; // Nav & Footer
		$("#sidebar").css("min-height", cheight);
	};
};

UI.registerHelper('adminmenu', function() {
	menu = AdminMenu.find({}, {sort:{order:1}}).fetch();
	return printAdminMenu(menu,1);
});

function printAdminMenu(menu,top) {
	if (menu.length === 0) return;
	var output = "";
	for (i=0; i < menu.length; i++) {
		item = menu[i];
		isPage = (item.page) ? true : false;
		isDropdown = (item.dropdown !== undefined) ? true : false;
		hasDivider = (item.divider !== undefined) ? true : false;
		
		if (isPage) {
			liclass = (item.page == Session.get("page")) ? "active" : "";
			classes = (isDropdown) ? " class='dropdown-toggle'" : "";
			caret = (isDropdown) ? " <span class='caret'></span>" : "";
			drop = (isDropdown) ? " data-toggle='dropdown' role='button' aria-expanded='false'" : "";
			href = (item.url) ? " href='"+item.url+"'" : "";
			link = "<a"+classes+drop+href+">"+item.label+caret+"</a>";
		} else {
			liclass = "";
			classes = (isDropdown) ? " class='dropdown-toggle'" : "";
			caret = (isDropdown) ? " <span class='caret'></span>" : "";
			drop = (isDropdown) ? " data-toggle='dropdown' role='button' aria-expanded='false'" : "";
			href = (item.url) ? " href='"+item.url+"'" : "";
			link = "<a"+classes+drop+href+">"+item.label+caret+"</a>";
		}

		if (hasDivider) {
			divi = (top == 1) ? "<li class='divider-vertical'/>" : "<li class='divider'/>";
		} else {
			divi = "";
		}
		
		if (isDropdown) {
			output = output+divi+"<li class='dropdown "+liclass+"'>"+link+"<ul class='dropdown-menu'  role='menu'>"+printMenu(item.dropdown,0)+"</ul></li>";
		} else {
			output = output+divi+"<li class='"+liclass+"'>"+link+"</li>";
		}
	}
	return output;
}

Template._loginButtonsLoggedInDropdown.events({
    'click #login-buttons-edit-profile': function(event) {
        Router.go('profile');
    },
    'click #login-buttons-admin-console': function(event) {
        Router.go('admin');
    }
});
