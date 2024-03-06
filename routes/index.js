var express = require('express');
var router = express.Router();
const messages = [
  {
    text: "Hi there!",
    user: "Amando",
    added: new Date()
  },
  {
    text: "Hello World!",
    user: "Charles",
    added: new Date()
  }
];
/* GET home page. */
// eslint-disable-next-line no-unused-vars
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' , messages : messages });
});

// eslint-disable-next-line no-unused-vars
router.post('/new' , function(req , res , next){
    
  const data = req.body;


  messages.push({text : data.message , user:data.author , added : new Date()});


  res.redirect('/');
});

module.exports = router;
