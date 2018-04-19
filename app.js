const express = require('express');
const app = express();
const volleyball = require('volleyball');
const nunjucks = require('nunjucks');
const routes = require('./routes');
const fs = require('fs');
const path = require('path');
const mime = require('mime')


app.set('view engine', 'html')
app.engine('html', nunjucks.render)
nunjucks.configure('views', {noCache: true});

//allows user on front end to access a file in the public directory
const statisMiddle = express.static(`${__dirname}/public`);
app.use(statisMiddle)

// manual 
// app.use((req, res, next) => {
//     let mimeType = mime.lookup(req.path);
//     fs.readFile('./public' + req.path, function (err, fileBuffer) {
//         if (err){
//             return next();
//         }
//         res.header('Content-Type', mimeType)
//         res.send(fileBuffer)
//     })
// })



app.use((req, res, next) => {
    console.log(`Request: ${req.method} ${req.url} ${res.statusCode}`)
    next()
})

app.use("/", routes);


// app.use(volleyball)




app.listen(3000, ()=>{
    console.log('Server listening!');
})