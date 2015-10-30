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
		this.$selItems = this.$('#select-list');
		this.listenTo(app.Invs, 'add', this.addOne);
		this.listenTo(app.Sers, 'add', this.addOneSer);
		this.listenTo(app.Sels, 'add', this.addOneSel);
		this.addProducts();
	},

	removeHtml: function( model ) {
		model.el.remove();
	},

	addOneSel: function( sel ) {
		var view = new app.selView({model: sel});
		this.$selItems.append(view.render().el);

	},

	search: function() {
		var search = this.$('#search').val().trim().toLowerCase();
		this.renderList(app.Sers.search(search));
	},

	renderList: function(items) {
		this.$serItems.html('');
		var self = this;
		items.each(function(item) {
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
		var alert = this.$('#alert');
		alert.html('');
		var firstName = this.$('.form-input:eq(0)').val().trim();
		var lastName = this.$('.form-input:eq(1)').val().trim();
		var date = this.$('.form-input:eq(2)').val().trim();
		var invoiceNum = this.$('.form-input:eq(3)').val().trim();
		var patternDate = /^([0-9]{2})\/([0-9]{2})\/([0-9]{4})$/;
		var patternNum = /^([0-9]{3})\-([0-9]{4})/;
		var datePass = patternDate.test(date);
		var numPass = patternNum.test(invoiceNum)
		if(lastName == '' || firstName == '' || !datePass || !numPass || app.Sels.length == 0) {
			if(firstName == '') {
				alert.append('<p class="p-alert"> Please Enter FIrst Name</p>');
			}

			if(lastName == '') {
				alert.append('<p class="p-alert"> Please Enter Last Name</p>');
			}

			if(!datePass) {
				alert.append('<p class="p-alert"> Date Is Invalid</p>');
			}

			if(!numPass) {
				alert.append('<p class="p-alert"> Invoice Number Is Invalid</p>');
			}

			if(app.Sels.length == 0) {
				alert.append('<p class="p-alert"> No Product Is Selected</P>');
			}
		} else {
			app.Invs.create( this.newAttributes() );
			this.$inputs.val('');
			alert.html('');
		}

	}

});

$(function() {
	new app.AppView();
});