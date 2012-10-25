// Session variable initialize
Session.set('info', null);
Session.set('page', null);
Session.set('role', null);

// Subscribe to navmenu channel
Meteor.subscribe("navmenu");

// Subscribe to pages channel
Meteor.subscribe("pages");