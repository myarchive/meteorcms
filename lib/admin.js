/* Admin Model
 * 
 * All Collections:
 * id: unique id
 * order: in menu
 * label: label
 * page: internal only page name, or null
 * url: external only url, or null
 */

AdminMenu = new Meteor.Collection('adminmenu');

if (Meteor.isClient) {
	Meteor.subscribe("adminmenu");
}
if (Meteor.isServer) {
	Meteor.publish("adminmenu", function() {
		return AdminMenu.find({}, {fields: {id: 1, order: 1, name: 1, icon: 1, label: 1, pages: 1}});
	});

	if (AdminMenu.find({}).count() === 0) {
		AdminMenu.insert({
			order: 1,
			name: "dashboard",
			icon: "tachometer",
			label: "Dashboard",
			pages: [
				{
					name: null,
					icon: "th",
					label: "Overview"
				},
				{
					name: "stats",
					icon: "bar-chart",
					label: "Statistics"
				},
				{
					name: "config",
					icon: "cogs",
					label: "Configuration"
				}
			]
		});
		AdminMenu.insert({
			order: 2,
			name: "pages",
			icon: "file",
			label: "Pages",
			pages: [
				{
					order: 1,
					name: null,
					icon: "list",
					label: "List"
				},
				{
					order: 2,
					name: "new",
					icon: "plus",
					label: "New"
				}
			]
		});
		AdminMenu.insert({
			order: 2,
			name: "posts",
			icon: "pencil-square",
			label: "Posts",
			pages: [
				{
					order: 1,
					name: null,
					icon: "list",
					label: "List"
				},
				{
					order: 2,
					name: "new",
					icon: "plus",
					label: "New"
				}
			]
		});
		AdminMenu.insert({
			order: 3,
			name: "menus",
			icon: "bars",
			label: "Menus",
			pages: [
				{
					order: 1,
					name: null,
					icon: "list",
					label: "List"
				},
				{
					order: 2,
					name: "new",
					icon: "plus",
					label: "New"
				}
			]
		});
		AdminMenu.insert({
			order: 4,
			name: "themes",
			icon: "file-image-o",
			label: "Themes",
			pages: [
				{
					order: 1,
					name: null,
					icon: "list",
					label: "List"
				},
				{
					order: 2,
					name: "new",
					icon: "plus",
					label: "New"
				}
			]
		});
		AdminMenu.insert({
			order: 5,
			name: "plugins",
			icon: "plug",
			label: "Plugins",
			pages: [
				{
					order: 1,
					name: null,
					icon: "list",
					label: "List"
				},
				{
					order: 2,
					name: "new",
					icon: "plus",
					label: "New"
				}
			]
		});
		AdminMenu.insert({
			order: 6,
			name: "users",
			icon: "users",
			label: "Users",
			pages: [
				{
					order: 1,
					name: null,
					icon: "list",
					label: "List"
				},
				{
					order: 2,
					name: "new",
					icon: "plus",
					label: "New"
				}
			]
		});
	}
}
