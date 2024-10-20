import "./App.css";
import { useEffect, useState } from "react";
import { ThemeProvider } from "./Context/Theme";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./Pages/Home";
import Signup from "./Pages/Signup";
import Login from "./Pages/Login";
import Forgetpassword from "./Pages/Forgetpassword";
import Resetpassword from "./Pages/Resetpassword";
import VirtualEvent from "./Pages/VirtualEvent";
import InPersonEvent from "./Pages/InPersonEvent";
import HybridEvent from "./Pages/HybridEvent";
import CreateForm from "./Pages/CreateForm";

function App() {
  const [themeMode, setThemeMode] = useState("light");

  const lightTheme = () => {
    setThemeMode("light");
  };

  const darkTheme = () => {
    setThemeMode("dark");
  };

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
            <Route path="/signup" element={<Signup />} />
            <Route path="/login" element={<Login />} />
            <Route path="/forgetpassword" element={<Forgetpassword />} />
            <Route path="/resetpassword" element={<Resetpassword />} />
            <Route path="/virtualevent" element={<VirtualEvent />} />
            <Route path="/inpersonevent" element={<InPersonEvent />} />
            <Route path="/hybridevent" element={<HybridEvent />} />
            <Route path="/createform" element={<CreateForm />} />
          </Routes>
        </BrowserRouter>
      </ThemeProvider>
    </>
  );
}

export default App;
