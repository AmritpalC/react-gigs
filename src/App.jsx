// Components
import Hello from "./components/Hello";
import Gig from "./components/Gig"

// Assets
import guitarLogo from "./assets/guitar.png";
import ziggy from "./assets/Ziggy.jpg";
import jimiHendrix from "./assets/Jimi-Hendrix.jpg";
import "./App.css";

const jimiProps = {
  name: "Jimi Hendrix",
  image: jimiHendrix,
  description: "Live from Monterey Pop festival - it was lit!",
  dateTime: "18 June 1967 - 3pm",
  location: "Monterery Country Fairgrounds, Monterey, California"
}

function App() {
  return (
    <>
      <Hello name="World" />
      <img className="logo" src={guitarLogo} />
      <Gig 
        name="David Bowie"
        image={ziggy}
        description="Say farewell to the Spiders from Mars!"
        dateTime="3 July 1973 - 7pm"
        location="Hammersmith Odeon, London"
      />
      <Gig {...jimiProps}/>
    </>
  );
}

export default App;
