const accountId = 144553
let accountEmail ="mohit.xyz@gamail.com"
var accountPassword = "12345"
accountcity = "Jaipur"
let accountState;



// accountId = 2  // Const are not allowed to change


accountEmail = "tarun.xyz@gmail.com"
accountPassword = "212121"
accountcity = "Bangaluru"



/* var are used in previous versions 
   and beacuse of issue in block scope 
   and funstional scope ....so we use let 
   instead of var.
*/


console.log(accountId);

console.table([accountId , accountEmail , accountPassword , accountcity , accountState])