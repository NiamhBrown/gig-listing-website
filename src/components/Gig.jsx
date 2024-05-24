import React, { useState } from "react";
import FavouriteButton from "./FavouriteButton";

const Gig = (props) => {

  const [favouriteStatus, setFavouriteStatus] = useState(false)

  return (
    <div className="gig-listing">
      <h3 className="artist-name">{props.artistName}</h3>
      <div className="favourite-heart">{favouriteStatus ? '❤️' : ""}</div>
      <img src={props.imageSrc} alt={props.imageAlt} className="artist-img"/>
      <p className="description">{props.description}</p>
      <p className="event-time">{props.eventTime}</p>
      <p className="event-location">{props.location}</p>
      <button className="ticket-btn">Get tickets</button>
      <FavouriteButton favouriteStatus = { favouriteStatus } setFavouriteStatus = { setFavouriteStatus }/>
    </div>
  );
};

export default Gig;

