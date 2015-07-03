var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var obj = Object.create(stackMethods);
	obj.storage ={};
	obj.storage.last = null;
	obj.storage.first = null;
	obj.count = 0;

	return obj;


};

var stackMethods = {};

stackMethods.push = function(value){
	this.storage.value = value;
	if(this.storage.last === null){
		this.storage.last = this.storage.before;
	}
	this.storage.before = this.storage.last;
	this.storage.last = this.storage.value;
	this.count++;
};

stackMethods.pop = function(){
	if(this.count === 0){
		return this.count;
	}
	this.count--;
	var seeYou = this.storage.last;
	this.storage.last = this.storage.before;
	return seeYou;
};

stackMethods.size = function(){
	return this.count;

};

