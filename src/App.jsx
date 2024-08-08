import "./App.css";
import Home from "./Pages/Home";
import Event_card from "./Components/Event_card";
import { useEffect, useState } from "react";
import { ThemeProvider } from "./Context/Theme";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  const [themeMode, setThemeMode] = useState("light");

  const lightTheme = () => {
    setThemeMode("light");
  };

  const darkTheme = () => {
    setThemeMode("dark");
  };

  // Actual change in theme
  useEffect(() => {
    document.querySelector("html").classList.remove("light", "dark");
    document.querySelector("html").classList.add(themeMode);
  }, [themeMode]);

  return (
    <>
      <ThemeProvider value={{ themeMode, lightTheme, darkTheme }}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            
          </Routes>
        </BrowserRouter>
      </ThemeProvider>
    </>
  );
}

export default App;