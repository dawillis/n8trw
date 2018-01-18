'use strict';

const fs = require('fs');
const filename = process.argv[2];
if (!filename) {
    throw Error('A file to watch must be specified!');
}

if (!fs.existsSync(filename)) {
    console.log(`File ${filename} does not exist`);
} else {
    fs.watch(filename, () => console.log(`File ${filename} changed!`));
    console.log(`Now watching ${filename} for changes...`);
}