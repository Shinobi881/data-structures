var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  this.storage = {};
  this.storage.first = null;
  this.storage.second = null;
  this.count = 0;

};

Queue.prototype.enqueue = function(value){
	this.storage.value = value;
	if(this.count === 0){
		this.storage.second = this.storage.value;
	}
	this.storage.first = this.storage.second;
	this.storage.second = this.storage.value;
	this.count++;
}

Queue.prototype.dequeue = function(){
	if(this.count ===0){
		return this.count;
	}
	this.count--;
	var seeYou = this.storage.first;
	this.storage.first = this.storage.second;
	return seeYou;
	
}

Queue.prototype.size = function(){
	return this.count;
	
}


