import { Outlet } from "react-router-dom";
import Header from "./components/Header";
import { appContext } from "./utils/appContent";
import { useState } from "react";
import Footer from "./components/Footer";

function App() {
  const [character, setCharacter] = useState("robot");
  return (
    <>
      <appContext.Provider value={{ character, setCharacter }}>
        <Header />
        <Outlet character={character} setCharacter={setCharacter} />
        <Footer />
      </appContext.Provider>
    </>
  );
}

export default App;
