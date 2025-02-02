import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { FaRobot, FaHatWizard } from "react-icons/fa";
import { GiDinosaurRex } from "react-icons/gi";
import { appContext } from "../utils/appContent";

const characterIcons = {
  robot: <FaRobot className="text-blue-500 text-4xl" />,
  dinosaur: <GiDinosaurRex className="text-green-500 text-4xl" />,
  wizard: <FaHatWizard className="text-purple-500 text-4xl" />,
};

function Home() {
  const { character, setCharacter } = useContext(appContext);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const navigate = useNavigate();

  const handleStart = () => {
    setIsModalOpen(true); // Open modal when clicking "Get Started"
  };

  const handleConfirm = () => {
    setIsModalOpen(false);
    navigate("/python-tutor"); // Navigate to TutorChat after choosing character
  };

  return (
    <div className="h-screen flex flex-col justify-center items-center bg-gray-100">
      <h1 className="text-4xl font-bold mb-6 text-gray-800">
        Welcome to AI Tutor
      </h1>
      <button
        onClick={handleStart}
        className="bg-blue-500 text-white px-6 py-3 rounded-lg shadow-lg hover:bg-blue-600 transition-all"
      >
        Get Started
      </button>

      {/* Modal for Character Selection */}
      {isModalOpen && (
        <div className="fixed inset-0 flex justify-center items-center bg-gray-900 bg-opacity-50">
          <div className="bg-white p-6 rounded-lg shadow-lg w-96">
            <h2 className="text-xl font-bold mb-4">Choose Your AI Tutor</h2>
            <div className="flex flex-col items-center gap-4">
              <select
                value={character}
                onChange={(e) => setCharacter(e.target.value)}
                className="border p-2 rounded-lg w-full"
              >
                <option value="robot">Robot 🤖</option>
                <option value="dinosaur">Dinosaur 🦖</option>
                <option value="wizard">Wizard 🧙‍♂️</option>
              </select>
              <div>{characterIcons[character]}</div>
              <button
                onClick={handleConfirm}
                className="bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600 transition-all"
              >
                Confirm & Continue
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Home;
