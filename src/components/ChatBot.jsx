import React, { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaRobot, FaTimes, FaPaperPlane } from "react-icons/fa";
import "./ChatBot.css"; // we'll style separately

export default function ChatBot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    { sender: "bot", text: "Welcome our Agency.", time: "2:30 PM", seen: true },
  ]);
  const [input, setInput] = useState("");
  const chatRef = useRef(null);

  // Scroll to bottom when new message arrives
  useEffect(() => {
    if (chatRef.current) {
      chatRef.current.scrollTop = chatRef.current.scrollHeight;
    }
  }, [messages]);

  const handleSend = () => {
    if (!input.trim()) return;
    const userMsg = {
      sender: "user",
      text: input,
      time: "2:23 PM",
      seen: true,
    };
    setMessages((prev) => [...prev, userMsg]);
    setInput("");

    setTimeout(() => {
      const botMsg = {
        sender: "bot",
        text: "Thanks for your message! How can I assist?",
        time: "2:31 PM",
        seen: true,
      };
      setMessages((prev) => [...prev, botMsg]);
    }, 1000);
  };

  return (
    <>
      {/* Floating Bot Icon */}
      {!isOpen && (
        <motion.button
          onClick={() => setIsOpen(true)}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          className="chatbot-button"
        >
          <FaRobot size={24} />
        </motion.button>
      )}

      {/* Chat Popup */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 50 }}
            transition={{ duration: 0.3 }}
            className="chatbot-container"
          >
            {/* Header */}
            <div className="chatbot-header">
              <div className="flex items-center gap-2">
                <div className="chatbot-avatar">Ai</div>
                <h3>Chat with Ai!</h3>
              </div>
              <FaTimes
                className="chatbot-close"
                onClick={() => setIsOpen(false)}
              />
            </div>

            {/* Messages */}
            <div className="chatbot-messages" ref={chatRef}>
              {messages.map((msg, index) => (
                <div
                  key={index}
                  className={`chat-message ${
                    msg.sender === "user" ? "user" : "bot"
                  }`}
                >
                  {msg.sender === "bot" && (
                    <p className="bot-label">Customer Support</p>
                  )}
                  <div className="message-bubble">
                    {msg.text}
                    <span className="time">{msg.time}</span>
                  </div>
                  <p className="status">
                    {msg.seen ? "Seen" : "Delivery"}
                  </p>
                </div>
              ))}
            </div>

            {/* Input */}
            <div className="chatbot-input">
              <input
                type="text"
                placeholder="Write here..."
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && handleSend()}
              />
              <button onClick={handleSend}>
                <FaPaperPlane />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
