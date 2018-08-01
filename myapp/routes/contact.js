var express = require('express');
var router = express.Router();

/* GET contact form. */
router.get('/', function(req, res, next) {
  res.render('contact', { title:'AGLIST',
                          titlecontact: 'CONTACT US'

  });
});

module.exports = router;
