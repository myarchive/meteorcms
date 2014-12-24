/* Pages Model
 * 
 * Pages Collection
 * page: page
 * title: title
 * content: html for the page with handlebar support
 * resource: for acl
 * categories: ...
 * tags: ...
 * url: custom url (optional)
 * btemplate: ...
 * ptemplate: ...
 */

Pages = new Meteor.Collection('pages');

if (Meteor.isClient) {
	Meteor.subscribe("pages");
}
if (Meteor.isServer) {
	Meteor.publish("pages", function () { return Pages.find({}, {fields: {page: 1, title: 1, content: 1, resource: 1, categories: 1, tags: 1, url: 1, btemplate: 1, ptemplate: 1}}); });
}

TabularTables = {};
Meteor.isClient && Template.registerHelper('TabularTables', TabularTables);

TabularTables.Pages = new Tabular.Table({
  name: "Pages",
  collection: Pages,
  columns: [
    {data: "title", title: "Title"},
    {data: "page", title: "Slug"},	
    {data: "date", title: "Date"},
    {data: "category", title: "Category"},
    {data: "tags", title: "Tags"}
  ]
});
