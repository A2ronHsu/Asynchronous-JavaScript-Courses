let stocks = {
  fruits : ['strawberry','grapes','banana','apple'],
  liquid : ['water', 'ice'],
  holder : ['cone', 'cup', 'stick'],
  toppings : [ 'chocolate', 'peanuts']
}

let is_shop_open = true;

function time(ms){
  return new Promise((resolve, reject)=>{
    if(is_shop_open){
      setTimeout(resolve, ms);
    }else{
      reject(console.log('shop is closed'))
    }
  })
}

async function kitchen () {
  try{
    console.log("start")
await time(0).then(console.log("production has started"))
await time(2000).then(console.log(`the ${stocks.fruits[0]} was chopped`))
await time(1000).then(console.log(`added ${stocks.liquid[0]} and ${stocks.liquid[1]}`))
await time(1000).then(console.log(`machine started`))
await time(2000).then(console.log(`put icecream on the ${stocks.holder[1]}`))
await time(3000).then(console.log(`added ${stocks.toppings[0]}`))
await time(2000).then(console.log(`served icecream`))
  }
  catch(error){
    console.log("costumer left")
  }
  finally{
    console.log('finished')
  }
}


console.log('test')

kitchen()

console.log('test')
console.log('test')
console.log('test')