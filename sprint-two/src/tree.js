var Tree = function(value){
  var newTree = {};
  newTree.value = value;

  newTree.lastValue = 0;
  // your code here
  newTree.children = [{}];  // fix me
  console.log(newTree.children);
  newTree.addChild = treeMethods.addChild;
  newTree.contains = treeMethods.contains;
  
  return newTree;

};





var treeMethods = {};

treeMethods.addChild = function(value){
	this.children[0].value = value;
};

treeMethods.contains = function(target){
	//debugger;
	var containsTarget = false;
	for(var i = 0; i < this.children.length; i++){
		for(var key in this.children[i]){
			
			if (this.children[i].value === target) {
				containsTarget = true;
			}
		}
	}
	return containsTarget;
};


/*
 * Complexity: What is the time complexity of the above functions?
 */
