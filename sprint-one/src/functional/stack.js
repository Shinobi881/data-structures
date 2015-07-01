var Stack = function(){
  var someInstance = {};
  var size = 0;
  // Use an object with numeric keys to store values
  var storage = {};
  storage.before = null;
  storage.last = null;
  // Implement the methods below
  someInstance.push = function(value){  
    someInstance.value = value;
    if(size === 0){
    storage.last = someInstance.value; //a
  } 
    storage.before = storage.last; //a
    storage.last = someInstance.value;
    size++;

  };

  someInstance.pop = function(){
    if(size === 0){
      return size;
    }
    size--;
    var goodbyeProp = storage.last;
    storage.last = storage.before;
    return goodbyeProp;

  };

  someInstance.size = function(){
    return size;

  };

  return someInstance;
};
