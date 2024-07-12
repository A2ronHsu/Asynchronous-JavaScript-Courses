//basically is a function that call a function
//this code runs synchronouslly
function one(){
  console.log("step 1");
}

function two(){
  console.log("step 2");
}

one();
two();
//let's make one() call functiont two() through a callback argument

function oneWithCallback(callback){
  console.log("step 1 using callback, calling step 2")
  callback()
}
//now let's chain these two operation

oneWithCallback(two);