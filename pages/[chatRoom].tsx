import { NextPage } from "next";
import Header from "../components/header";
import { useEffect, useState } from "react";
import { setupSocket, sendMessage, chatInit } from "../utils/socket";
import { useRouter } from "next/router";

const ChatRoom: NextPage = () => {
    const [messageList, setMessageList] = useState<string[]>([]);
    const [message, setMessage] = useState<string>("");
    const router = useRouter()
    const chatRoom = router.query.chatRoom as string;
    useEffect(() => {
        setupSocket(chatRoom);
        chatInit(setMessageList);
    }, [chatRoom]);
    return(
        <>
            <Header title={'チャット'}/>
            <textarea value={message} onChange={(event) => setMessage(event.target.value)}></textarea>
            <button onClick={() => {
                sendMessage(chatRoom, message)
                setMessage("")
            }}>
                送信
            </button>
            {messageList.map((message, i) => (
                <p key={i}>{message}</p>
            ))}
        </>
    )
}

export default ChatRoom