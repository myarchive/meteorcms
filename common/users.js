TabularTables = {};

Meteor.isClient && Template.registerHelper('TabularTables', TabularTables);

TabularTables.Users = new Tabular.Table({
  name: "Users",
  collection: Meteor.users,
  columns: [
    {data: "profile.name", title: "Name"},
    {data: "registered_emails.0.address", title: "Email"}
  ]
});