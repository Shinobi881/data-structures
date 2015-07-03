var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.


var obj = Object.create(queueMethods);
	obj.storage ={};
	obj.storage.first = null;
	obj.storage.second = null;
	obj.count = 0;

	return obj;


};

var queueMethods = {};

queueMethods.enqueue = function(value){
	this.storage.value = value;
	if(this.count === 0){
		this.storage.second = this.storage.value;
	}

	this.storage.first = this.storage.second;
	this.storage.second = this.storage.value;
	this.count++;

};

queueMethods.dequeue = function(){
	if(this.count === 0){
		return this.count;
	}
	
	this.count--;

	var goodbye = this.storage.first;
	this.storage.first = this.storage.second;
	return goodbye;


};

queueMethods.size = function(){
	return this.count;

};


