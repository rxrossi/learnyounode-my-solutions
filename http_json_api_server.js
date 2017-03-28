const http = require('http');
const url  = require('url');

const listeningPort = process.argv[2];

const server = http.createServer( (req, res) => {

	const { pathname, query } = url.parse(req.url, true);

	const time = new Date(query.iso);

  const answer = ( (pathname, time) => {
		switch(pathname) {
			case '/api/parsetime':
				return {
					"hour": time.getHours(),
					"minute": time.getMinutes(),
					"second": time.getSeconds()
				};
			case '/api/unixtime':
				return {
					"unixtime": time.getTime()
				};
			default:
				return {};
		}
	})(pathname, time);

	res.writeHead(200, {'Content-Type': 'application/json'});
	res.end(JSON.stringify(answer));
});

server.listen(listeningPort);
