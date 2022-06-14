import { Dispatch, SetStateAction } from 'react';
import { io, Socket } from 'socket.io-client';

let socket: Socket;
let chatMessages: string[] = [];
let setChatMessages: Dispatch<SetStateAction<string[]>>;

const setupSocket = async (
    chatRoom: string
) => {
    socket = io("localhost:8080").connect();
    socket.emit("join", "taro", chatRoom)

    socket.on("message", handleMessage);
};

const chatInit = (setMessages: Dispatch<SetStateAction<string[]>>) => {
    setChatMessages = setMessages;
}

const sendMessage = (chatRoom: string, message: string) => {
    
    socket.emit("message", chatRoom, message)
}

const handleMessage = (message: string) => {
    chatMessages = chatMessages.concat(message);
    setChatMessages(chatMessages);
}



export {setupSocket, chatInit, sendMessage}