import "./App.css";
import Home from "./Pages/Home";
import { useEffect, useState } from "react";
import { ThemeProvider } from "./Context/Theme";
import Gallery_Card from "./Components/Gallery_card";

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
        <Home />
        <Gallery_Card/>
      </ThemeProvider>
    </>
  );
}

export default App;
