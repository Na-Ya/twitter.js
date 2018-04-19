const express = require('express');
const app = express();
const volleyball = require('volleyball');
const nunjucks = require('nunjucks');


app.set('view engine', 'html')
app.engine('html', nunjucks.render)
nunjucks.configure('views', {noCache: true});


app.use((req, res, next) => {
    console.log(`Request: ${req.method} ${req.url} ${res.statusCode}`)
    next()
})

app.use('/special/',(req, res, next) => {
    console.log('You reached special zone!')
    next()
})
const localVariables = {
    title : 'Welcome Page',
    people : [
        {name: 'Billy'},
        {name: 'Johnny'},
        {name: 'Non-American Name'}
    ]
};

// app.use(volleyball)

app.get('/', (req, res) => {
    res.render('index', {title: localVariables.title, people: localVariables.people})
})
app.get('/news', (req, res) => {
    res.send('Check out the news')
})

app.get('/special', (req, res) => {
    res.send('Check out the specials')
})
app.get('/special/weird', (req, res) => {
    res.send('Check out the WEIRD specials')
})



app.listen(3000, ()=>{
    console.log('Server listening!');
})