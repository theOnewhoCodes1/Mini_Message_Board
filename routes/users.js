var express = require('express');
var router = express.Router();

/* GET users listing. */
// eslint-disable-next-line no-unused-vars
router.get('/', function(req, res, next) {
  res.send('Usersssss');
});
// eslint-disable-next-line no-unused-vars
router.get('/about', function(req, res, next) {
  res.send('from users to about');
});
module.exports = router;
