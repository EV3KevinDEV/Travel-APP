"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/router"; // assuming you're using Next.js for routing

export default function Chat() {
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState("");
  const [username, setUsername] = useState("");

  // Check for logged-in status when the component mounts
  useEffect(() => {
    const loggedInUser = localStorage.getItem("username");

    if (!loggedInUser) {
      // If no user is logged in, redirect to login or signup
      router.push("/login");
    } else {
      setUsername(loggedInUser);
      fetchMessages(); // Fetch messages once authenticated
    }
  }, []);

  // Fetch chat messages from the backend
  const fetchMessages = async () => {
    try {
      const response = await fetch("http://localhost:5000/chat");
      const data = await response.json();
      setMessages(data);
    } catch (error) {
      console.error("Error fetching messages:", error);
    }
  };

  // Handle sending the message to the backend
  const handleSendMessage = async () => {
    if (newMessage.trim() !== "" && username) {
      const messageData = { sender: username, content: newMessage };
      try {
        const response = await fetch("http://localhost:5000/chat", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(messageData),
        });
        if (response.ok) {
          const newMsg = await response.json();
          setMessages([...messages, newMsg]); // Update messages with the new one
          setNewMessage(""); // Clear the input field
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
            <div key={message._id} className="bg-gray-100 p-3 rounded-lg">
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
