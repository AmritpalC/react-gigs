import "../Gig.css"

const Gig = (props) => {
    return (
        <div className="gig-container">
            <h3 className="gig-name">{props.name}</h3>
            <img 
                className="gig-image"
                src={props.image} alt="" />
            <p className="gig-description">{props.description}</p>
            <p className="date-and-time">{props.dateTime}</p>
            <p className="location">{props.location}</p>
        </div>
    )
}

export default Gig;
