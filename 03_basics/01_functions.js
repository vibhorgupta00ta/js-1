//               functions

// function sayMyname(){
//     console.log("V");
//     console.log("i");
//     console.log("b");
//     console.log("h");
//     console.log("o");
//     console.log("r");
// }
// console.log(sayMyname())

function addTwoNumbers(num1,num2){
    return num1+num2;
}
const result=addTwoNumbers(5,62);
//console.log("result: ",result);

function loginUserMessage(username){
if(username===undefined){
    return "Please enter a valid username";
}
    return `${username} just logged in`;
}
//console.log(loginUserMessage("Vibhor"));4


//****************IMPORTANT******************//

function calculateCartPrice(val1,val2,...prices){//rest operator
    return prices;//array of prices
}
//console.log(calculateCartPrice(100,20,30,21,323));

const user={
    username:"Vibhor",
    prices:199
}

// function handleObjec(anyobject){
//     console.log(`Username is ${anyobject.username} and price is ${anyobject.prices}`);
// }
function handleObjec({username,prices}){
    console.log(`Username is ${username} and price is ${prices}`);
}

//handleObjec(user);

const myNewArray=[200,334,556,778];

function returnSecondValue(getArray){
    return getArray[1];
}

//console.log(returnSecondValue([200,334,556,778]));
//console.log(returnSecondValue(myNewArray));
