var app = app || {};
var SerList = Backbone.Collection.extend({
	model: app.Ser,
	localStorage: new Backbone.LocalStorage('sers-backbone')
});
app.Sers = new SerList();