const path = require("path");
const basePath = path.dirname(process.mainModule.filename);
const getAbsolutePath = (filePath) => {
  return path.join(basePath, filePath);
};

module.exports = getAbsolutePath;
