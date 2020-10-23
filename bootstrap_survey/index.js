const { request, response } = require('express')
const express = require('express')
const { readFile } = require('fs');

const app = express()

app.get('/', (request, response) => {
    readFile('./survey.html', 'utf8', (err, html) => {
        if (err) {
            response.status(500)
        }

        response.send(html)
    })
})


app.listen(process.env.PORT || 8080, () => console.log('App Available on port http://localhost:8080'))