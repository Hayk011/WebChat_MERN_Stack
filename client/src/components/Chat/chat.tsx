import React from "react";
import queryString from "query-string";
import io from "socket.io-client";
import {Socket} from "socket.io";
import "./chat.css";

let socket: Socket | any;

interface Imessage {
    name: string;
    text: string;

}

const Chat = ({location}: any) => {
    const [name, setName] = React.useState<any>("");
    const [room, setRoom] = React.useState<any>("");
    const [message, setMessage] = React.useState<string>("");
    const [messages, setMessages] = React.useState<Imessage[]>([]);
    const ENDPOINT = "localhost:5000"
    const entripoint: string = `ws://localhost:5080`
    React.useEffect(() => {

        const {name, room} = queryString.parse(location.search);
        setName(name);
        setRoom(room);
        socket = io(ENDPOINT);

        socket.emit("join", {name, room}, () => {

        });

        return () => {
            socket.emit("disconnect");
            socket.off();
        }
    }, [entripoint, location.search]);

    React.useEffect(() => {
        socket.on("message", (message: Imessage) => {
            setMessages([...messages, message])
        })
    }, [message]);

    const sendHandler = () => {
        if (message) {
            socket.emit("sned", message, () => setMessage(""));
        }
    };
    console.log(messages)
    return (
        <div className="container">
            <h1>Choose Your Room</h1>
            <div className="room-container">
                <ul>
                    {messages.map((mess: Imessage, index: number) => (
                        <li key = {index}>{mess.text}</li>
                    ))}
                </ul>
                <input
                    style={
                        {
                            maxWidth: "80%",
                            borderTop: "1px solid",
                            borderRight: "1px solid"
                        }
                    }
                    className="message-input"
                    type="text"
                    placeholder="message"
                    value={message}
                    onChange={(event) => setMessage(event.target.value)}
                />
                <button
                    style={{height: "45px"}}
                    className="btn primry send"
                    onClick={sendHandler}
                >
                    Send
                </button>
            </div>
        </div>
    )
};
export default Chat;
//chat?name=${name}&room=${room}