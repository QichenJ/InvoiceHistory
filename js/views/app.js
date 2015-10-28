var app = app || {};
app.AppView = Backbone.View.extend({
	el: '#invoices',

	events: {
		'click #form-button': 'createOnAdd'
	},

	initialize: function() {
		this.$inputs = this.$('.form-input');
		this.$subButton = this.$('#form-button');
		this.$invLists = this.$('inv-lists');
		this.listenTo(app.Invs, 'add', this.addOne);
	},

	addOne: function( inv ) {
		var view = new app.invView({model: inv});
		this.$invLists.append(view.render().el);
	}

	newAttributes: function() {
		return {
			firstName: this.$inputs[0].val().trim(),
			lastName: this.$inputs[1].val().trim(),
			invNum: this.$inputs[2].val().trim(),
			date: this.$inputs[3].val().trim()
		};
	}

	createOnAdd: function() {
		app.InvList.create( this.newAttributes() );
		var len = this.$inputs.len();
		for(var i = 0; i < len; i++) {
			this.$input[i].val('');
		}
	}

});