// Click events

Template.nav.events({
	'click .contact': function () {
		openContactDialog();
		return false;
	}
});

// Load page



// Contact dialog

var openContactDialog = function () {
	Session.set("showContactDialog", true);
};

Template.home.showContactDialog = function () {
	return Session.get("showContactDialog");
};

Template.contactDialog.events({
	'click .done': function (event, template) {
		Session.set("showContactDialog", false);
		return false;
	}
});

Template.contactDialog.displayName = function () {
	return displayName(this);
};
