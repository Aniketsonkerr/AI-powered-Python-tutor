import { useState, useContext } from "react";
import axios from "axios";
import { appContext } from "../utils/appContent";
import { FaRobot, FaHatWizard } from "react-icons/fa";
import { GiDinosaurRex } from "react-icons/gi";

const characterIcons = {
  robot: <FaRobot className="text-blue-500 text-2xl" />,
  dinosaur: <GiDinosaurRex className="text-green-500 text-2xl" />,
  wizard: <FaHatWizard className="text-purple-500 text-2xl" />,
};

const TutorChat = () => {
  const { character, setCharacter } = useContext(appContext);
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const [error, setError] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleSendMessage = async () => {
    if (!input.trim()) return;

    const userMessage = { role: "user", content: input };
    setMessages((prevMessages) => [...prevMessages, userMessage]);
    setError(null);

    try {
      const response = await axios.post(
        "https://ai-powered-python-tutor-3.onrender.com",
        {
          message: input,
          character,
        }
      );

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
      {/* Change Character Button */}
      <button
        onClick={() => setIsModalOpen(true)}
        className="mb-4 flex items-center gap-2 bg-gray-200 px-3 py-2 rounded-md shadow hover:bg-gray-300"
      >
        {characterIcons[character]}
        <span>Change AI Character</span>
      </button>

      {/* Chat Box */}
      <div className="bg-white p-4 rounded-lg h-60 overflow-y-auto border border-gray-300">
        {messages.map((msg, index) => (
          <div
            key={index}
            className={`flex items-center gap-2 mb-2 ${
              msg.role === "user" ? "justify-end" : "justify-start"
            }`}
          >
            {/* Show AI character icon for AI messages */}
            {msg.role === "ai" && characterIcons[character]}

            {/* Message Content */}
            <p
              className={`p-2 rounded-lg text-white max-w-[70%] ${
                msg.role === "user"
                  ? "bg-blue-500 self-end"
                  : "bg-green-500 self-start"
              }`}
            >
              {msg.content}
            </p>

            {/* Show user icon (optional) */}
            {msg.role === "user" && (
              <span className="text-gray-500 text-2xl">👤</span>
            )}
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

      {/* Character Selection Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="bg-white p-6 rounded-lg shadow-lg w-80">
            <h2 className="text-lg font-semibold mb-4">Choose Your AI Tutor</h2>
            <div className="flex justify-between">
              {Object.keys(characterIcons).map((char) => (
                <button
                  key={char}
                  className={`p-3 rounded-lg ${
                    character === char ? "bg-gray-300" : "hover:bg-gray-200"
                  }`}
                  onClick={() => {
                    setCharacter(char);
                    setIsModalOpen(false);
                  }}
                >
                  {characterIcons[char]}
                </button>
              ))}
            </div>
            <button
              onClick={() => setIsModalOpen(false)}
              className="mt-4 w-full bg-red-500 text-white py-2 rounded-lg hover:bg-red-600"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default TutorChat;
