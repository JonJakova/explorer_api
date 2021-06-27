const fs = require("fs");

const basic_options = {
  root: path.join(__dirname, 'public'),
  dotfiles: 'deny',
  headers: {
    'x-timestamp': Date.now(),
    'x-sent': true
  }
}

const createDir = (path, dir) => {
  fs.mkdir(path + dir, (err) => {
    if (err) { throw err; };
  })
}


exports.createDir = createDir;