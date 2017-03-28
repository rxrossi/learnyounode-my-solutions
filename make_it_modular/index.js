const filterModule = require('./module.js');

const dir 					= process.argv[2];
const fileExtension = process.argv[3];

filterModule(dir, fileExtension, (err, list) => {
	if (err) {
		return console.error(err);
	}
	list.forEach( file => console.log(file));

});
