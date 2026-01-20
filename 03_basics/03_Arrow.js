const user={
    username: "Vibhor",
    price: 999,
    welcomeMessage: function(){
        console.log(`${this.username}, Welcome to website`)
        console.log(this)
    }
}

 //user.welcomeMessage()
// user.username="sam"
// user.welcomeMessage()
//console.log(this)

//this keyword used in objects only....... 

// const chai = function(){
//     let username = "Hitesh"
//     console.log(username);
// }
//chai();
const chai = () => {     //Arrow function
    let username = "Hitesh"
    console.log(this);
}
// chai();

//const addTwo =(num1,num2)=> (num1+num2); //like lambda function in java
// const addTwo=(num1,num2)=>{
//     return num1+num2;
// }

const addTwo=(num1,num2)=>({username:"vibhor"}) //object ko return krne ke liye parenthesis me wrap krna hi pdega...
console.log(addTwo(3,4));


