const path = require("path");
const rimraf = require("rimraf");
const fs = require("fs");

function getuid() {
    var s = [];
    var hexDigits = "0123456789abcdef";
    for (var i = 0; i < 36; i++) {
        s[i] = hexDigits.substr(Math.floor(Math.random() * 0x10), 1);
    }
    s[14] = "4"; // bits 12-15 of the time_hi_and_version field to 0010
    s[19] = hexDigits.substr((s[19] & 0x3) | 0x8, 1); // bits 6-7 of the clock_seq_hi_and_reserved to 01
    s[8] = s[13] = s[18] = s[23] = "-";

    var uuid = s.join("");
    return uuid;
}




const isForderExist = function (reaPath) {
  const absPath = path.resolve(__dirname, reaPath);
  return new Promise((resolve, reject) => {
    fs.stat(absPath, function (err, stats) {
      err ? resolve(false) : resolve(!!stats);
    });
  });
};

const deleteAll = function (path) {
  return new Promise((resolve, reject) => {
    rimraf(path, (err) => {

      if (err) {
        console.log(err);
        resolve({
          status: false,
          error: err
        });
      } else {
        resolve({
          status: true,
          error: null
        });
      }
    });
  });
};



const writeFileSync = function (filePath, data, options) {
  fs.writeFileSync(filePath, data, options);
};

const readFileSync = function (filePath, data, options) {
    return fs.readFileSync(filePath);
 }

const mkdirSync = function (dirPath) {
  fs.mkdirSync(dirPath);
};

/**
 * 文件遍历方法
 * @param filePath 需要遍历的文件路径
 */
function getAllFiles(filePath, res = []) {
  const files = fs.readdirSync(filePath);

  //遍历读取到的文件列表
  files.forEach(function (filename) {
    let subFilePath = path.join(filePath, filename);
    const stats = fs.statSync(subFilePath);
    if (stats.isFile()) {
      res.push(subFilePath);
    } else {
      getAllFiles(subFilePath, res);
    }
  });

  return res;
}




module.exports = {
    getuid,mkdirSync,writeFileSync,deleteAll,isForderExist,readFileSync,getAllFiles
};