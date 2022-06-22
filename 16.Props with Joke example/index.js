"use.strict";
function App() {
  return (
    <div className="contacts">
      <Joke punchline="I can't wait to see her face light up when she opens it." />
      <Joke
        setup="How did the hacker escape the police?"
        punchline="He just ransomware!"
      />
      <Joke
        setup="Why don't pirates travel on mountain roads?"
        punchline="Scurvy."
      />
      <Joke
        setup="Why do bees stay in the hive in the winter?"
        punchline="Swarm."
      />
    </div>
  );
}

function Joke(p) {
  return (
    <div className="contact-card">
      <h3 style={{ display: p.setup ? "block" : "none" }}>Setup:{p.setup}</h3>

      <p>Punchline:{p.punchline}</p>
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById("root"));

//</div>{p.setup && <h3>Setup:{p.setup}</h3>}
