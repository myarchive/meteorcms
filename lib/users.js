TabularTables.Users = new Tabular.Table({
  name: "Users",
  collection: Meteor.users,
  columns: [
    {data: "profile.name", title: "Name", render: function(val, type, doc) {
		return "<a href='/admin/user/"+doc._id+"'>"+val+"</a>";
	}},
    {data: "registered_emails.0.address", title: "Email"},
	{data: "roles", title: "Role"}
  ]
});