import React, {ChangeEvent} from "react";
import "./join.css";
import {Link} from "react-router-dom";

interface Imessage {
    name: string;
    room: string;
}

const Join = () => {
    const [data, setData] = React.useState<Imessage>({name: "", room: ""});
    const chatJoinHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
        setData({...data, [event.target.name]: event.target.value});
    }
    return (
        <div className="container">
            <h1>Join Chat</h1>
            <div className="form-conatainer">
                <input
                    type="text"
                    placeholder="name"
                    name="name"
                    onChange={(event: ChangeEvent<HTMLInputElement>) => chatJoinHandler(event)}
                    value={data.name}
                />
                <input
                    type="text"
                    placeholder="room"
                    name="room"
                    onChange={(event: ChangeEvent<HTMLInputElement>) => chatJoinHandler(event)}
                    value={data.room}
                />
                <Link onClick={(event) => (
                    !data.name || !data.room ? event.preventDefault() : null
                )}
                      to={`/chat?name=${data.name}&room=${data.room}`}>
                    <button className="btn primry small">Join</button>
                </Link>

            </div>

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