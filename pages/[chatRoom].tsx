import { NextPage } from "next";
import Header from "../components/header";
import { useEffect, useState } from "react";
import { setupSocket, updateStatus} from "../utils/socket";
import { useRouter } from "next/router";

// Chat機能はなくなかったが、socket用のデバックコードとして使用
const ChatRoom: NextPage = () => {
    const [messageList, setMessageList] = useState<string[]>([]);
    const [message, setMessage] = useState<string>("");
    const router = useRouter()
    const chatRoom = router.query.chatRoom as string;

    let friend_ids: number[] = [] //ログインしたor暇じゃなくなったことを知らせたい友達. friendテーブルのfriend_idをroomのidとして使用

    //以下デバッグ用
    if(chatRoom == "1"){
        friend_ids = [1]
    }
    else if (chatRoom == "2"){
        friend_ids = [2]
    }
    else if (chatRoom == "3"){
        friend_ids = [3]
    }
    else if (chatRoom == "4"){
        friend_ids = [1,2]
    }

    useEffect(() => {
        if (friend_ids.length != 0){
            setupSocket(friend_ids);
        }
    }, [friend_ids]);
    return(
        <>
            <Header title={'チャット'}/>
            <textarea value={message} onChange={(event) => setMessage(event.target.value)}></textarea>
            <button onClick={() => {
                updateStatus(friend_ids)
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