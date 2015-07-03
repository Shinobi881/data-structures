var Queue = function(){
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
var obj = {};
	obj.storage = {};
	obj.storage.last = null;
	obj.storage.before = null;
	obj.count = 0;
	
	obj.enqueue = queueMethods.enqueue;
	obj.dequeue = queueMethods.dequeue;
	obj.size = queueMethods.size;

	return obj;
};





var queueMethods = {};
	
	queueMethods.enqueue = function(value){
		this.count++
	};

	queueMethods.dequeue= function(){
		if(this.count === 0){
			return this.count;
		}
		this.count--;

	};

	
	queueMethods.size = function(){ 
		// console.log(this.count); 
		return this.count;
	}; 
// we need to invoke size as a method on an instance of a queue
// how do we create an instance of a queue?


// queueMethods.size();
// console.log(queueMethods);
// var newQueue = Queue();
// console.log(newQueue);

// newQueue.enqueue('a');

