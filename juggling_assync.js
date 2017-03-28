const http = require('http');

const urls = [process.argv[2], process.argv[3], process.argv[4]];

let responses = [];

getData(urls, printResponses);

function getData (urls, callbackFn) {

	let countHttpGetSuccess = 0;

	urls.forEach( (url, index) => {
		getSingleResponse(url, index);
	});

	function getSingleResponse (url, index) {
		http.get(urls[index], response => {

			response.setEncoding('utf8');
			let string= '';

			response.on('data', chunck => {
				string+= chunck;
			});

			response.on('end', () => {
				responses[index] = string;
				countHttpGetSuccess += 1;
				callbackFn(responses, countHttpGetSuccess, urls.length)
			});

		});
	}
}

function printResponses (responses, curCount, total) {
	if (curCount === total) {
		responses.forEach( line => console.log(line));
	}
}
