var express = require('express');
var router = express.Router();

/* GET privacy policy form. */
router.get('/', function(req, res, next) {
  res.render('disclaimer', { title:'AGLIST'


  });
});

module.exports = router;
