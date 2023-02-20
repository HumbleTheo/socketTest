require("dotenv").config();
const socketio = require("socket.io");
const socketServer = new socketio.Server();
const fs = require("fs");
const path = require("path");

// Tells the socket server to listen on a specifc port
socketServer.listen(process.env.PORT);

// On Connection from a user emits a message in this case (Hello Wah Gwan Jamaica)
socketServer.on("connection", function (socket) {
	socket.emit("message", "Hello Wah Gwan Jamaica");

	// Send an image file to client
	const imagePath = path.join(__dirname, "/assets/Car.jpg");
	const imageBuffer = fs.readFileSync(imagePath);
	socket.emit("image", imageBuffer.toString("base64"));
});
