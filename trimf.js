const fs = require('fs');

const scriptPath = process.argv[1];
const fileName = process.argv[2];

if (fs.existsSync(fileName)) {
  fs.unlinkSync(fileName);
  console.log(`${fileName} file deleted`);
} else {
  if (fileName === 'foo') {
    console.log(`foo file exists`);
  } else {
    console.log(`${fileName} file does not exist`);
  }
}
