//creating a httprequest fuction to be called reusably if needed
const getToDo = (callback) => {
   
   const request = new XMLHttpRequest(); //request API 
   
   
   request.addEventListener('readystatechange',()=>{ 
      // console.log(request, request.readyState);
      if (request.readyState === 4 && request.status === 200)
         callback(undefined, request.responseText);
      else if (request.readyState === 4){
         callback('could no fetch data', undefined);
      }
   });
   request.open('GET','https://jsonplaceholder.typicode.com/todos')
   
   request.send();

   
}   

getToDo((err, data)=>{
   if(err){
      console.log(err);
   }else{
      console.log(data);
   }
});