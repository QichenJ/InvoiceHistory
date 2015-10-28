var app = app || {};
app.AppView = Backbone.View.extend({
	el: '#invoices',

	events: {
		'click #form-button': 'createOnAdd'
	},

	initialize: function() {
		this.$inputs = this.$('.form-input');
		this.$subButton = this.$('#form-button');
		this.$invItems = this.$('.inv-items');
		this.listenTo(app.Invs, 'add', this.addOne);
		this.render();
	},

	render: function() {

	},

	addOne: function( inv ) {
		var view = new app.invView({model: inv});
		console.log(view.render().el);
		this.$invItems.append(view.render().el);
	},

	newAttributes: function() {
		var list = this.$inputs.map(function() {
			return $(this).val().trim();
		}).get();
		return {
			firstName: list[0],
			lastName: list[1],
			invNum: list[2],
			invDate: list[3]
		};
	},

	createOnAdd: function(e) {
		e.preventDefault();
		app.Invs.create( this.newAttributes() );
		this.$inputs.val('');
	}

});

$(function() {
	new app.AppView();
});