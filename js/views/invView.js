var app = app || {};
app.invView = Backbone.View.extend({

	tagName: 'li',
	template: _.template( $('#item-template').html() ),
	intTemplate: _.template( $('#ins-select-template').html() ),
	events: {
		'click .inv-title': 'toggle'
	},

	toggle: function() {
		this.$('.inv-body').toggle('slow');

	},

	initialize: function() {

	},

	render : function() {
		this.$el.html( this.template( this.model.attributes ));
		var models = app.Sels;
		var self = this;
		var total = 0;
		var htmlTitle = '<div class="sel-title">'+
		'<p class="inv-sel">Name</p>' +
		'<p class="inv-sel">Price</p>' +
		'<p class="inv-sel">Number</p>'+
		'<p class="inv-sel">Total</p>'+
		'<p class="clear"></p></div>';
		self.$('.inv-sel-items').append(htmlTitle);
		models.each(function(model) {
			self.$('.inv-sel-items').append(self.intTemplate(model.attributes));
			total = total + +model.attributes.total;

		});
		this.$('#total-cost').text(total);
		this.$('.inv-body').hide();
		$('#select-list').html('');
		models.each(function(model) {
			app.Sels.remove(app.Sels.where(model));
		});

		return this;
	}
});