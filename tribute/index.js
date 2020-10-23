const { response } = require('express');
const express = require('express');
const { readFile } = require('fs');
const { request } = require('http');

const app = express();

app.use(express.static('public'))
app.get('/', (request, response) => {
    readFile('./tribute.html', 'utf8', (err, html) => {
        if (err) {
            response.status(500).send('Page not found')
        }

        response.send(html)
    })
})


app.listen(process.env.PORT || 8080, () => console.log('App available on http://localhost:8080'))