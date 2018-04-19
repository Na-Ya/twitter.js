const express = require('express');
const router = express.Router();
// could use one line instead: const router = require('express').Router();
const tweetBank = require('../tweetBank.js');

router.get('/', function (req, res) {
  let tweets = tweetBank.list();
  res.render( 'index', { tweets: tweets } );
});

router.get('/stylesheets/style.css', (req, res) => {
    res.sendFile('./stylesheets/style.css')
})
router.get('/tweets', );

router.post('/tweets', (req, res) => {
    
})



module.exports = router;