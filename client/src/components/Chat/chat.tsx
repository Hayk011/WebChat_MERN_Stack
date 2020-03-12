import React from "react";
import queryString from "query-string";
import "./chat.css";

const Chat = ({location}: any) => {
    const [name, setName] = React.useState<any>("");
    const [room, setRoom] = React.useState<any>("");

    const entripoint: string = `ws://localhost:8080`

    const ws = new WebSocket(entripoint);
    React.useEffect(() => {
        const {name, room} = queryString.parse(location.search);
        setName(name);
        setRoom(room);
        ws.onopen = () => {
            console.log("conection")
        }
        return () => {
            ws.onclose = () => {
                console.log("disconect");
            }
        }
    }, [entripoint, location.search]);
    return (
        <div className="container">
            <h1>Choose Your Room</h1>
            <div className="room-container">
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
                />
                <button style={{height: "45px"}} className="btn primry send">Send</button>
            </div>
        </div>
    )
};
export default Chat;
//chat?name=${name}&room=${room}