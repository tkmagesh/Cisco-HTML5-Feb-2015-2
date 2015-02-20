var nodeJsWebSocket = require("nodejs-websocket");
var socketServer = nodeJsWebSocket.createServer(function(connection){
	console.log("A new connection is established");
	connection.on("text", function(msg){
		for(var i=0; i<socketServer.connections.length; i++){
			var clientConnection = socketServer.connections[i];
			if (clientConnection !== connection)
				clientConnection.sendText(msg);
		}
	});
});
socketServer.listen(9090);
console.log("web socket server listening on port 9090");