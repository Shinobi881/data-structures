var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  return {
  	push: stackMethods.push,
  	pop: stackMethods.pop,
  	size: stackMethods.size
  }
};

var stackMethods = {
	storage: {},	

	push: function(value){
		this.size(1);
	},

	pop: function(){

	},

	size: function(item){
		var count = 0;
		// if(item === undefined){
		// 	return count;
		// }
		// else{
			return count += item;
		// }
		// return count;
	}

};


