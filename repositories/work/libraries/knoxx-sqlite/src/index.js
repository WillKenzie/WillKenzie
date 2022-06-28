const crypto = require("crypto");

exports.hash = function(information) {
return crypto.createHash("sha256").update(information).digest("hex");
}

exports.createsheet = function(sheet) {
const result = db.prepare(`SELECT name FROM sqlite_master WHERE type='table' AND name='${sheet}'`)
if (result == 1){
    console.error(`The sheet named ${sheet} already exists, please try doing store(variable, value, ${sheet}) instead!`)
    return;
}

}

exports.query = function(variable, sheet) {
    if (sheet === undefined) {
const result = db.prepare(`SELECT value FROM data WHERE variable = ?`).get(variable);
return result.value
    } else {
        const result = db.prepare(`SELECT value FROM ${sheet} WHERE variable = ?`).get(variable);
return result.value
    }
}

exports.store = function(variable, value, sheet) {
    if (sheet === undefined) {
db.prepare(`INSERT INTO data (variable, value) VALUES(?, ?);`).run(variable, value);
    } else {
        db.prepare(`INSERT INTO ${sheet} (variable, value) VALUES(?, ?);`).run(variable, value);
    }
}

exports.securestore = function(variable, value, sheet) {
realvalue = crypto.createHash("sha256").update(value).digest("hex");
if (sheet === undefined) {
db.prepare(`INSERT INTO data (variable, value) VALUES(?, ?);`).run(variable, realvalue);
} else {
    db.prepare(`INSERT INTO ${sheet} (variable, value) VALUES(?, ?);`).run(variable, value);
}
}