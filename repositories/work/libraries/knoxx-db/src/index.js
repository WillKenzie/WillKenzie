'use strict';
const fs = require('fs')
const http = require('http');
const ReplaceStream = require('replacestream');

function arrayAverage(arr) {
    //Find the sum
    var sum = 0;
    for (var i in arr) {
        sum += arr[i];
    }
    //Get the length of the array
    var numbersCnt = arr.length;
    //Return the average / mean.
    return (sum / numbersCnt);
}

function arrayTotal(arr) {
    //Find the sum
    var sum = 0;
    for (var i in arr) {
        sum += arr[i];
    }
    //Return the total
    return (sum);
}

const read = query => {
    return new Promise(resolve => {
        const newReadStream = fs.createReadStream('database.db')
        newReadStream.on("data", data => {
            newReadStream.pause()
            const chunk = data.toString()
            if (chunk.startsWith(query)) {
                resolve(chunk)
                newReadStream.close()
            } else newReadStream.resume()
        })
    })
}

const write = query => {
    if (typeof query === "object") {
        for (const property in query) {
            fs.appendFileSync('database.db', query[property] + ",")
        }
        fs.appendFileSync('database.db', "\n")
    } else
        if (typeof query === "string") {
            fs.appendFileSync('database.db', query + '\n')
        }
    return;
}

const update = async (query, toPlace) => {
    const toRemove = await read(query)
    fs.createReadStream('database.db')
    .pipe(ReplaceStream(toRemove, toPlace))
    .unpipe(fs.createWriteStream('database.db'))
}

const remove = query => {
    fs.createReadStream('database.db').on("data", data => {
        if (!data.toString().startsWith(query)) {
            fs.createWriteStream().write(data.toString()).pipe(close())
        }
    })
}

async function test() {
    fs.writeFileSync('./database.db', "")
    var allTimes = new Object()

    console.log("Starting Write Test")
    var times = []
    for (i = 0; i < 10000; i++) {
        const startTime = new Date()
        await write(["Notnull", "defined"])
        const endTime = new Date()
        times.push(endTime - startTime)
    }
    console.log("Average: " + arrayAverage(times) + "ms")
    console.log("Total: " + arrayTotal(times) + "ms")
    allTimes.write = arrayAverage(times)

    console.log("Starting Read Test")
    var times = []
    for (i = 0; i < 10000; i++) {
        const startTime = new Date()
        await read("Notnull")
        const endTime = new Date()
        times.push(endTime - startTime)
    }
    console.log("Average: " + arrayAverage(times) + "ms")
    console.log("Total: " + arrayTotal(times) + "ms")
    allTimes.read = arrayAverage(times)

    console.log("Starting Update Test")
    var times = []
    for (var i = 0; i < 10000; i++) {
        const startTime = new Date()
        await update("Notnull", "null,undefined")
        const endTime = new Date()
        times.push(endTime - startTime)
    }
    console.log("Average: " + arrayAverage(times) + "ms")
    console.log("Total: " + arrayTotal(times) + "ms")
    allTimes.update = arrayAverage(times)
}

test()

const server = http.createServer();

server.on("request", (req, res) => {
    console.log(req.method)
    req.on('data', async function (data) {
        console.log(data.toString());
        if (req.method == 'GET') {
            const send = await read(data.toString())
            if (send) {
                await res.write(send.toString());
                res.end()
            } else {
                res.end()
            }

        }
        if (req.method == 'POST') {
            await write(data.toString())
            res.end()

        }
        if (req.method == 'PUT') {
            const request = JSON.parse(data.toString())
            await update(request.old, request.new)
            res.end()

        }
        if (req.method == 'DELETE') {
            await remove(data.toString())
            res.end()

        }

    });
})

server.listen(8080);