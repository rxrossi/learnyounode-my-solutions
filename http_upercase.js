const http = require('http');
const map  = require('through2-map');

const listeningPort = process.argv[2];

const server = http.createServer( (req, res) => {
	let input = '';
	req.on('data', data => {
		input = data.toString().toUpperCase();
		res.write(input);
	}).on('end', () => {
		res.end();
	})

});

server.listen(listeningPort);
