var app = app || {};
var SelList = Backbone.Collection.extend({
	model: app.Sel,
})
app.Sels = new SelList();