// const array1=[1,2,3,4];
// //0+1+2+3+4
// const initialValue=0;
// const sumwithInitial=array1.reduce(
//     (accumulator,currentValue)=>accumulator+currentValue,
//     initialValue
// );
// console.log(sumwithInitial)//10


// const myNums=[1,2,3]
// const myTotal=myNums.reduce(function (acc,curval){
//     console.log(`acc : ${acc} and curval : ${curval}`)
//     return acc+curval
// },0)

// console.log(myTotal)



const shoppingCart=[
    {
        itemName:"js course",
        price:2999
    },
    {
        itemName:"python course",
        price:2099
    },
    {
        itemName:"cpp course",
        price:4999
    },
    {
        itemName:"webd course",
        price:9999
    },
    {
        itemName:"data science course",
        price:7999
    }
]
// let sum=0
// for(let num in shoppingCart){
//     sum=sum+shoppingCart[num].price
// }
// console.log(sum)
// for(let num of shoppingCart){
//     sum=sum+num.price
// }
// console.log(sum)

// const sum=shoppingCart.reduce((acc,item)=>acc+item.price,0)
// console.log(sum)