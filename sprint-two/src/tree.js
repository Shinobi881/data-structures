var Tree = function(value){
  var newTree = Object.create(treeMethods);
  newTree.value = value;

  newTree.lastValue = 0;
  // your code here
  // newTree.root = null;
  // newTree.parent = null.
  newTree.children = [{}];  // fix me
  // console.log(newTree.children);


  // newTree.addChild = treeMethods.addChild;
  // newTree.contains = treeMethods.contains;
  
  return newTree;

};





var treeMethods = {};

treeMethods.addChild = function(value){
	
	// this.children[0] = this.addChild(value);

	// _.each(this.children[0], function(newTree){
	// // newTree.addChild(this.children[0].value);
	//console.log(this.children.length);

	// });

	this.children[this.children.length -1].value = addChild(this.children);


};


treeMethods.contains = function(target){
	//debugger;
	var containsTarget = false;
	
	_.each(this.children, function(element){
		_.each(element, function(keyValue, key){
			if (keyValue === target) {
				containsTarget = true;
			}

		});
	});



	return containsTarget;







	// for(var i = 0; i < this.children.length; i++){
	// 	for(var key in this.children[i]){
			
	// 		if (this.children[i].value === target) {
	// 			containsTarget = true;
	// 		}
	// 	}
	// }
};


/*
 * Complexity: What is the time complexity of the above functions?
 */
