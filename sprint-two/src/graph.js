

var Graph = function(){
	this.storage = {};


};

Graph.prototype.addNode = function(node){
	var newNode = new GraphNode(node); 
	this.storage.node = newNode;
	//console.log(this.storage);
};

Graph.prototype.contains = function(node){
	var containsNode = false;
	// console.log(this.storage);
	if (this.storage.node.value === node) {
		containsNode = true;
	};

	return containsNode;
};

Graph.prototype.removeNode = function(node){
	if (this.storage.node.value === node) {
		delete this.storage.node.value;
	};
};

Graph.prototype.hasEdge = function(fromNode, toNode){
	// console.log('From node', fromNode);
	// console.log(this.storage.node.value);

	var nodeHasEdge = false;
	console.log(fromNode, toNode);
	console.log(this.storage.node);
	
	//console.log(this.storage.node.edge.toNode === toNode);
	if(this.storage.node.edge[toNode] === toNode){
		nodeHasEdge = true;
	}

	//console.log(this.storage.node.edge);

	return nodeHasEdge;


};

Graph.prototype.addEdge = function(fromNode, toNode){
	//console.log(this.storage.node);
	
	//console.log(toNode);
	// var from = new GraphNode(fromNode);
	// var to = new GraphNode(toNode);
	//var nodeValue = this.storage.node;
	
	// if(nodeValue.edge. === fromNode){
	// 	this.storage.node.edge[toNode] = toNode;
	// }
	this.storage.node.edge[toNode] = toNode;

	//var edgeCount = 0;

	//this.storage.node.edge[toNode] = toNode;
	
		//console.log(this.storage.node);
		//console.log(fromNode, toNode);
	};

Graph.prototype.removeEdge = function(fromNode, toNode){
	// console.log(this.storage.node);
	// console.log(toNode, fromNode);

	if(this.storage.node.edge[toNode] === toNode){
		delete this.storage.node.edge[toNode];
	}

	//console.log(this.storage.node);
};

Graph.prototype.forEachNode = function(cb){

	_.each(this.storage, function(nodes){
		cb(nodes);
	});
};



var GraphNode = function(value){
	this.value = value;
	this.edge = {};


};



/*
 * Complexity: What is the time complexity of the above functions?
 */



