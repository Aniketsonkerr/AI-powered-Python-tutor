import { useState } from "react";
import axios from "axios";
import { FaRobot, FaHatWizard } from "react-icons/fa";
import { GiDinosaurRex } from "react-icons/gi";

const characterIcons = {
  robot: <FaRobot className="text-blue-500 text-2xl" />,
  dinosaur: <GiDinosaurRex className="text-green-500 text-2xl" />,
  wizard: <FaHatWizard className="text-purple-500 text-2xl" />,
};

const TutorChat = () => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const [character, setCharacter] = useState("robot");
  const [error, setError] = useState(null);

  const handleSendMessage = async () => {
    if (!input.trim()) return;

    const userMessage = { role: "user", content: input };
    setMessages((prevMessages) => [...prevMessages, userMessage]);
    setError(null);

    try {
      const response = await axios.post("http://localhost:3000/api/chat", {
        message: input,
        character,
      });

      const aiMessage = { role: "ai", content: response.data.response };
      setMessages((prevMessages) => [...prevMessages, aiMessage]);
    } catch (error) {
      console.error("Error sending message:", error);
      setError(error.response?.data?.error || "Something went wrong!");
    }

    setInput("");
  };

  return (
    <div className="max-w-lg mx-auto p-4 bg-gray-100 shadow-md rounded-lg">
      {/* Character Selection */}
      <div className="mb-4 flex items-center gap-2">
        <label className="font-bold text-lg">Choose your AI tutor:</label>
        <select
          value={character}
          onChange={(e) => setCharacter(e.target.value)}
          className="border p-2 rounded-md"
        >
          <option value="robot">Robot 🤖</option>
          <option value="dinosaur">Dinosaur 🦖</option>
          <option value="wizard">Wizard 🧙‍♂️</option>
        </select>
        {characterIcons[character]}
      </div>

      {/* Chat Messages */}
      <div className="bg-white p-4 rounded-lg h-60 overflow-y-auto border border-gray-300">
        {messages.map((msg, index) => (
          <div
            key={index}
            className={`flex items-center gap-2 mb-2 ${
              msg.role === "user" ? "justify-end" : "justify-start"
            }`}
          >
            {msg.role === "ai" && characterIcons[character]}
            <p
              className={`p-2 rounded-lg text-white ${
                msg.role === "user" ? "bg-blue-500" : "bg-green-500"
              }`}
            >
              {msg.content}
            </p>
          </div>
        ))}
      </div>

      {/* Error Message */}
      {error && <p className="text-red-500 mt-2">❌ {error}</p>}

      {/* Input & Button */}
      <div className="mt-4 flex gap-2">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Type your message..."
          className="flex-grow p-2 border rounded-lg"
        />
        <button
          onClick={handleSendMessage}
          className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-700"
        >
          Send
        </button>
      </div>
    </div>
  );
};

export default TutorChat;
