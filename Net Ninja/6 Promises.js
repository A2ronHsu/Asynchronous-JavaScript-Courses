let output = [];
const getToDo = (resources) => {

   return new Promise((res, rej)=>{
      const request = new XMLHttpRequest(); //request API 
   request.addEventListener('readystatechange',()=>{ 
      if (request.readyState === 4 && request.status === 200){
         const data = JSON.parse(request.responseText)
         output.push(data); //push data to output here
         
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
.then(()=>console.log(output))
console.log("non-blocking")
