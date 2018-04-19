const express = require('express');
const app = express();
const volleyball = require('volleyball')

app.use((req, res, next) => {
    console.log(`Request: ${req.method} ${req.url} ${res.statusCode}`)
    next()
})
app.use('/special/',(req, res, next) => {
    console.log('You reached special zone!')
    next()
})

// app.use(volleyball)


app.get('/', (req, res) => {
    res.send('Welcome to our page!')
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