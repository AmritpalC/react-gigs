// Components
import Hello from "./components/Hello";
import Gigs from "./components/Gigs";

// Assets
import guitarLogo from "./assets/guitar.png";
import "./App.css";

function App() {
  return (
    <>
      <Hello name="World" />
      <img className="logo" src={guitarLogo} />
      <Gigs />
    </>
  );
}

export default App;
