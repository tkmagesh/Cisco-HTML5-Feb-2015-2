function doWork(){
	for(var i=0; i<10000;i++)
		for(var j=0; j<10000;j++)
			for(var k=0; k<100; k++){

			}
}

self.addEventListener("message", onMessageFromMain);
function onMessageFromMain(msgArg){
	if (msgArg.data === "start"){
		doWork();
		self.postMessage("done");
	} else {
		console.log("unknown message received");
	}
}