//"use strict";//treat all JS code as newer version

//const { useInsertionEffect } = require("react")

//alert(3+3) //we are using nodejs, not browser
// console.log(3+3)
// console.log("Vibhor");

// let name="Vibhor"
// let age=20
// let isLoggedIn=false
// let state;
// //number=>2 to power 53
// //bigint
// //string=>""
// //boolean=>true/false
// //null=>standalone value
// //undefined
// //symbol=>unique

// //object
// let anotherId=Symbol('123')
// console.log(typeof undefined);
// console.log(typeof null)

// const heros =["Shaktiman","naagraj","doga"];
// let myObj={
//     name: "vibhor",
//     age: 22,
// }
// const myfunction=function(){
//     console.log("Hello World");
// }
// console.log(typeof myfunction);
// console.log(typeof anotherId);

//primitive types:- 7 types:-String,Number,Boolean,null,undefined,Symbol,BigInt
//Non-primitive types(Reference):- Array,Objects,functions


//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

//Stack (Primitive),  Heap(Non-primitive)

let myYoutubename="Vibhorguptamrv"

let anothername=myYoutubename
anothername="chaiaurcode"
console.log(myYoutubename)
console.log(anothername)

let userOne={
    email:"vibhorgupta.com",
    upi:"user123"
}
let userTwo=userOne

userTwo.email="vasugupta.com"
console.log(userOne.email);
console.log(userTwo.email);