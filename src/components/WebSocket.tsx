import React, { useState, useEffect } from 'react';

const WebSocketTest: React.FC = () => {
    const [messages, setMessages] = useState<string[]>([]);
    const [inputMessage, setInputMessage] = useState<string>('');
    const [socket, setSocket] = useState<WebSocket | null>(null);

    useEffect(() => {
        const newSocket = new WebSocket('wss://echo.websocket.org');
        console.log(newSocket, "websocket-----")
        setSocket(newSocket);

        newSocket.onopen = () => {
            console.log("Server bilan ulanish o'rnatildi");
        };

        newSocket.onmessage = (event) => {
            console.log(event.data, "this is event message")
            setMessages(prevMessages => [...prevMessages, event.data]);
        };

        newSocket.onclose = () => {
            console.log("Ulanish yopildi");
        };

        return () => {
            newSocket.close();
        };
    }, []);

    const sendMessage = () => {
        if (inputMessage.trim() !== '' && socket) {
            socket.send(inputMessage);
            setInputMessage('');
        }
    };

    return (
        <div>
            <h2>WebSocket Test</h2>
            <div>
                <input
                    type="text"
                    style={{margin: "10px", padding: "10px"}}
                    value={inputMessage}
                    onChange={(e) => setInputMessage(e.target.value)}
                    placeholder="Yuboriladigan xabarni kiriting"
                />
                <button onClick={sendMessage}>Send</button>
            </div>
            <h3>Messages from server:</h3>
            <ul>
                {messages.map((msg, index) => (
                    <li key={index}>{msg}</li>
                ))}
            </ul>
        </div>
    );
};

export default WebSocketTest;
