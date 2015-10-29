var app = app || {};
app.selView = Backbone.View.extend({
	tagName: 'li',
	template: _.template( $('#select-template').html()),

	render: function() {
		this.$el.html( this.template( this.model.attributes ));
		return this;
	}
});