import { useState, useEffect, useRef } from "react";
import axios from "axios";

function Chat({ agentType, initialMessage, agentInitials, directQuestion }) {
  const [messages, setMessages] = useState([
    { role: "agent", content: initialMessage },
  ]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  useEffect(() => {
    if (directQuestion && directQuestion.trim()) {
      sendMessage(directQuestion.replace(/\s*\[\d+\]$/, ""));
    }
  }, [directQuestion]);

  const sendMessage = async (text) => {
    const messageText = text || input;
    if (!messageText.trim() || isLoading) return;

    const userMessage = { role: "user", content: messageText };
    setMessages((prev) => [...prev, userMessage]);
    if (!text) setInput("");
    setIsLoading(true);

    try {
      const response = await axios.post(`/api/${agentType}`, {
        message: messageText,
      });
      const agentReply = response.data.response || response.data.message || "Sorry, I couldn't process that request.";
      setMessages((prev) => [...prev, { role: "agent", content: agentReply }]);
    } catch (error) {
      console.error("Error sending message:", error);
      setMessages((prev) => [
        ...prev,
        { role: "agent", content: "Sorry, something went wrong. Please try again." },
      ]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    sendMessage();
  };

  return (
    <div className="flex flex-col" style={{ height: "400px" }}>
      <div className="flex-1 overflow-y-auto border border-gray-200 rounded-lg p-4 mb-4">
        {messages.map((msg, index) => (
          <div
            key={index}
            className={`flex items-start mb-4 ${
              msg.role === "user" ? "justify-end" : "justify-start"
            }`}
          >
            {msg.role === "agent" && (
              <div className="w-10 h-10 rounded-full bg-gray-500 text-white flex items-center justify-center text-sm font-bold mr-3 flex-shrink-0">
                {agentInitials}
              </div>
            )}
            <div
              className={`max-w-xs md:max-w-md px-4 py-2 rounded-lg ${
                msg.role === "user"
                  ? "bg-blue-500 text-white"
                  : "bg-gray-100 text-gray-800"
              }`}
            >
              {msg.content}
            </div>
          </div>
        ))}
        {isLoading && (
          <div className="flex items-start mb-4">
            <div className="w-10 h-10 rounded-full bg-gray-500 text-white flex items-center justify-center text-sm font-bold mr-3 flex-shrink-0">
              {agentInitials}
            </div>
            <div className="bg-gray-100 text-gray-800 px-4 py-2 rounded-lg">
              Typing...
            </div>
          </div>
        )}
        <div ref={messagesEndRef} />
      </div>
      <form onSubmit={handleSubmit} className="flex gap-2">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Type your message..."
          className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          disabled={isLoading}
        />
        <button
          type="submit"
          className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors disabled:opacity-50"
          disabled={isLoading || !input.trim()}
        >
          Send
        </button>
      </form>
    </div>
  );
}

export default Chat;
