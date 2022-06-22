function App() {
  return (
    <div className="contacts">
      <Contact
        img="./Card1.png"
        name="Mr. Whiskerson"
        phone="(212) 555-1234"
        email="mr.whiskaz@catnap.meow"
      />
      <Contact
        img="./Card2.png"
        name="Fluffykins"
        phone="(212) 555-2345"
        email="fluff@me.com"
      />
      <Contact
        img="./Card3.png"
        name="Felix"
        phone="(212) 555-4567"
        email="thecat@hotmail.com"
      />
      <Contact
        img="./Card4.png"
        name="Pumpkin"
        phone="(0800) CAT KING"
        email="pumpkin@scrimba.com"
      />
    </div>
  );
}

function Contact({ img, name, phone, email }) {
  return (
    <div className="contact-card">
      <img src={img} />
      <h3>{name}</h3>
      <div className="info-group">
        <img src="./images/phone-icon.png" />
        <p>{phone}</p>
      </div>
      <div className="info-group">
        <img src="./images/mail-icon.png" />
        <p>{email}</p>
      </div>
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById("root"));
