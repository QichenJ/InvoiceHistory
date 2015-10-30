var app = app || {};
app.serView = Backbone.View.extend({
	tagName: 'li',
	template: _.template( $('#search-template').html() ),
	events: {
		'click #ser-sub': 'addToRight'
	},

	initialize: function() {

	},

	render: function() {
		this.$el.html( this.template( this.model.attributes ));
		return this;
	},

	addToRight: function() {
		var tempModel = this.model;
		var num = this.$('#ser-num').val().trim();
		if(num == 0) {
			return;
		}
		this.$('#ser-num').val('');
		var att = {};
		var temp = tempModel.attributes;
		for(var a in temp) {
			if(temp.hasOwnProperty(a)) {
				att[a] = temp[a];
			}
		}
		att.num = num;
		att.total = att.num * att.price;
		app.Sels.add(att);

	}
});