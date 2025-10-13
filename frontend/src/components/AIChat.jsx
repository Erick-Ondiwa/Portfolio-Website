import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Bot } from "lucide-react";

const AIChat = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showWelcome, setShowWelcome] = useState(false);
  const [messages, setMessages] = useState([
    { from: "ai", text: "👋 Hi, I’m Erick’s AI Assistant! How can I help you today?" }
  ]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);

  // Show welcome bubble after delay
  useEffect(() => {
    const timer = setTimeout(() => setShowWelcome(true), 1500);
    return () => clearTimeout(timer);
  }, []);

  // Handle sending messages
  const handleSend = async (e) => {
    e.preventDefault();
    if (!input.trim()) return;

    const newMessage = { from: "user", text: input };
    setMessages((prev) => [...prev, newMessage]);
    setInput("");
    setLoading(true);

    try {
      const res = await fetch("/api/ask", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ question: input }),
      });

      const data = await res.json();

      setMessages((prev) => [
        ...prev,
        { from: "ai", text: data.answer || "🤖 Sorry, I couldn’t understand that." },
      ]);
    } catch (error) {
      console.error("Error talking to AI:", error);
      setMessages((prev) => [
        ...prev,
        { from: "ai", text: "⚠️ Oops! Something went wrong. Try again." },
      ]);
    } finally {
      setLoading(false);
    }
  };

  // const handleSend = async (e) => {
  //   e.preventDefault();
  //   if (!input.trim()) return;

  //   // Add user message
  //   const newMessage = { from: "user", text: input };
  //   setMessages((prev) => [...prev, newMessage]);
  //   setInput(""); // clear input
  //   setLoading(true);

  //   try {
  //     // Call your backend (make sure it’s running on this URL/port)
  //     const res = await fetch("http://localhost:8787/api/chat", {
  //       method: "POST",
  //       headers: { "Content-Type": "application/json" },
  //       body: JSON.stringify({ message: input }),
  //     });

  //     const data = await res.json();

  //     // Add AI reply
  //     setMessages((prev) => [
  //       ...prev,
  //       { from: "ai", text: data.reply || "🤖 Sorry, I couldn’t understand that." }
  //     ]);
  //   } catch (error) {
  //     console.error("Error talking to AI:", error);
  //     setMessages((prev) => [
  //       ...prev,
  //       { from: "ai", text: "⚠️ Oops! Something went wrong. Try again." }
  //     ]);
  //   } finally {
  //     setLoading(false);
  //   }
  // };

  return (
    <>
      {/* Welcome Tooltip */}
      <AnimatePresence>
        {showWelcome && !isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            transition={{ duration: 0.6 }}
            className="
              fixed bottom-24 right-6 
              px-4 py-2
              max-w-xs
              rounded-2xl
              bg-gray-900/90 
              text-gray-100 text-sm font-medium
              shadow-lg 
              border border-gray-700
              backdrop-blur-md
            "
          >
            👋 Hi, I’m Erick’s AI assistant. Need help?
          </motion.div>
        )}
      </AnimatePresence>

      {/* Floating AI Button */}
      <motion.button
        onClick={() => {
          setIsOpen(!isOpen);
          setShowWelcome(false);
        }}
        className="
          fixed bottom-6 right-6 
          z-50 
          w-16 h-16 
          flex items-center justify-center
          rounded-full 
          cursor-pointer
          bg-gradient-to-r from-green-400 via-blue-500 to-purple-500
          shadow-[0_0_20px_rgba(59,130,246,0.6)]
          transition duration-300
          hover:scale-110 hover:shadow-[0_0_30px_rgba(59,130,246,0.8)]
        "
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ type: "spring", stiffness: 200 }}
      >
        {/* Bot Icon */}
        <motion.div
          animate={{ rotate: [0, 10, -10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
        >
          <Bot size={30} className="text-white" />
        </motion.div>

        {/* Continuous Glow Pulse */}
        <motion.div
          className="absolute inset-0 rounded-full bg-gradient-to-r from-green-400 via-blue-500 to-purple-500 blur-xl opacity-50"
          animate={{ scale: [1, 1.2, 1], opacity: [0.6, 0.3, 0.6] }}
          transition={{ repeat: Infinity, duration: 2 }}
        />
      </motion.button>

      {/* Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 50 }}
            transition={{ duration: 0.4 }}
            className="
              fixed bottom-24 right-6 w-80 md:w-96 h-[500px] 
              rounded-2xl overflow-hidden 
              shadow-2xl border border-gray-700/40 
              flex flex-col z-50
              bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900
              backdrop-blur-xl
            "
          >
            {/* Header */}
            <div className="flex items-center justify-between px-4 py-3 border-b border-gray-700/40 bg-gradient-to-r from-indigo-600/80 to-purple-600/80">
              <div className="flex items-center gap-2 text-white font-semibold">
                <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse"></span>
                Erick’s AI Assistant
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="text-gray-200 hover:text-red-400 transition"
              >
                ✕
              </button>
            </div>

            {/* Messages */}
            <div className="flex-1 overflow-y-auto p-4 space-y-3 text-sm">
              {messages.map((msg, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3 }}
                  className={`flex ${msg.from === "user" ? "justify-end" : "justify-start"}`}
                >
                  <div
                    className={`px-4 py-2 rounded-2xl shadow-md max-w-[75%] ${
                      msg.from === "user"
                        ? "bg-gradient-to-r from-indigo-500 to-purple-600 text-white"
                        : "bg-gray-700/70 text-gray-100 border border-gray-600/50"
                    }`}
                  >
                    {msg.text}
                  </div>
                </motion.div>
              ))}
              {loading && (
                <div className="flex justify-start">
                  <div className="px-4 py-2 rounded-2xl bg-gray-700/70 text-gray-300 text-sm border border-gray-600/50">
                    Erick’s AI is typing…
                  </div>
                </div>
              )}
            </div>

            {/* Input */}
            <form
              onSubmit={handleSend}
              className="flex items-center gap-2 p-3 border-t border-gray-700/40 bg-gray-800/70"
            >
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Type your message..."
                className="flex-1 px-4 py-2 rounded-xl bg-gray-900/60 text-gray-200 
                           focus:outline-none focus:ring-2 focus:ring-indigo-500/60 placeholder-gray-400"
              />
              <button
                type="submit"
                className="p-2 rounded-full bg-gradient-to-r from-indigo-500 to-purple-600 text-white 
                           hover:scale-110 transition transform shadow-md"
              >
                ➤
              </button>
            </form>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default AIChat;
