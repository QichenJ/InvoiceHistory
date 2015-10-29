var app = app || {};
app.AppView = Backbone.View.extend({
	el: 'body',

	events: {
		'click #form-button': 'createOnAdd'
	},

	initialize: function() {
		this.$inputs = this.$('.form-input');
		this.$subButton = this.$('#form-button');
		this.$invItems = this.$('.inv-items');
		this.$serItems = this.$('#search-list');
		this.listenTo(app.Invs, 'add', this.addOne);
		this.listenTo(app.Sers, 'add', this.addOneSer);
		this.render();
	},

	render: function() {
		app.Sers.create({itemName: 'orange',
			price: '10'
		});
	},

	addOne: function( inv ) {
		var view = new app.invView({model: inv});
		this.$invItems.append(view.render().el);
	},

	addOneSer: function( ser ) {
		var view = new app.serView({model: ser});
		console.log(view.render().el);
		this.$serItems.append(view.render().el);

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