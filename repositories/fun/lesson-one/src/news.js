const fetch = require("node-fetch")

try {
    fetch("https://api.spaceflightnewsapi.net/v3/articles")
        .then(res => res.text())
        .then(text => {
            const result = JSON.parse(text)
            for (article of result) {
                console.log(`${article.title} \n ${article.summary} \n \n`)
            }
        });
} catch {
    console.log("Couldn't contact the news API")
}

/* https://developer.mozilla.org/en-US/ */