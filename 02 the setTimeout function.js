// setTimeout(fn,t, [...arg]) https://developer.mozilla.org/en-US/docs/Web/API/setTimeout
//execute the function fn, when t milisencond passed, with arg arguments

setTimeout(()=>{
  console.log("usually you can find the fn argument writen like this: as an anonymous function")
},5000)

console.log("I");
console.log("eat");
setTimeout(console.log, 2000, "ice cream", "spoon");
console.log("with a");


//executing this code note that console.log("ice cream", "spoon") runs after 2 seconds. And this is a asynchronous operation simulation
//the first setTimeout takes 5 seconds to run
//the rest of the code runs independely synchronously

