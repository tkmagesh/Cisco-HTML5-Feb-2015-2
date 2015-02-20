var nodeJsWebSocket = require("nodejs-websocket");
var socketServer = nodeJsWebSocket.createServer(function(connection){
	console.log("A new connection is established");
	connection.on("close", function(){
		console.log("connection closed");
	});
	connection.on("error", function(err){
		console.log(err);
	});
	connection.on("text", function(msg){
		for(var i=0; i<socketServer.connections.length; i++){
			var clientConnection = socketServer.connections[i];
			if (clientConnection !== connection && clientConnection.readyState === clientConnection.OPEN)
				clientConnection.sendText(msg);
		}
	});
});
socketServer.listen(9090);
console.log("web socket server listening on port 9090");