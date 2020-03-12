import React from "react";
import ChatMessage from "./chatMessage";

interface Imessage {
    name: string;
    message: string;
}

const Join = () => {
    const ws = new WebSocket("ws://localhost:8080/");

    return (
        <div className="container">
            <div className="form-conatainer">
                
            </div>
            <button className="btn primry">Send message</button>
        </div>
    )
}
export default Join;


// const [data, setData] = React.useState<Imessage>({
//     name: "",
//     message: ""
// })
// const [isSend, setIsSend] = React.useState<boolean>(false);
// const [messageArr, setMessageArr] = React.useState<Imessage[]>([]);
// const changeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
//     setData({...data, [event.target.name]: event.target.value});
// };
// React.useEffect(() => {
//     ws.onopen = () => {
//         console.log("conection");
//     };
//     ws.onmessage = (evt: MessageEvent) => {
//         const message = JSON.parse(evt.data);
//         setMessageArr([...messageArr, message]);
//     };
//     ws.onclose = () => {
//         console.log("disconected");
//     }
// }, [isSend]);
// const sendHandler = () => {
//     const message = data;
//     ws.send(JSON.stringify(message));
//     setMessageArr([...messageArr, message]);
//     setData({
//         name: data.name,
//         message: ""
//     });
//     setIsSend(!isSend);
// };