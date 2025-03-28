const Gig = (props) => {
  return (
    <div className="gig-container">
      <h2 className="gig-name">{props.name}</h2>
      <img
        className="gig-image"
        src={props.image}
        alt={`Picture of ${props.name}`}
      />
      <h4 className="gig-description">{props.description}</h4>
      <p className="date-and-time">{props.dateTime}</p>
      <p className="location">{props.location}</p>
      <button className="fave-button" onClick={props.toggleFave}>
        {props.favourite ? "Unfavourite" : "Favourite"}
      </button>
      {props.favourite && <h2>⭐️</h2>}
    </div>
  );
};

export default Gig;
