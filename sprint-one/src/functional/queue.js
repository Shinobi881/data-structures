var Queue = function(){
  var someInstance = {};
  var size = 0;
  // Use an object with numeric keys to store values
  var storage = {};
  storage.before = null;
  storage.first = null;

  // Implement the methods below

  someInstance.enqueue = function(value){
    someInstance.value = value;
    if(size === 0){
    storage.first = someInstance.value; //a
  } 
    storage.before = storage.first ; //a
    storage.first = someInstance.value;
    size++;
  };

  someInstance.dequeue = function(){
    if(size === 0){
      return size;
    }
    size--;
    var goodbyeProp = storage.first;
    storage.first = storage.before;
    return goodbyeProp;
  };

  someInstance.size = function(){
    return size;
  };

  return someInstance;
};
