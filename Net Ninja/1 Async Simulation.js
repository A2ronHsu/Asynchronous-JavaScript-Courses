console.log(1);
console.log(2);
//setTimeout simulate a async request from a API or a http request

setTimeout(()=>{
   console.log('callback function ¨A¨ fired and does not block the code')
},2000)


console.log(3);
console.log(4);