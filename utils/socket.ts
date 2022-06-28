import { Dispatch, SetStateAction } from 'react';
import { io, Socket } from 'socket.io-client';

let socket: Socket;

 

const setupSocket = async (
    friend_ids: number[]
) => {
    
    
    socket = io("localhost:8080").connect();

    socket.emit("join", "taro", friend_ids)

    socket.on("update_hima_status", handle_hima_status) //友達の誰かが、暇状態を更新したら、実行される

};

// もしログインor暇じゃなくなったら、友達に知らせるため(友達のtop画面を更新するため)に実行
const updateStatus = (friend_ids: number[]) => {
    socket.emit("update_hima_status", friend_ids)
}


const handle_hima_status = () => {
    console.log("someone update status!!!")
    // 誰かがログインor暇じゃなくなったから、fetchしてtop画面を更新する
}


export {setupSocket, updateStatus}