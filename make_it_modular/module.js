const fs = require('fs');
const path = require('path');

module.exports = function (dir, extFilter, callbackFn) {
	fs.readdir(dir, (err, files) => {
		if (err) {
			return callbackFn(err);
		}

		filteredFiles = files.filter( file => path.extname(file) === '.'+extFilter);
		return callbackFn(null, filteredFiles);

	})
}
