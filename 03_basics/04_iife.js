// Immediately Invoked Function Expressions (IIFE)

(function chai(){
    //named IIFE
    console.log(`DB connected`);
})();    // humne expression me change kra IIFE ke liye

//global scopeke pollution se prblm hoti hae kaii baar toh uss global scope ke variables hae ya jo bhi prblm hae use hatane ke liye humne IIFE ka use kiya...

((name)=>{
    console.log(`DB connected two ${name}`)
})('vibhor');