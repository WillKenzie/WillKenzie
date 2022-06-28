const system = require('./libs/system')
const encrypt = require('./libs/encryption')
const user = require('./libs/user')

async function main() {
    console.log(user.fingerprint({firstName: "william", lastName: "kenzie", email:"william.kenzie@mailfence.com", username:"williamkenzie@localhost"}))
}
main()