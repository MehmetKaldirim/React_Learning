function App() {
  const [contact, setContact] = React.useState({
    firstName: "John",
    lastName: " Doemy",
    phone: "+1 (719) 555-1212",
    email: "itsmyrealname@example.com",
    isFavorite: true,
  });

  let butIcon = contact.isFavorite ? "Dolu" : "Bosbos";

  function toggleFavorite() {
    setContact((prevContact) => {
      return {
        ...prevContact,
        isFavorite: !prevContact.isFavorite,
      };
    });
  }

  return (
    <main>
      <article className="card">
        <img src="./images/user.png" className="card--image" />
        <div className="card--info">
          <button className="card--favorite" onClick={toggleFavorite}>
            {butIcon}
          </button>
          <h2 className="card--name">
            {contact.firstName}
            {contact.lastName}
          </h2>
          <p className="card--contact">{contact.phone}</p>
          <p className="card--contact">{contact.email}</p>
        </div>
      </article>
    </main>
  );
}

ReactDOM.render(<App />, document.getElementById("root"));
