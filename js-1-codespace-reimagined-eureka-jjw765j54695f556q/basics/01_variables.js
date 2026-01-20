const account_Id=144553
let accountEmail="vibhorg@gmail.com"
var accountPass="12345"
accountCity="Jaipur"
let accountState;//undefined anta haee javascript agar hum value na assign kare.

//account_Id=2//not allowed
console.log(account_Id);
accountEmail="hacoad@j.com"
accountPass="121212"
accountCity="Prayagraj"
/*
prefer not to use var because issue in block scope and functional scope.
*/
console.table([accountEmail,accountPass,account_Id,accountCity])
