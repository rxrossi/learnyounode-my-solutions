const http = require('http');

http.get(process.argv[2], (response) => {
	response.setEncoding('utf8');
	let rawData = '';
	response.on('data', (chunck) =>	rawData += chunck );
	response.on('end', () => {
		console.log(rawData.length);
		console.log(rawData);
	});
});
