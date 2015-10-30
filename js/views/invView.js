var app = app || {};
app.invView = Backbone.View.extend({

	tagName: 'li',
	template: _.template( $('#item-template').html() ),
	intTemplate: _.template( $('#ins-select-template').html() ),
	events: {

	},

	initialize: function() {

	},

	render : function() {
		this.$el.html( this.template( this.model.attributes ));
		var models = app.Sels;
		var self = this;
		var htmlTitle = '<div class="sel-title">'+
		'<p class="inv-sel">Name</p>' +
		'<p class="inv-sel">Price</p>' +
		'<p class="inv-sel">Number</p>'+
		'<p class="inv-sel">Total</p>'+
		'<p class="clear"></p></div>';
		self.$el.append(htmlTitle);
		models.each(function(model) {
			self.$el.append(self.intTemplate(model.attributes));
		});
		return this;
	}
});