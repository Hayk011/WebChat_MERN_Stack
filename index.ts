// import express from "express";
// import * as http from "http";
import WebSocket from "ws";

// import router from './router';

// const app = express();
// const server = http.createServer(app);
const wsServer = new WebSocket.Server({port: 8080})
// app.use("/", router);


wsServer.on("connection", (ws: WebSocket) => {
    console.log("We have a new conection")
    ws.on("message", (message: WebSocket) => {
        console.log("we hav a now conection")
        wsServer.clients.forEach((client: WebSocket) => {
            if (client.readyState === WebSocket.OPEN) {
                client.send(message);
            }
        })
    })
});


// const PORT: string | number = process.env.PORT || 8080
// app.listen(PORT, () => {
//     console.log(`server has been started in port  ${PORT}`);
// });


// const app: Application = express();
// const PORT: string | number = process.env.PORT || 8080;
//
// app.listen(PORT, () => {
//     console.log(`server started in port  ${PORT}`);
// });


// const server = new WebSocket.Server({port: 8080});
// server.on("connection", (ws: WebSocket) => {
//     console.log("we have new conection")
//     ws.on("message", (message: string) => {
//         let checkMesage = JSON.parse(message);
//         if (checkMesage.message == "exit") {
//             ws.send("user leave chat");
//             ws.close();
//         } else {
//             server.clients.forEach((client: WebSocket) => {
//                 if (client.readyState === WebSocket.OPEN) {
//                     client.send(message);
//                 }
//             });
//         }
//     });
//})
;