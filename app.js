const express = require('express');
const app = express();
const volleyball = require('volleyball');
const nunjucks = require('nunjucks');
const routes = require('./routes');



app.set('view engine', 'html')
app.engine('html', nunjucks.render)
nunjucks.configure('views', {noCache: true});



app.use((req, res, next) => {
    console.log(`Request: ${req.method} ${req.url} ${res.statusCode}`)
    next()
})

app.use("/", routes);


// app.use(volleyball)




app.listen(3000, ()=>{
    console.log('Server listening!');
})