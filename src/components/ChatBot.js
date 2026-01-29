import React, { useState, useRef, useEffect } from "react";
import { GoogleGenerativeAI } from "@google/generative-ai";
import { AiOutlineMessage, AiOutlineClose, AiOutlineSend } from "react-icons/ai";
import "./ChatBot.css";

function ChatBot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    {
      id: 1,
      text: "Hi! I'm Ansh's AI Assistant. Ask me anything about my projects, skills, or experience!",
      sender: "bot",
      timestamp: new Date(),
    },
  ]);
  const [inputValue, setInputValue] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef(null);
  const genAI = useRef(null);

  useEffect(() => {
    // Initialize Gemini API - Make sure to add your API key to environment variables
    const apiKey = process.env.REACT_APP_GEMINI_API_KEY;
    if (apiKey) {
      genAI.current = new GoogleGenerativeAI(apiKey);
    } else {
      console.warn(
        "Gemini API key not found. Please add REACT_APP_GEMINI_API_KEY to your .env file"
      );
    }
  }, []);

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  const handleSendMessage = async (e) => {
    e.preventDefault();
    if (!inputValue.trim()) return;

    // Add user message
    const userMessage = {
      id: messages.length + 1,
      text: inputValue,
      sender: "user",
      timestamp: new Date(),
    };

    setMessages((prev) => [...prev, userMessage]);
    setInputValue("");
    setIsLoading(true);

    try {
      if (!genAI.current) {
        setMessages((prev) => [
          ...prev,
          {
            id: prev.length + 1,
            text: "API key not configured. Please add REACT_APP_GEMINI_API_KEY to your .env file.",
            sender: "bot",
            timestamp: new Date(),
          },
        ]);
        setIsLoading(false);
        return;
      }

      const model = genAI.current.getGenerativeModel({ model: "gemini-2.5-flash" });

      const systemPrompt = `You are an AI assistant for Ansh Gupta's portfolio. You represent Ansh and help answer questions about his projects, skills, and experience. 
      
      Ansh Gupta's background:
      - Full Stack Developer with expertise in Python, C/C++, JavaScript, and TypeScript
      - Framework expertise: React.js, Next.js, Node.js with Express.js
      - Database: MongoDB
      - Tools: Git, Postman, VS Code
      - Key projects include: Data Visualization Dashboard, Chat App, Job Hunt, Contact Manager, Crave, and TodoList
      
      Keep responses friendly, concise, and professional. If asked something not related to Ansh's portfolio, politely redirect to portfolio-related topics.`;

      const prompt = `${systemPrompt}\n\nUser question: ${inputValue}`;

      const result = await model.generateContent(prompt);
      const response = await result.response;
      const botMessage = {
        id: messages.length + 2,
        text: response.text(),
        sender: "bot",
        timestamp: new Date(),
      };

      setMessages((prev) => [...prev, botMessage]);
    } catch (error) {
      console.error("Error calling Gemini API:", error);
      setMessages((prev) => [
        ...prev,
        {
          id: prev.length + 1,
          text: "Sorry, I encountered an error. Please try again later.",
          sender: "bot",
          timestamp: new Date(),
        },
      ]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      {/* Floating Button */}
      <button
        className="chat-floating-btn"
        onClick={() => setIsOpen(!isOpen)}
        title="Chat with AI Assistant"
      >
        {isOpen ? (
          <AiOutlineClose size={24} />
        ) : (
          <AiOutlineMessage size={24} />
        )}
      </button>

      {/* Chat Window */}
      {isOpen && (
        <div className="chat-window">
          <div className="chat-header">
            <h3>Ansh's AI Assistant</h3>
            <button
              className="chat-close-btn"
              onClick={() => setIsOpen(false)}
            >
              <AiOutlineClose size={20} />
            </button>
          </div>

          <div className="chat-messages">
            {messages.map((msg) => (
              <div key={msg.id} className={`message ${msg.sender}`}>
                <div className="message-content">{msg.text}</div>
              </div>
            ))}
            {isLoading && (
              <div className="message bot">
                <div className="message-content typing">
                  <span></span>
                  <span></span>
                  <span></span>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          <form onSubmit={handleSendMessage} className="chat-input-form">
            <input
              type="text"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              placeholder="Ask me anything..."
              disabled={isLoading}
              className="chat-input"
            />
            <button
              type="submit"
              disabled={isLoading || !inputValue.trim()}
              className="chat-send-btn"
            >
              <AiOutlineSend size={20} />
            </button>
          </form>
        </div>
      )}
    </>
  );
}

export default ChatBot;
