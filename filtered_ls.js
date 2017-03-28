const fs = require('fs');
const path = require('path');

fs.readdir(process.argv[2], (err, files) => {
		const filteredFiles = files.filter( file => path.extname(file) === `.${process.argv[3]}` );
		filteredFiles.forEach( file => console.log(file));
});
