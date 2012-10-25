/* Server-side code
 */
 
// Create publish method for navmenu collection
Meteor.publish("navmenu", function () {
    // Publish obly page, label and order
    return NavMenu.find({}, {fields: {page: 1, label: 1, order: 1}});
});
 
// Create publish method for pages collection
Meteor.publish("pages", function () {
    // Publish obly page, label and order
    return Pages.find({}, {fields: {page: 1, title: 1, content: 1}});
});