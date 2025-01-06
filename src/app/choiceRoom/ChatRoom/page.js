"use client";

import React, { useEffect, useState } from "react";
import styles from "./page.module.css";
import { retrieveData, sendNewMessage } from "./OverviewComponents/data/apiCalls";

export default function ChatRoom() {
  const [messages, setMessages] = useState([]);
  const [userInput, setUserInput] = useState("");
  const [isClient, setIsClient] = useState(false);
  const [score, setScore] = useState(0);
  const [explanation, setExplanation] = useState("");

  useEffect(() => {
    setIsClient(true); // Confirm client-side rendering
  }, []);

  if (isClient) {
    retrieveData(setMessages);
    setIsClient(false);
  }

  const handleSendMessage = async () => {
    if (!userInput.trim()) return;

    // Add the user's message to the chat
    const userMessage = { sender: "Taboka", text: userInput };
    setMessages((prev) => [...prev, userMessage]);

    // Clear the input box
    setUserInput("");

    const myPost = { user_message: userInput };
    console.log(myPost);

    // Simulate AI response
    const aiResponse = await sendNewMessage(myPost, messages, setMessages);

    // Extract response and feedback
    const { response, feedback, scores } = aiResponse;
    console.log(feedback)


    // Update messages, score, and explanation
    setExplanation(feedback);
    setScore((prev) => prev + scores.privacy);
  };

  return (
    <div className={styles.page}>
      <h1 className={styles.title}>Cyber Security Chat Room</h1>
      <div className={styles.container}>
        {/* Chat Area */}
        <div className={styles.chatArea}>
          {messages.map((message, index) => (
            <div
              key={index}
              className={`${styles.message} ${
                message.sender === "Taboka" ? styles.userMessage : styles.aiMessage
              }`}
            >
              <strong>{message.sender}:</strong> {message.text}
            </div>
          ))}
        </div>

        {/* Score and Explanation Tile */}
        <div className={styles.infoTile}>
          <div className={styles.scoreSection}>
            <h2>Score</h2>
            <p>{score}</p>
          </div>
          <div className={styles.explanationSection}>
            <h2>AI Guidance</h2>
            <p>{explanation}</p>
          </div>
        </div>
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
