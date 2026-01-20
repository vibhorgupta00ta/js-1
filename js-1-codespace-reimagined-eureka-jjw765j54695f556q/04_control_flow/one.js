// if ,else tha (conditional statements) aur >,<,<=,>=,==,===,!=,!== yeh sab hae jo muje aata hae aur === isme type bhi check hota hae , !== isme bhi type check hota hae ek '=' hata du toh type check nhi hota...

// &&,|| ke bare me bhi btaya muje pta hae...

// dusre part me switch case pdhaya voh bhi muje aata hae..toh tension nhi ...





// ****************falsy values************//

//false,0,-0,BigInt,0n,"",null,undefined,Nan

//*************Truthy values **************//

//"0",'false'," ",[],{},function(){}


// const userEmail=[]
// if(userEmail.length===0){
//     console.log("Array is empty");
// }

// const emptyObj={}
// if(Object.keys(emptyObj).length===0){
//     console.log("Object is empty");
// }


//Nullish Coalesing operator(??):null undefined

let val1;
// val1=5??10
//val1=null??10                      //*
//val1=undefined??15                 //*
//console.log(val1)


//Terniary operator
//condition?true:false      // yeh mujhe aata hae


// saare loops toh aata hae mujhe...


//for of
//["","",""]
//[{},{},{}]

const arr=[1,2,3,4,5]

// for (const num of arr) {
//     console.log(num);
// }
//string vgera sb pe lgta hae

//Maps
const map=new Map()
map.set('IN',"India")
map.set('USA',"United states of america")
map.set('IN',"India")
map.set('Fr','France')

//console.log(map)
for(const [key,value] of map){
   // console.log(key,':-',value);
}



//for in
const myobject={
    js: 'javascript',
    cpp: 'c++',
    rb:"ruby",
    swift:"swift by apple"
}

for(const key in myobject){
    //console.log(`${key} shortcut is for ${myobject[key]}`);
}

const prog=["js","java","cpp","rb","py"]
for(const key in prog ){
    //console.log(prog[key])
}
//**IMPORTANT**//
//callback hae isiliye function ka name nahi hae

// prog.forEach( function (item) {
//     console.log(item)
// } )

// prog.forEach((item,index,arr)=>{
//     console.log(item,index,arr)
// })

//best way
// function printMe(item,index,arr){
//     console.log(item,index,arr);
// }
//  prog.forEach(printMe)


// const myCoding=[
//     {
//         languageName: "Javascript",
//         languageFilename:"js"
//     },
//     {
//         languageName: "Java",
//         languageFilename:"java"
//     },
//     {
//         languageName: "Python",
//         languageFilename:"py"
//     }
// ]
// myCoding.forEach( (item) => {
//     console.log(item.languageName);
// })


const myNums=[1,2,3,4,5,6,7,8,9,10]
//const newNums=myNums.filter((num)=>num>4)
// const newNums=myNums.filter((num)=>{
//     return num>4 
// } )
//console.log(newNums);

// MAP
//const newNums=myNums.map((num)=>{return num+10})

const newNums=myNums.map((num)=>num*10).map((num)=>num+1).filter((num)=>num>40)
console.log(newNums)