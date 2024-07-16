//JSON is a string that looks like JavaScript objects. Is a string representing an array of objects.

//creating a httprequest fuction to be called reusably if needed
const getToDo = (callback) => {
   
   const request = new XMLHttpRequest(); //request API 
   
   
   request.addEventListener('readystatechange',()=>{ 
      // console.log(request, request.readyState);
      if (request.readyState === 4 && request.status === 200){
         const data = JSON.parse(request.responseText)
         callback(undefined, data);
      }
      else if (request.readyState === 4){
         callback('could no fetch data', undefined);
      }
   });
   //here we created a JSON file tu simulate a http request, requesting the json through a XMLHttpRequest() API.
   //Is a string of an array of objects in JavaScript syntax. The object's keys and the strings has to be in double quotes
   request.open('GET','todos.json')
   
   request.send();

   
}   

setTimeout(()=>console.log(1),1000)
console.log(2)

getToDo((err, data)=>{
   if(err){
      console.log(err);
   }else{
      console.log(data);
   }
});

console.log(4)
console.log(5)