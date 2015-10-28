var app = app || {};
app.Inv = Backbone.Model.extend({
	defaults: {
		firstName: 'John',
		lastName: 'Doe',
		invNum: 'NAN',
		date: ''
	}
});