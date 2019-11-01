var express = require('express');
var fs = require('fs');
var router = express.Router();

var fileName = './controller/test.txt';

/* GET home page. */
router.get('/', function (req, res) {
  res.render('index', {fileName: 'fileName', lines: readLastLines(fileName, 2)});
});

router.get('/read', function (req, res) {
  var n = req.query ? req.query.n || 10 : 10;
  res.render('index', {fileName: 'fileName', lines: readLastLines(fileName, n)});
});

module.exports = router;


var readLastLines = function (filename, lineNo) {
  lineNo = lineNo || 10;
  var data = fs.readFileSync(filename, 'utf8'), lines = data.split("\n"), tailLines = [];
  var n = (lines.length - lineNo) > 0 ? (lines.length - lineNo) : 0;
  for (; (n < lines.length); n++)
    tailLines.push(lines[n]);
  return tailLines;
};

//
// fs.watchFile(fileName, {interval: 100}, function () {
//   readLastLines(fileName, 40);
// });