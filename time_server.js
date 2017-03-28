const net = require('net');

const port = process.argv[2];


const server = net.createServer(
	function listener(socket) {
		const date = new Date();
		const dateStr = `${date.getFullYear()}-${pad(date.getMonth()+1)}-${pad(date.getDate())}`
					  + ` ${pad(date.getHours())}:${pad(date.getMinutes())}`
						+ '\n';
		socket.end(dateStr);

		function pad(number) {
			return number <= 9 ? `0${number}` : number;
		}
	}

);

server.listen(port);
