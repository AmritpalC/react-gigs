import Hello from "./components/Hello";
import guitarLogo from "./assets/guitar.png";
import "./App.css";

function App() {
  return (
    <>
      <Hello name="World" />
      <img className="logo" src={guitarLogo}></img>
    </>
  );
}

export default App;
