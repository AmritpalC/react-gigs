// Hooks
import { useState, useEffect } from "react";

// Components
import Gigs from "./components/Gigs";
import Navbar from "./components/Navbar";

// Assets
import "./App.css";

function App() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    if (darkMode) {
      document.body.classList.remove("dark");
    } else {
      document.body.classList.add("dark");
    }
  }, [darkMode]);

  const toggleTheme = () => {
    setDarkMode((theme) => !theme);
  };

  return (
    <>
      <Navbar darkMode={darkMode} toggleTheme={toggleTheme} />
      <Gigs />
    </>
  );
}

export default App;
