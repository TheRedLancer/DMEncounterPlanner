function Person(first, last) {
	this.first = first;
	this.last = last;
	this.fullName = function() {
		return this.first + ' ' + this.last;
	};
	this.fullNameReversed = function() {
		return this.last + ', ' + this.first;
	};
}
var Zach = new Person('Zach', 'Burnaby');
console.log('Made by ' + Zach.fullName());
