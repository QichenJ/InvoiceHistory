var app = app || {};
app.selView = Backbone.View.extend({
	tagName: 'li',
	template: _.template( $('#select-template').html()),
	events: {
		'keyup #sel-num': 'changeTotal',
		'focusout #sel-num': 'checkNum',

	},

	render: function() {
		this.$el.html( this.template( this.model.attributes ));
		return this;
	},

	checkNum: function(){
		var num = this.$('#sel-num').val().trim();
		var tempModel = this.model;
		if(num === '') {
			app.Sels.remove(app.Sels.where(tempModel));
			this.el.remove();
		}
	},

	changeTotal: function() {
		var tempModel = this.model;
		var newNum = this.$('#sel-num').val().trim();
		if(newNum === '0') {
			app.Sels.remove(app.Sels.where(tempModel));
			this.el.remove();
		} else {
			var att = this.model.attributes;
			att.num = newNum;
			att.total = att.num * att.price;
			this.$('#sel-tot').text(att.total);
		}
	}
});