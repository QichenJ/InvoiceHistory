var app = app || {};
var SerList = Backbone.Collection.extend({
	model: app.Ser,
	localStorage: new Backbone.LocalStorage('sers-backbone'),
	search: function(input) {
		if(input == '') {
			return this;
		}

		var pattern = new RegExp(input, 'i');
		return _(this.filter(function(data){
			return pattern.test(data.get('itemName'));
		}));
	}
});
app.Sers = new SerList();