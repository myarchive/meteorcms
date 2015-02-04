UI.registerHelper('content', function() {
	var info = Session.get('info');
	return info.content;
});



UI.registerHelper('siteName', function() {
	result = Config.findOne({});
	text = result ? result.settings.site : "";
	return text;
});

UI.registerHelper('navmenu', function() {
	menu = NavMenu.find({}, {sort: {order: 1}}).fetch();
	return printMenu(menu, 1);
});

function printMenu(menu, top) {
	if (menu.length === 0)
		return;
	var output = "";
	for (i = 0; i < menu.length; i++) {
		item = menu[i];
		isPage = (item.page) ? true : false;
		isDropdown = (item.dropdown !== undefined) ? true : false;
		hasDivider = (item.divider !== undefined) ? true : false;

		if (isPage) {
			liclass = (item.page == Session.get("page")) ? "active" : "";
			classes = (isDropdown) ? " class='dropdown-toggle'" : "";
			caret = (isDropdown) ? " <span class='caret'></span>" : "";
			drop = (isDropdown) ? " data-toggle='dropdown' role='button' aria-expanded='false'" : "";
			href = (item.url) ? " href='" + item.url + "'" : "";
			link = "<a" + classes + drop + href + ">" + item.label + caret + "</a>";
		} else {
			liclass = "";
			classes = (isDropdown) ? " class='dropdown-toggle'" : "";
			caret = (isDropdown) ? " <span class='caret'></span>" : "";
			drop = (isDropdown) ? " data-toggle='dropdown' role='button' aria-expanded='false'" : "";
			href = (item.url) ? " href='" + item.url + "'" : "";
			link = "<a" + classes + drop + href + ">" + item.label + caret + "</a>";
		}

		if (hasDivider) {
			divi = (top == 1) ? "<li class='divider-vertical'/>" : "<li class='divider'/>";
		} else {
			divi = "";
		}

		if (isDropdown) {
			output = output + divi + "<li class='dropdown " + liclass + "'>" + link + "<ul class='dropdown-menu'  role='menu'>" + printMenu(item.dropdown, 0) + "</ul></li>";
		} else {
			output = output + divi + "<li class='" + liclass + "'>" + link + "</li>";
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

Template.layout.helpers({
	theme: function() {
		var result = Config.findOne({});
		var theme = result ? result.settings.theme : "Default";
		if (theme !== "Default") {
			var info = Themes.findOne({"name": theme});
			if (info) {
				$("#headtheme").remove();
				$("head").append("<link rel='stylesheet' id='headtheme' type='text/css' href='" + info.css + "'>");
			}
		} else {
			$("#headtheme").remove();
		}
	}
});
