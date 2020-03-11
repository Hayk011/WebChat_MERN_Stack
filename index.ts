// import express, { Application} from "express";
// const app: Application = express();
// const PORT: string | number = process.env.PORT || 8080;
//
// app.listen(PORT, () => {
//     console.log(`server started in port  ${PORT}`);
// });
import WebSocket from "ws"

const server = new WebSocket.Server({port: 8080});
server.on("connection", (ws: WebSocket) => {
    ws.on("message", (message: string) => {
        let checkMesage = JSON.parse(message);
        if (checkMesage.message == "exit") {
            ws.send("user leave chat");
            ws.close();
        } else {
            server.clients.forEach((client: WebSocket) => {
                if (client.readyState === WebSocket.OPEN) {
                    client.send(message);
                }
            });
        }
    });
});