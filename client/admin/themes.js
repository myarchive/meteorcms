Template.admin_themes.events({
	'click .thumbnail': function(event) {
		var alt = $(event.currentTarget).children("img").attr("alt");
		bootbox.confirm("Make "+alt+" your active theme?", function(result) {
			if (result) {
				var id = Config.findOne({})._id;
				Config.update({"_id": id}, {$set: {"settings.theme": alt}}, function(error, result) {
					if (result) {
						$(".thumbnail").removeClass("active");
						$(event.currentTarget).addClass("active");
					}
				});

			}
		});
	}
});

Template.admin_themes.helpers({
	themes: function() {
		return Themes.find({});
	},
	activeTheme: function() {
		var result = Config.findOne({});
		if (result) {
			$(".thumbnail").removeClass("active");
			$($('img[alt="'+result.settings.theme+'"]')).parent().addClass("active");
		}
	}
});
