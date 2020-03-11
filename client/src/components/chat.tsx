import React from "react";

const rooms = [
    {
        id: 1,
        name: "React",

    },
    {
        id: 2,
        name: "Angular",

    },
    {
        id: 3,
        name: "Node",

    }
]
const Chat = () => {

    return (
        <div className="container">
            <h1>Choose Your Room</h1>
            <div className="room-container">
                <ul>
                    {rooms.map((room: any) => (
                        <li key={room.id}>{room.name}</li>
                    ))}
                </ul>
            </div>
        </div>
    )
};
export default Chat;