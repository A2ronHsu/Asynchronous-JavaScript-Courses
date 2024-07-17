

const getTodo = async () => {

   const response = await fetch('./JSON-API-Simulation/3.json');
   console.log(response)
   if ( response.status !== 200){
      throw new Error("error")
   }
   const data = await response.json();
   return data;
}

getTodo()
   .then(data=> console.log('resolved', data))
   .catch(err=>console.log(err));
console.log("non-blocking")


// fetch('./JSON-API-Simulation/3.json').then( response => {
//    console.log('resolved', response)
   
//    return response.json();
// }).then(data => {
//    console.log(data);
// }
// ).catch(err=>{
//    console.log('rejected',err)
// });