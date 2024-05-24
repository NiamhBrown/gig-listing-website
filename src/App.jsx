import React, { useState, useEffect } from "react";
import Gig from "./components/Gig";
import "./styles/App.css";
import "./styles/Gig.css";

function App() {

  const [gigs, setGigs] = useState([]);
  const URL ="https://makers-gig-backend.onrender.com/events";

  useEffect(() => {
    fetch(URL)
      .then((res) => res.json())
      .then((data) => {
        console.log("Fetched data:", data);
        setGigs(data);
      })
      .catch((error) => console.error("Error fetching data:", error));
  }, [URL]);

  useEffect(() => {
    console.log("Updated gigs:", gigs);
  }, [gigs]);


  return (
    <>
      {gigs.length > 0 ? (
        gigs.map((gigsData) => (
          <Gig key={gigsData.event_id} data={gigsData} />
        ))
      ) : (
        <p>Loading gigs...</p>
      )}
    </>
  );
}

export default App;

