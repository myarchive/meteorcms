/*
* 
* The template actions definitions
*/

Template.home.greeting = function () {
    if (!Session.get('page')) {
	return "Welcome to basic.";
    } else {
        return "";
    }
};

Template.terms.terms = function () {
    if (Session.get('page') === 'terms') {
        return true;
    } else {
        return false;
    }
};

Template.profile.profile = function () {
// Test temp for user rol
if(Meteor.user() && Meteor.user().profile) { 
// IMP: Meteor.user() is reactive, so, until meteor don't charge it, the profile is undefined
// so with Meteor.user().profile in "if", it ignore the undefined and get only the profile information 
//TL.info(JSON.stringify(Meteor.user().profile));
//console.log(JSON.stringify(Meteor.user().profile));
var role = Meteor.user().profile.role;

//console.log(role);
Session.set('role', role);
}
//----

    if (Session.get('page') === 'profile') {
        return true;
    } else {
        return false;
    }
};
// After the basic template resource
Template.profile.error = function () {
    if (Session.get('appMessage')) {
        return Session.get('appMessage');
    }
};

Template.profile.events({
    'click .save': function (event, template) { // pass template too, so avoid to access on dom with document.getElementByiI
	var value = {};
        var real_name = template.find(".real_name").value;
	value.real_name = real_name;
	if (Session.get('role') === "admin") {
	    var role = template.find(".role").value;
	    value.role = role;
	}
        // call the method
        Meteor.call('updateProfile', value); // function name and options
    }
});

Template.profile.admin = function () {
    if (Session.get('role') === 'admin') {
        return true; 
    }
};
/*Template.logging.admin = function () {
    if (Session.get('role') === 'admin') {
        return true; 
    }
};*/

