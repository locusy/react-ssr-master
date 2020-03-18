const express = require('express')
const app = express();

app.get('/', function(req, res) {
    res.send(
        `<html>
            <head><link rel="shortcut icon" href="#" /></head>
            <body>
                fires
            </body>
        </html> `
    )
})

app.listen(2000, () => {
    console.log('server is listening at port 2000...')
})

