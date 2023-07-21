import "./Header.css";
import { IoSunnySharp, IoMoon } from "react-icons/io5";
import { motion } from "framer-motion";
import {HashLink as Link } from "react-router-hash-link"
export default function Header(props) {
  const { theme, setTheme } = props;
  function ToggleTheme() {
    if (theme === "light") {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  }
  return (
    <header>
      <div style={{display:"flex", alignItems:"center"}}>
      <div className="logo">
        <span>AUNCHISA'S PORTFOLIO</span>
      </div>
      <Link to="#skill">
      <div style={{paddingLeft:"30px"}}>
        <span>SKILL</span>
      </div></Link>
      <Link to="#project">
      <div style={{paddingLeft:"10px"}}>
        <span>PROJECT</span>
      </div></Link>
      </div>
      <div className="theme-container">
        <span className="icon" onClick={ToggleTheme}>
          {theme === "light" ? <IoSunnySharp /> : <IoMoon />}
        </span>
      </div>
    </header>
  );
}
