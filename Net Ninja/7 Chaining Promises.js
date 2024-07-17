let output = [];
const getToDo = (resources) => {

   return new Promise((res, rej)=>{
      const request = new XMLHttpRequest(); //request API 
   request.addEventListener('readystatechange',()=>{ 
      if (request.readyState === 4 && request.status === 200){
         const data = JSON.parse(request.responseText)
         // output.push(data); //push data to output here
         
         res(data)
      }
      else if (request.readyState === 4){
         rej("can't fetch data")
      }
   });
   request.open('GET', resources)
   request.send();
   })
   
}

console.log('start here');
getToDo('./JSON-API-Simulation/1.json')
.then((data)=>{
   console.log("promise 1 resolved")
   output.push(data);
   return getToDo('./JSON-API-Simulation/2.json')
}).then((data)=>{
   console.log("promise 2 resolved")
   output.push(data);
   return getToDo('./JSON-API-Simulation/3.json')
}).then((data)=>{
   console.log("promise 3 resolved")
   output.push(data);
   return getToDo('./JSON-API-Simulation/4.json')
}).then((data)=>{
   console.log("promise 4 resolved")
   output.push(data);
   return getToDo('./JSON-API-Simulation/5.json')
}).then((data)=>{
   console.log("promise 5 resolved")
   output.push(data);
   console.log("all 5 promises resolved")
   console.log(output)
})
console.log("non-blocking")
