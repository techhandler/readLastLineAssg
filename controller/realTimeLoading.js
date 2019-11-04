const fs = require('fs');
const file = './controller/test.txt';

const readLastLines = function (filename, lineNo) {
  lineNo = lineNo || 10;
  let data = fs.readFileSync(filename, 'utf8'), lines = data.split("\n"), tailLines = [];
  let n = (lines.length - lineNo) > 0 ? (lines.length - lineNo) : 0;
  for (; (n < lines.length); n++)
    tailLines.push(lines[n]);
  return tailLines;
};

module.exports = function (socket, io) {
  socket.emit('file-changed', readLastLines(file, 10));
  fs.watchFile(file, {interval: 100}, function () {
    socket.emit('file-changed', readLastLines(file, 10));
  });
}