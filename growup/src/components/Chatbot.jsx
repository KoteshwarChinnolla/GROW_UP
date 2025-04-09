import React, { useState } from "react";
import "./Chatbot.css";
import botAvatar from "../assets/4.jpg";

const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    { sender: "bot", text: "Hi! I'm your assistant 🤖. How can I help you today?" },
  ]);
  const [isTyping, setIsTyping] = useState(false);

  const toggleChat = () => setIsOpen(!isOpen);

  const botReply = (userText) => {
    setIsTyping(true);

    setTimeout(() => {
      let reply = "Sorry, I didn't get that.";

      if (/hello|hi/i.test(userText)) {
        reply = "Hello! 👋 How can I assist you?";
      } else if (/job|vacancy/i.test(userText)) {
        reply = "We have various IT and Non-IT jobs listed on our Jobs page!";
      } else if (/contact|support/i.test(userText)) {
        reply = "You can reach us via the Contact page.";
      }

      setMessages((prev) => [...prev, { sender: "bot", text: reply }]);
      setIsTyping(false);
    }, 1000);
  };

  const handleSend = () => {
    const input = document.getElementById("chat-input");
    const newMessage = input.value.trim();
    if (newMessage) {
      setMessages((prev) => [...prev, { sender: "user", text: newMessage }]);
      input.value = "";
      botReply(newMessage);
    }
  };

  return (
    <div className="chatbot-container">
      <div className={`chat-window ${isOpen ? "open" : ""}`}>
        <div className="chat-header">
          <img src={botAvatar} alt="Chatbot" className="bot-avatar" />
          <span>GrowUp Bot</span>
        </div>
        <div className="chat-body">
          {messages.map((msg, idx) => (
            <div
              key={idx}
              className={`chat-message ${msg.sender === "user" ? "user" : "bot"}`}
            >
              {msg.text}
            </div>
          ))}
          {isTyping && <div className="typing">Bot is typing...</div>}
        </div>
        <div className="chat-footer">
          <input type="text" id="chat-input" placeholder="Ask me anything..." />
          <button onClick={handleSend}>Send</button>
        </div>
      </div>
      <button className="chat-toggle-btn bounce" onClick={toggleChat}>
        💬
      </button>
    </div>
  );
};

export default Chatbot;
