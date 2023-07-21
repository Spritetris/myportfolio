import "./App.css";
import Home from "./components/Home";
import Header from "./components/Header";
import { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Footer from "./components/Footer";

function App() {
  const [theme, setTheme] = useState("light");

  return (
    <>
      <BrowserRouter>
        <div className={"App " + theme}>
          <Header theme={theme} setTheme={setTheme} />
          <Home />
          <Footer />
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
