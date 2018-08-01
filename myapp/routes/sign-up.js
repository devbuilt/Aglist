var express = require('express');
var router = express.Router();

/* GET contact form. */
router.get('/', function(req, res, next) {
  res.render('sign-up', { titleSignup:'AGLIST',
                          h1signup: 'LIST YOUR BUSINESS',

  });
});

module.exports = router;
