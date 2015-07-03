var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  this.storage = {};
  this.storage.last = null;
  this.storage.first = null;
  this.count = 0;

};

Stack.prototype.push = function(value){
	this.storage.value = value;
	if(this.storage.last === null){
		this.storage.last = this.storage.before;
	}
	this.storage.before = this.storage.last;
	this.storage.last = this.storage.value;
	this.count++;
}

Stack.prototype.pop = function(){
	if(this.count === 0){
		return this.count;
	}
	this.count--;
	var peaceOut = this.storage.last;
	this.storage.last = this.storage.before;
	return peaceOut;
}

Stack.prototype.size = function(){
	return this.count;
}