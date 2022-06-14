import { NextPage } from "next";
import Header from "../components/header";
import { useEffect, useState } from "react";
import { setupSocket, sendMessage } from "../utils/socket";
import { useRouter } from "next/router";

const ChatRoom: NextPage = () => {
    const [message, setMessage] = useState<string>("");
    const router = useRouter()
    const chatRoom = router.query.chatRoom as string;
    useEffect(() => {
        setupSocket(chatRoom);
    }, [chatRoom]);
    return(
        <>
            <Header title={'チャット'}/>
            <textarea value={message} onChange={(event) => setMessage(event.target.value)}></textarea>
            <button onClick={() => {
                sendMessage(chatRoom, message)
            }}>
                送信
            </button>
            <div>chat page</div>
        </>
    )
}

export default ChatRoom