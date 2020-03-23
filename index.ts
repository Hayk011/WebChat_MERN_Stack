import express from "express";
import http from "http";
import {Socket} from "socket.io";
import HomePage from "./router"
import {addUser, getUser, remuveUser, getUserRoom} from "./helper";

const socketio = require("socket.io");

const PORT = process.env.PORT || 5000

const app = express();
const server = http.createServer(app);
app.use(HomePage)
const io = socketio(server);

io.on("connection", (socket: Socket) => {
    socket.on("join", ({name, room}, errorHandler) => {
        const {error, user} = addUser(socket.id, name, room);
        if (error) {
            errorHandler(error)
        } else {
            socket.emit("message", {user: "Admin", text: `${user.name} join in chat room ${user.room}`});
            socket.broadcast.to(user.room).emit("message", {user: "Admin", text: "join"});
            socket.join(user.room);
            errorHandler();
        }
        socket.on("sned", (message: Socket, collback: () => void) => {
            console.log(message)
            const user = getUser(socket.id);
            io.to(user.room).emit("message", {user: user.name, text: message});
            collback();

        });
    });
    socket.on("disconnect", () => {
        console.log("User had leaft");
    })
});

server.listen(PORT, () => {
    console.log(`Server has stating on port ${PORT}`)
});
