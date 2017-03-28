const http = require('http');
const fs 	 = require('fs');

const listenPort = process.argv[2];
const filePath 	 = process.argv[3];

const server = http.createServer( (request, response) => {
	 let file = fs.createReadStream(filePath);
	 file.pipe(response);
});

server.listen(listenPort);

