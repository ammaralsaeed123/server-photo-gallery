let http = require('http');
let aan = require('./index')
let server = http.createServer(aan);
server.listen(3000 , '127.0.0.6' , ()=>{
	console.log("ammar run .....!!")
})