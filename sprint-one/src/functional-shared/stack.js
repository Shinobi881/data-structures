var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  	var obj = {};

  	obj.storage = {};
  	obj.storage.last = null;
  	obj.storage.before = null;
	obj.count = 0;
  	//console.log(obj.count);
  	obj.push = stackMethods.push;
  	obj.pop = stackMethods.pop;
  	obj.size = stackMethods.size;
  



  return obj;
};

var stackMethods = {};
stackMethods.push = function(value){ 
	this.storage.value = value;
	if(this.storage.last === null){
		this.storage.last = this.storage.before;
	}

	this.count++;};
stackMethods.pop = function(){
if(this.count === 0){
	return;
}
	this.count--;};

stackMethods.size = function(){return this.count;};









// var newStack = Stack();
// console.log(newStack);

// newStack.push('a');
// newStack.push('a');
// newStack.pop();
// console.log(newStack.size());

















// var stackMethods = {
// 	storage: {},	

// 	push: function(value){
// 		this.size(1);
// 	},

// 	pop: function(){

// 	},

// 	size: function(item){
// 		// var count = 0;
// 		// if(item === undefined){
// 		// 	return count;
// 		// }
// 		// else{
// 			return count += item;
// 	// 	}
// 	// 	return count;
// 	// }

// };


