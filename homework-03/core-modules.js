const fs = require('fs');
const path = require('path');

////////// path and fs
const usersPath = path.join(__dirname, 'users.txt');
fs.readFile(usersPath, (err, data) => {
  if (err) {
    console.log(err);
  }
  // console.log(data.toString());
});

const newDirpath = path.join(__dirname, 'data');
fs.mkdir(newDirpath, (err) => {
  if (err) {
    console.log(err);
  }
  console.log('folder created');
});

const newFilepath = path.join(newDirpath, 'data.txt');
fs.appendFile(newFilepath, 'new data to append with appendFile', (err) => {
  if (err) {
    console.log(err);
  }
  console.log('new data added to file');
});

const copyPath = path.join(__dirname, 'copies', 'data-copy.txt');
fs.copyFile(newFilepath, copyPath, (err) => {
  if (err) {
    console.log(err);
  }
  console.log(`data.txt copied to ${copyPath} `);
});

//
// fs.unlink(newFilepath, (err) => {
//   if (err) {
//     console.log(err);
//   }

//   console.log(`${newFilepath} removed`);
// });

///////// path

// console.log(path.dirname(newFilepath));

const fileExtension = path.extname('index.html');
// console.log(fileExtension);

console.log(path.parse('/copies/data-copy.txt'));

console.log(path.resolve('images', 'image1.jpg'));
console.log(path.resolve('/images', 'image2.jpg'));
