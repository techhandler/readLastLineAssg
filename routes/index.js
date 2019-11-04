const express = require('express');
const router = express.Router();
const fileName = 'test.txt';

/* GET home page. */
router.get('/', function (req, res) {
  res.render('index', {fileName: fileName, lines: []});
});

module.exports = router;