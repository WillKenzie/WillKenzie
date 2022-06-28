const express = require('express')
const app = express()
const site = require("./config.json")
const markdown = require("markdown").markdown;
//const components = require("./components.json")

const prerender = (template) => {
    return template.replace()
}

const render = (template, data) => {
    return template.replace(/{{(.*?)}}/g, (match) => {
        return data[match.split(/{{|}}/).filter(Boolean)[0]]
    })
}

const template = (path, res) => {
    page = require(`./public/${path}.js`)
    res.send(`
  <head>
  <title>${site.title}</title>
  <meta name="title" content="${site.title}">
  <meta name="description" content="${site.description}">
  <meta name="keywords" content="${site.keywords}">
  <meta property="og:title" content="${site.title}" />
  <meta property="og:description" content="${site.description}" />
  <meta name="robots" content="index, follow">
  <meta http-equiv="Content-Type" content="text/html; charset=utf-8">
  <meta name="language" content="${site.language}">
  <link href="https://unpkg.com/tailwindcss@^2/dist/tailwind.min.css" rel="stylesheet">
</head>

<body>
  ${prerender( // Put components into the HTML
      markdown.toHTML( // Convert Markdown to HTML
        render(page.body, page.data) // Input dynamic content
    ))}
</body>
  `)
}

app.get('/', (req, res) => {
    template("index", res)
});

app.get('/:id', (req, res) => {
    template(req.params.id, res)
})

app.listen(80, () => {
    console.log(`Your app is active on port 80`)
})
