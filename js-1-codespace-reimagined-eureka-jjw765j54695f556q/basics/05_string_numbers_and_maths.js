// const name="vibhor"
// const repoCount=10
// //console.log(name+repoCount+" Value");

// console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);

// const gameName=new String('vasu-gupta-from-prayagraj')
// console.log(gameName[0]);
// console.log(gameName.__proto__);

// console.log(gameName.length);
// console.log(gameName.toUpperCase());
// console.log(gameName.charAt(2))

// console.log(gameName.indexOf('u'));

// const newStr=gameName.substring(0,2)
// console.log(newStr)

// console.log(gameName.slice(-3,3))

// const newStringOne="    vibhor    "
// console.log(newStringOne)
// console.log(newStringOne.trim())

// const url="https://vibhor.com/vasu%20gupta"
// console.log(url.replace('%20','_'))

// console.log(gameName.split('-'))


// //numbers and maths

// const balance =new Number(100);
// console.log(balance)

// console.log(balance.toString().length);
// console.log(balance.toFixed(1));

// const otherNumber=23.8966
// console.log(otherNumber.toPrecision(2));

// const hundreds=1000000
// console.log(hundreds.toLocaleString('en-IN'));


//++++++++     MATHS     ++++++++++
// console.log(Math.PI);
// console.log(Math.E);

// console.log(Math.round(4.6));
// console.log(Math.ceil(4.2));
// console.log(Math.floor(4.9));

// console.log(Math.sqrt(16));
// console.log(Math.pow(2,5));

// console.log(Math.min(2,5,1,6,3));
// console.log(Math.max(2,5,1,6,3));

// console.log(Math.random());
// console.log(Math.floor(Math.random()*10)+1);


console.log(Math.random());//range 0 to 1.
console.log((Math.random()*10)+1);
console.log((Math.floor(Math.random()*10)+1));

const min=10
const max=20
//important line to remember
console.log(Math.floor(Math.random()*(max-min+1))+min);