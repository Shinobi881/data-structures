var Tree = function(value){
  var newTree = Object.create(treeMethods);
  newTree.value = value; 
  

  newTree.children = [];  // fix me
  // console.log(newTree.children);
  
  return newTree;

};





var treeMethods = {};

treeMethods.addChild = function(value){
	var newKid = Tree(value)
	this.children[this.children.length] = newKid;

};


treeMethods.contains = function(target){
	var containsTarget = false;

	if(this.value === target){
		containsTarget = true;
		return containsTarget;
	}

	for(var i =0; i<this.children.length;i++){

		if(this.children[i].value === target){
			containsTarget = true;
			return containsTarget;
		} 
		else{	

			var nextChild = this.children[i];
			var isInside = nextChild.contains(target);
			if(isInside){ return true;}
		}
	}
	return containsTarget;
};


/*
 * Complexity: What is the time complexity of the above functions?
 */
 //linear time complexity. 
