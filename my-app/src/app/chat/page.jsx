// Chat.js

"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation"; // Next.js 13+ useRouter import

export default function Chat() {
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState("");
  const [username, setUsername] = useState("");
  const router = useRouter();

  useEffect(() => {
    const loggedInUser = localStorage.getItem("username");
    const token = localStorage.getItem("token");

    if (!loggedInUser || !token) {
      router.push("/signin");
    } else {
      setUsername(loggedInUser);
      fetchMessages(token);
    }
  }, []);

  const fetchMessages = async (token) => {
    try {
      const response = await fetch("http://localhost:5000/chat", {
        headers: {
          Authorization: token,
        },
      });
      if (response.ok) {
        const data = await response.json();
        setMessages(data);
      } else {
        // Handle unauthorized access
        router.push("/signin");
      }
    } catch (error) {
      console.error("Error fetching messages:", error);
    }
  };

  const handleSendMessage = async () => {
    const token = localStorage.getItem("token");
    if (newMessage.trim() !== "" && username) {
      try {
        const response = await fetch("http://localhost:5000/chat", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: token,
          },
          body: JSON.stringify({ content: newMessage }),
        });
        if (response.ok) {
          const newMsg = await response.json();
          setMessages([...messages, newMsg]);
          setNewMessage("");
        } else {
          console.error("Failed to send message");
        }
      } catch (error) {
        console.error("Error sending message:", error);
      }
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
