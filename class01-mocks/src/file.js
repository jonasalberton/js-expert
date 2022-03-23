const { readFile } = require('fs/promises');
const { join } = require('path');

class File {
  static async csvToJson(filePath) {
    return File.getFileContent(filePath);
  }

  static async getFileContent(filePath) {
    const fileName = join(__dirname, filePath);
    return (await readFile(fileName)).toString("utf8");
  }
}


(async () => {
  const result = await File.csvToJson('../mocks/threeItens-valid.csv');
  console.log('result', result);
})();