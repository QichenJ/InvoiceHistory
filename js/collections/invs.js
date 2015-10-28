var app = app || {};
var InvList = Backbone.Collection.extend({
	model: app.Inv,
	localStorage: new Backbone.localStorage('invs-backbone')
});

app.Invs = new InvList();