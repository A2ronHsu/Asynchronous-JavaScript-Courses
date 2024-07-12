let stocks = {
  fruits : ['strawberry','grapes','banana','apple'],
  liquid : ['water', 'ice'],
  holder : ['cone', 'cup', 'stick'],
  toppings : [ 'chocolate', 'peanuts']
}

let is_shop_open = true;

let order = (time , work) => {
  return new Promise( (resolve, reject)=>{
    if(is_shop_open){
      setTimeout(()=>{
        resolve( work() );
      },time)
    }else{
      reject(
        console.log("our shop is closed")
      );
    }

  })
}

console.log('start simulation')
order(2000,()=> console.log(`${stocks.fruits[0]}`))
.then(()=> order(0,()=> console.log("production has started")))
.then(()=> order(2000,()=> console.log("the fruit was chopped")))
.then(()=> order(1000,()=> console.log(`added ${stocks.liquid[0]} and ${stocks.liquid[1]}`)))
.then(()=> order(1000,()=> console.log(`machine started`)))
.then(()=> order(2000,()=> console.log(`put icecream on the ${stocks.holder[1]}`)))
.then(()=> order(3000,()=> console.log(`added ${stocks.toppings[0]}`)))
.then(()=> order(2000,()=> console.log(`served icecream`)))
.catch(()=> error => console.log(error))
.finally(()=> console.log("Finished"))