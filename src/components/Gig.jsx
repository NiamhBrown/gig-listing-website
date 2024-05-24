import React, { useState } from "react";
import FavouriteButton from "./FavouriteButton";

const Gig = (props) => {

  const [favouriteStatus, setFavouriteStatus] = useState(false)

  return (
    // <>
    // {/* <p>Gig listing</p>
    // <h1>{props.data.band_name}</h1>
    // <h2>{props.data.location}</h2> */}
    // </>

<div className="gig-listing">
<h3 className="artist-name">{props.data.band_name}</h3>
<div className="favourite-heart">{favouriteStatus ? '❤️' : ""}</div>
<img src={props.image_url} alt="" className="artist-img"/>
<p className="description">{props.data.description}</p>
<p className="event-time">{props.data.time}</p>
<p className="event-location">{props.data.location}</p>
<button className="ticket-btn">Get tickets</button>
<FavouriteButton favouriteStatus = { favouriteStatus } setFavouriteStatus = { setFavouriteStatus }/>
</div>
  );
};

export default Gig;

