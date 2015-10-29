var app = app || {};
app.AppView = Backbone.View.extend({
	el: 'body',
	events: {
		'click #form-button': 'createOnAdd',
		'keyup #search': 'search'
	},

	initialize: function() {
		this.$inputs = this.$('.form-input');
		this.$subButton = this.$('#form-button');
		this.$invItems = this.$('.inv-items');
		this.$serItems = this.$('#search-list');
		this.listenTo(app.Invs, 'add', this.addOne);
		this.listenTo(app.Sers, 'add', this.addOneSer);
		this.addProducts();
	},

	search: function() {
		var search = this.$('#search').val().trim().toLowerCase();
		this.renderList(app.Sers.search(search));
	},

	renderList: function(items) {
		this.$serItems.html('');
		var self = this;
		items.each(function(item) {
			console.log(self.$serItems);
			var view = new app.serView({model: item});
			self.$serItems.append(view.render().el);

		});
		return this;
	},

	addProducts: function() {
		app.Sers.create({itemName: 'orange',
			price: '5'
		});
		app.Sers.create({itemName: 'apple',
			price: '4'
		});
		app.Sers.create({itemName: 'fries',
			price: '8'
		});
		app.Sers.create({itemName: 'sprite',
			price: '2'
		});
		app.Sers.create({itemName: 'pizza',
			price: '9'
		});
		app.Sers.create({itemName: 'water',
			price: '1'
		});
		app.Sers.create({itemName: 'hamburger',
			price: '12'
		});
		app.Sers.create({itemName: 'banana',
			price: '7'
		});
		app.Sers.create({itemName: 'hotpot',
			price: '25'
		});
		app.Sers.create({itemName: 'rice',
			price: '3'
		});
	},

	render: function() {

	},

	addOne: function( inv ) {
		var view = new app.invView({model: inv});
		this.$invItems.append(view.render().el);
	},

	addOneSer: function( ser ) {
		var view = new app.serView({model: ser});
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