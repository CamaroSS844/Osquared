"use client";

import React, { useEffect, useState } from "react";
import styles from "./page.module.css";
import { retrieveData } from "./OverviewComponents/data/apiCalls";

export default function ChatRoom() {
  const [messages, setMessages] = useState([]);
  const [userInput, setUserInput] = useState("");
  const [isClient, setIsClient] = useState(false)

  useEffect(() => {
    setIsClient(true); // Confirm client-side rendering
  }, []);

  const getInit = async () => {
    await retrieveData(setMessages);
  }

  if (isClient) {
    getInit()
  }

  const handleSendMessage = async () => {
    if (!userInput.trim()) return;

    // Add the user's message to the chat
    const userMessage = { sender: "Taboka", text: userInput };
    setMessages((prev) => [...prev, userMessage]);

    // Clear the input box
    setUserInput("");

    // Simulate AI response
    const aiResponse = await getAIResponse(userInput);
    const aiMessage = { sender: "AI", text: aiResponse };

    // Add the AI's response to the chat
    setMessages((prev) => [...prev, aiMessage]);
  };

  const getAIResponse = async (input) => {
    // Simulate AI response logic (replace with actual AI call)
    return `You said: "${input}". Remember to stay safe online!`;
  };

  return (
    <div className={styles.page}>
      <h1 className={styles.title}>Cyber Security Chat Room</h1>

      {/* Chat Area */}
      <div className={styles.chatArea}>
        {messages.map((message, index) => (
          <div
            key={index}
            className={`${styles.message} ${
              message.sender === "User" ? styles.userMessage : styles.aiMessage
            }`}
          >
            <strong>{message.sender}:</strong> {message.text}
          </div>
        ))}
      </div>

      {/* Input Area */}
      <div className={styles.inputArea}>
        <input
          type="text"
          placeholder="Type your message..."
          value={userInput}
          onChange={(e) => setUserInput(e.target.value)}
          className={styles.inputBox}
        />
        <button onClick={handleSendMessage} className={styles.sendButton}>
          Send
        </button>
      </div>
    </div>
  );
}
