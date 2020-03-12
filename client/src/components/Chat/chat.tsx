import React from "react";
import queryString from "query-string";

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
    }, [entripoint, location.search]);
    console.log(name, room)
    return (
        <div className="container">
            <h1>Choose Your Room</h1>
            <div className="room-container">
                chat
            </div>
        </div>
    )
};
export default Chat;
//chat?name=${name}&room=${room}