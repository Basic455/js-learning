const accountId = 14435
let accountEmail = "gg@google.com"
var accountPassword = "12345"
accountCity = "delhi"

accountCity = "Jaipur"
accountEmail = "ss@gmail.com"
accountPassword = "54321"
console.log(accountCity);

/*
prefer not to use var
because of issue in block scope and functional scope

*/

console.table([accountId, accountEmail, accountPassword, accountCity])

