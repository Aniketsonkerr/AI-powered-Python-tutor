import {
  FaChalkboardTeacher,
  FaRobot,
  FaMagic,
  FaBookOpen,
} from "react-icons/fa";

function About() {
  return (
    <div className="h-screen flex flex-col justify-center items-center bg-gray-100 px-6 text-center">
      <h1 className="text-4xl font-bold text-gray-800 mb-4">About AI Tutor</h1>
      <p className="text-gray-600 text-lg max-w-2xl">
        AI Tutor is an interactive learning platform powered by AI to help you
        understand concepts in an engaging way. Choose your tutor and start a
        conversation to enhance your knowledge.
      </p>

      <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        <div className="bg-white p-6 rounded-lg shadow-lg flex flex-col items-center">
          <FaRobot className="text-blue-500 text-5xl mb-3" />
          <h3 className="font-bold text-xl text-gray-800">Smart AI Tutors</h3>
          <p className="text-gray-600">
            Interact with AI characters like a Robot, Dinosaur, or Wizard.
          </p>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-lg flex flex-col items-center">
          <FaMagic className="text-purple-500 text-5xl mb-3" />
          <h3 className="font-bold text-xl text-gray-800">
            Personalized Learning
          </h3>
          <p className="text-gray-600">
            Get AI-powered explanations tailored to your questions.
          </p>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-lg flex flex-col items-center">
          <FaChalkboardTeacher className="text-green-500 text-5xl mb-3" />
          <h3 className="font-bold text-xl text-gray-800">Interactive Chat</h3>
          <p className="text-gray-600">
            Ask anything and get instant responses from AI tutors.
          </p>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-lg flex flex-col items-center">
          <FaBookOpen className="text-yellow-500 text-5xl mb-3" />
          <h3 className="font-bold text-xl text-gray-800">Fun & Educational</h3>
          <p className="text-gray-600">
            Learn in a fun, engaging way with AI-driven conversations.
          </p>
        </div>
      </div>

      <button
        className="mt-6 bg-blue-500 text-white px-6 py-3 rounded-lg shadow-lg hover:bg-blue-600 transition-all"
        onClick={() => (window.location.href = "/")}
      >
        Get Started
      </button>
    </div>
  );
}

export default About;
