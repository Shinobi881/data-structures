var Queue = function(){
  var someInstance = {};
  var size = 0;
  // Use an object with numeric keys to store values
  var storage = {};
  storage.second = null;
  storage.first = null;

  // Implement the methods below

  someInstance.enqueue = function(value){
    someInstance.value = value;
    if(size === 0){
    storage.second = someInstance.value; //a
  } 
    storage.first = storage.second ; //a
    storage.second = someInstance.value;
    size++;
  };

  someInstance.dequeue = function(){
    if(size === 0){
      return size;
    }
    size--;
    var goodbyeProp = storage.first;
    storage.first = storage.second;
    return goodbyeProp;
  };

  someInstance.size = function(){
    return size;
  };

  return someInstance;
};
