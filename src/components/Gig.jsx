const Gig = () => {
  return (
    <div className="gig-listing">
      <h3 className="artist-name">Jamie T</h3>
      <img src="./src/assets/jamie-t.jpeg" alt="close up of Jamie T perfomring" className="artist-img"/>
      <p className="description">From anthems like "Sheila" to the heartfelt ballads of "Emily's Heart," 
      prepare to be taken on a musical journey like no other. Don't miss your chance to witness Jamie T
      in action – grab your tickets now!</p>
      <p className="event-time">7pm 21/08/24</p>
      <p className="event-location">London</p>
      <button className="ticket-btn">Get tickets</button>
    </div>
  );
};

export default Gig;

