function Counter(root) {
	this.root = root;
	this.val = 0;
	this.step = 1;

	this.create();
	this.initEvents();
}
Counter.prototype.create = function() 
{
	this.root.innerHTML = '<input type="button" class="counter-plus" value="+">'
		+ '<span class="counter-val">' + this.val + '</span>' + '<input type="button" class="counter-minus" value="-">';
	this.plusEl = this.root.querySelector('.counter-plus');
	this.minusEl = this.root.querySelector('.counter-minus');
	this.valEl = this.root.querySelector('.counter-val');
}
Counter.prototype.initEvents = function() {
	var self = this;
	this.plusEl.addEventListener('click', function() {
		self.valEl.innerHTML = (self.val += self.step);
	});
	this.minusEl.addEventListener('click', function() {
		self.valEl.innerHTML = (self.val -= self.step);
	});
};

var root1 = document.getElementById('counter1');

var counter1 = new Counter(root1);
