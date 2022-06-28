const os = require('os')
// System Information and APIs

// OS Updates and Versions
const version = 'v1.0b-5'
const build = '2021-5-17-1044'
const updateServer = null
const update = () => {
    if (!updateServer) {
        return("Updates are disabled on this build!")
    }
    console.log(fetch(updateServer))
}

// System Resources
const ram = {total:os.totalmem().toString(), free:os.freemem().toString(), used:(parseInt(os.totalmem()) - parseInt(os.freemem())).toString()}
const cpu = {name:os.cpus()[0].model, speed:os.cpus()[0].speed, arch:os.arch(), load:os.loadavg()}
const uptime = os.uptime()
const initUser = {uid:os.userInfo.uid, username:os.userInfo.username}
const tmp = os.tmpdir()
const home = (os.homedir + '/knoxx/')

// Exports
module.exports = {version, build, update, ram, cpu, uptime, initUser, tmp, home}