import React, { useState } from "react";
import Gig from "./components/Gig";
import "./styles/App.css";
import "./styles/Gig.css";

function App() {
  return (
    <div>
      <Gig 
      artistName="Jamie T"
      imageSrc="./src/assets/jamie-t.jpeg"
      imageAlt="close up of Jamie T perfomring"
      description="From anthems like 'Sheila' to the heartfelt ballads of 'Emily's Heart,
      prepare to be taken on a musical journey like no other. Don't miss your chance to witness Jamie T
      in action – grab your tickets now!"
      eventTime="7pm 21/08/24"
      location="London"

      />

<Gig 
      artistName="Bloc Party"
      imageSrc="./src/assets/bloc-party.jpg"
      imageAlt="band one behind another, leaning against a white wall"
      description="Bloc Party delivers a one-of-a-kind experience that will leave you buzzing for days.
      From iconic hits like 'Helicopter' to the latest tracks "
      eventTime="7pm 3/11/24"
      location="London"
      />
    </div>
  );
}

export default App;

