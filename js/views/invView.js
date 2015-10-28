var app = app || {};
app.invView = Backbone.View.extend({

	tagName: 'li',
	template: _.template( $('#item-template').html() ),
	events: {

	},

	initialize: function() {

	},

	render : function() {
		this.$el.html( this.template( this.model.attributes ));
		return this;
	}
});