const fs = require('fs'),
    ejs = require("ejs"),
    marked = require("marked");

const md = (filename) => {
    const path = __dirname +"/" + filename,
        include = fs.readFileSync (path, 'utf8'),
        html = marked.parse(include);

    return html;
};

const path = __dirname + "/index"

    fs.readFile(path + ".ejs", 'utf8', function (err, data) {
        if (err) {
            console.log(err);
            return false;
        }

        const ejs_string = data,
            template = ejs.compile(ejs_string),
            html = template({"md": md});

        fs.writeFile(path + '.html', html, function(err) {
            if(err) {
                console.log(err);
                return false;
            }

            return true;
        });  
    });