"use.strict";

let jokesData = [
  {
    setup: "I got my daughter a fridge for her birthday.",
    punchline: "I can't wait to see her face light up when she opens it.",
  },
  {
    setup: "How did the hacker escape the police?",
    punchline: "He just ransomware!",
  },
  {
    setup: "Why don't pirates travel on mountain roads?",
    punchline: "Scurvy.",
  },
  {
    setup: "Why do bees stay in the hive in the winter?",
    punchline: "Swarm.",
  },
  {
    setup: "What's the best thing about Switzerland?",
    punchline: "I don't know, but the flag is a big plus!",
  },
];

function App() {
  const jokeElements = jokesData.map((joke) => (
    <Joke setup={joke.setup} punchline={joke.punchline} />
  ));
  return <div>{jokeElements}</div>;
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
