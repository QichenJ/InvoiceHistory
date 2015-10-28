var app = app || {};
var InvList = Backbone.Collection.extend({
	model: app.Inv,
	localStorage: new Backbone.LocalStorage('invs-backbone')
});

app.Invs = new InvList();