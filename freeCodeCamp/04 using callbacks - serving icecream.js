/**
to server icecream we have a sequece to follow in this order:
  order from costumer;
  fetch the ingridients;
  start production;
  serve.
let use callback to solve this
*/
let stocks = {
  fruits : ['strawberry','grapes','banana','apple'],
  liquid : ['water', 'ice'],
  holder : ['cone', 'cup', 'stick'],
  toppings : [ 'chocolate', 'peanuts']
}

let order = (fruit_name, callProduction)=>{
  setTimeout(()=>{
    console.log(`${stocks.fruits[fruit_name]} was selected`)
    callProduction()
  },2000)
}

let production = () => {
  setTimeout(()=>{
    console.log("production has started");

    setTimeout(() => {
      console.log("the fruit has been chopped");

      setTimeout(()=>{
        console.log(`${stocks.liquid[0]} and ${stocks.liquid[1]} was added`)

        setTimeout(()=>{
          console.log("the machine has been started");

          setTimeout(()=>{
            console.log(`icecream was placed in the ${stocks.holder[0]} `);

            setTimeout(()=>{
              console.log(`${stocks.toppings[0]} was added`);

              setTimeout(()=>{
                console.log("serving icecream");

              },200)
            },1000)
          },500)
        },2000)
      },0)
    }, 500);
  },1000)
}



order(0, production);

