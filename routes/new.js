var express = require('express');
var router = express.Router();


// eslint-disable-next-line no-unused-vars
router.get('/' , function(req , res , next){
    res.render('new' , {title : 'New Form'});
});

module.exports = router;