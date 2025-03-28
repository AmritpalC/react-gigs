import Gig from "./Gig";
import allGigs from "../data/gigs";
import { useState } from "react";

const Gigs = () => {
  const [gigs, setGigs] = useState(
    allGigs.map((gig) => ({ ...gig, favourite: false })) // state has all gigs, now with a fave key
  );

  const toggleFave = (id) => {
    setGigs((prevGigs) =>
      prevGigs.map(
        (gig) => (gig.id === id ? { ...gig, favourite: !gig.favourite } : gig) // if id matches the one clicked, I flip it's favourite status, else I return the gig as it is
      )
    );
  };

  // converting boolean to a number for comparison
  const sortedGigs = [...gigs].sort((a, b) => +b.favourite - +a.favourite);

  return (
    <div className="allGigs">
      {sortedGigs.map((gig) => (
        <Gig key={gig.id} {...gig} toggleFave={() => toggleFave(gig.id)} />
      ))}
    </div>
  );
};

export default Gigs;
