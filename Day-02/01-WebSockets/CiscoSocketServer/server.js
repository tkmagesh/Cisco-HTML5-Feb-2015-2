var nodeJsWebSocket = require("nodejs-websocket");
var socketServer = nodeJsWebSocket.createServer(function(connection){
	console.log("A new connection is established");
	setTimeout(function(){
		connection.sendText("Current time at the server is " + new Date().toString());
	},10000)
});
socketServer.listen(9090);
console.log("web socket server listening on port 9090");