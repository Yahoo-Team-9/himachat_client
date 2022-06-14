import { io, Socket } from 'socket.io-client';

let socket: Socket;
let chatMessages: string[] = [];

const setupSocket = async (
    chatRoom: string
) => {
    socket = io("localhost:8080").connect();
    socket.emit("join", {"username": "taro", "room": chatRoom})

    socket.on("message", handleMessage);
};

const handleMessage = (message: string) => {
    console.log(message)
}

const sendMessage = (chatRoom: string, message: string) => {
    
    socket.emit("message", chatRoom, message)
}


export {setupSocket, sendMessage}