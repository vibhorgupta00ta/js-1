
//var c=300
// let a=300
// if(true){
//     let a=10
//     const b=20
//     console.log("Inner: ",a);
//     //var c=30
// }
//console.log(a)
//console.log(b)
//console.log(c)


function one(){
    const username="vibhor"

    function two(){
        const website="youtube"
        console.log(username);
    }
    //console.log(website);
    //two()
}
//one()

if(true){
    const username="vibhor"
    if(username==="vibhor"){
        const website="youtube"
        //console.log(`my name is ${username} and my channel is on ${website} please go and watch.`);
    }
    //console.log(website);
}
//console.log(username);



//***********************INTERESTING***********************//

function addone(num){
    return num+1;
}
console.log(addone(5));
const addTwo=function(num){
    return num+2;
}
console.log(addTwo(5));