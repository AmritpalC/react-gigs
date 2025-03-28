import guitarLogo from "../assets/guitar.png";
import { FaSun, FaMoon } from "react-icons/fa";

const Navbar = ({ darkMode, toggleTheme }) => {
  return (
    <nav className="navbar">
      <div className="logo">
        <img className="logo" src={guitarLogo} />
      </div>
      <h1 className="nav-title">No Giggity</h1>
      <button className="theme-toggler" onClick={toggleTheme}>
        {darkMode ? <FaSun /> : <FaMoon />}
      </button>
    </nav>
  );
};

export default Navbar;
