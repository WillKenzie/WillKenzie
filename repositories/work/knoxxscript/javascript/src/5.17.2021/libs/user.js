const os = require('os')
const crypto = require('crypto')
const fs = require('fs')
const system = require('./system')
const encryption = require('./encryption')

const create = (firstName, lastName, email, password, admin) => {
    const newUser = {
        username: `${firstName}${lastName}@${os.hostname}`,
        name: firstName + " " + lastName,
        email: email,
        password: crypto.createHash('sha512').update(password).digest("hex"),
        admin: Boolean(admin)
    }
    fs.mkdirSync(system.home + newUser.username)
    fs.mkdirSync(system.home + newUser.username + "/Documents")
    fs.mkdirSync(system.home + newUser.username + "/Pictures")
    fs.mkdirSync(system.home + newUser.username + "/Music")
    fs.mkdirSync(system.home + newUser.username + "/Video")
}
const auth = (username, password) => {
    const users = require(system.home + '/users.json')
    if (crypto.createHash('sha512').update(password).digest("hex") == users.password) {
        return true;
    } else {
        return false;
    }
}

const fingerprint = (user) => {
    return encryption.generateFingerprint() + user.firstName + user.lastName + user.email + user.username
}

module.exports = {create, auth, fingerprint}