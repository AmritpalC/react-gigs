import "../Gig.css";

const Gig = (props) => {
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
    </div>
  );
};

export default Gig;
