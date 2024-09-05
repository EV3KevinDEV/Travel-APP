"use client";

import { useState } from "react";

export default function Chat() {
  const [messages, setMessages] = useState([
    {
      id: 1,
      sender: "Alice",
      content: "Hey everyone! Are we all set for the trip?",
    },
    { id: 2, sender: "Bob", content: "Yes, I'm so excited!" },
    {
      id: 3,
      sender: "Charlie",
      content: "Me too! Did we decide on the restaurant for the first night?",
    },
  ]);

  const [newMessage, setNewMessage] = useState("");

  const handleSendMessage = () => {
    if (newMessage.trim() !== "") {
      setMessages([
        ...messages,
        { id: messages.length + 1, sender: "You", content: newMessage },
      ]);
      setNewMessage("");
    }
  };

  return (
    <div>
      <h1 className="text-3xl font-bold mb-4">Group Chat</h1>
      <div className="bg-white shadow-md rounded-lg p-6">
        <div className="space-y-4 mb-4 h-96 overflow-y-auto">
          {messages.map((message) => (
            <div key={message.id} className="bg-gray-100 p-3 rounded-lg">
              <span className="font-semibold">{message.sender}: </span>
              {message.content}
            </div>
          ))}
        </div>
        <div className="flex">
          <input
            type="text"
            value={newMessage}
            onChange={(e) => setNewMessage(e.target.value)}
            placeholder="Type your message..."
            className="flex-grow border rounded-l-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button
            onClick={handleSendMessage}
            className="bg-blue-500 text-white px-4 py-2 rounded-r-lg hover:bg-blue-600"
          >
            Send
          </button>
        </div>
      </div>
    </div>
  );
}
