import React from "react";

interface Iprops {
    name: string;
    message: string
}

const ChatMessage = (props: Iprops) => {
    return (
        <li> {`${props.name}:  ${props.message}`}</li>
    )
};
export default ChatMessage;