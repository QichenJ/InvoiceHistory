var app = app || {};
app.serView = Backbone.View.extend({
	tagName: 'li',
	template: _.template( $('#search-template').html() ),
	events: {

	},

	initialize: function() {

	},

	render: function() {
		this.$el.html( this.template( this.model.attributes ));
		return this;
	}
});