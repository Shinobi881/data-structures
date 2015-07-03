var LinkedList = function(){
  var list = {};
  list.head = null;
  list.tail = null;

  list.addToTail = function(value){
    var node = Node(value);
    // console.log(node);
    list.tail = node;

    if(list.head === null){
      list.head = list.tail;
    }

    // console.log(list.tail);
  };

  list.removeHead = function(){
   if(list.head === null){
    list.head = list.tail;
   }

    var removeHead = list.head;
    list.head = list.tail;
    //console.log('Removed head', removeHead);
    return removeHead.value;
  };

  list.contains = function(target){

    //console.log(list);
    //console.log('Logging target', target);
    var isFound = false;
    for(var i in list){
      if(list[i].value === target){
          isFound = true;
      }

    }
          return isFound;
  };

  return list;
};


var Node = function(value){
  var node = {};

  node.value = value;
  node.next = null;

  return node;
};



/*
 * Complexity: What is the time complexity of the above functions?
 */
