let output = [];
//i want to request the JSON on the JSON folder in the 1,2,3,4,5 order and push it to the output array. To do this i have to block the code while the request is beeing made

//the next code have unpredictable behavior because it is nonBlocking synchronous code
// {
//    const getToDo = (resources ,callback) => {

//       const request = new XMLHttpRequest(); //request API 


//       request.addEventListener('readystatechange',()=>{ 
//          if (request.readyState === 4 && request.status === 200){
//             const data = JSON.parse(request.responseText)

//             output.push(data); //push data to output here
            
//             callback(undefined, data);
//          }
//          else if (request.readyState === 4){
//             callback('could no fetch data', undefined);
//          }
//       });
//       request.open('GET', resources)

//       request.send();


//    }   

//    const callback = (err, data)=>{
//       if(err){
//          console.log(err);
//       }else{
//          console.log(data);
//       }
//    }
//    console.log('this is the start');
//    //getToDo make the request, but the code finishes before the request is complete
//    getToDo('./JSON-API-Simulation/1.json',callback);
//    getToDo('./JSON-API-Simulation/2.json',callback);
//    getToDo('./JSON-API-Simulation/3.json',callback);
//    getToDo('./JSON-API-Simulation/4.json',callback);
//    getToDo('./JSON-API-Simulation/5.json',callback);
//    console.log(output); //the output wil be empty because the requets were not complete

// }

//the next code runs alright because
{
   const getToDo = (resources ,callback) => {

      const request = new XMLHttpRequest(); //request API 


      request.addEventListener('readystatechange',()=>{ 
         if (request.readyState === 4 && request.status === 200){
            const data = JSON.parse(request.responseText)

            output.push(data); //push data to output here
            
            callback(undefined, data);
         }
         else if (request.readyState === 4){
            callback('could no fetch data', undefined);
         }
      });
      request.open('GET', resources)

      request.send();


   }   

   const callback = (err, data)=>{
      if(err){
         console.log(err);
      }else{
         console.log(data);
      }
   }
   console.log('this is the start');
//if i want to console.log(output), i have to nest it deep in the callbacks to run it last, after all the callbacks. This code is ugly, it is called callback hell
   getToDo('./JSON-API-Simulation/1.json',()=>{
      callback;
      getToDo('./JSON-API-Simulation/2.json',()=>{
         callback;
         getToDo('./JSON-API-Simulation/3.json',()=>{
            callback;
            getToDo('./JSON-API-Simulation/4.json',()=>{
               callback;
               getToDo('./JSON-API-Simulation/5.json',()=>{
                  callback;
                  console.log(output);
               });
            });
         });
      });
   });
   
}