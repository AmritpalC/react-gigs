import "../Gig.css";
import { useState } from "react";

const Gig = (props) => {
  const [favourite, setFavourite] = useState(false);

  const toggleFave = () => {
    if (favourite === false) {
      setFavourite(true);
    } else {
      setFavourite(false);
    }
  };

  return (
    <div className="gig-container">
      <h2 className="gig-name">{props.name}</h2>
      <img
        className="gig-image"
        src={props.image}
        alt="Picture of Jimi Hendrix"
      />
      <h4 className="gig-description">{props.description}</h4>
      <p className="date-and-time">{props.dateTime}</p>
      <p className="location">{props.location}</p>
      <button onClick={toggleFave}>
        {favourite ? "Unfavourite" : "Favourite"}
      </button>
      {favourite && <h2>⭐️</h2>}
    </div>
  );
};

export default Gig;
