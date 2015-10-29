var app = app || {};
app.serView = Backbone.View.extend({
	tagName: 'li',
	template: _.template( $('#search-template').html() ),
	events: {
		'click #ser-sub': 'addToRight'
	},

	initialize: function() {

	},

	render: function() {
		this.$el.html( this.template( this.model.attributes ));
		return this;
	},

	addToRight: function() {
		var tempModel = this.model;
		var num = this.$('#ser-num').val().trim();
		if(num == 0) {
			return;
		}
		var att = tempMpdel.attributes;
		att.num = num;
		att.total =
		app.Sels.add(att);
	}
});