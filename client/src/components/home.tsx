import React from "react";
import ChatMessage from "./chatMessage";

interface Imessage {
    name: string;
    message: string;
}

const Home = () => {
    const ws = new WebSocket("ws://localhost:8080/");
    const [data, setData] = React.useState<Imessage>({
        name: "",
        message: ""
    })
    const [isSend, setIsSend] = React.useState<boolean>(false);
    const [messageArr, setMessageArr] = React.useState<Imessage[]>([]);
    const changeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
        setData({...data, [event.target.name]: event.target.value});
    };
    React.useEffect(() => {
        ws.onopen = () => {
            console.log("conection");
        };
        ws.onmessage = (evt: MessageEvent) => {
            const message = JSON.parse(evt.data);
            setMessageArr([...messageArr, message]);
        };
        ws.onclose = () => {
            console.log("disconected");
        }
    }, [isSend]);
    const sendHandler = () => {
        const message = data;
        ws.send(JSON.stringify(message));
        setMessageArr([...messageArr, message]);
        setData({
            name: data.name,
            message: ""
        });
        setIsSend(!isSend);
    };
    return (
        <div className="container">
            <div className="form-conatainer">
                <input
                    type="text"
                    name="name"
                    placeholder="name"
                    value={data.name}
                    onChange={(event: React.ChangeEvent<HTMLInputElement>) => changeHandler(event)}
                />
                <input
                    type="text"
                    name="message"
                    placeholder="Message"
                    value={data.message}
                    onChange={(event: React.ChangeEvent<HTMLInputElement>) => changeHandler(event)}
                />
                <ul>
                    {messageArr.map((chat: Imessage, index: number) => (
                        <ChatMessage
                            key={index}
                            name={chat.name}
                            message={chat.message}
                        />
                    ))}
                </ul>
            </div>
            <button className="btn primry" onClick={sendHandler}>Send message</button>
        </div>
    )
}
export default Home;