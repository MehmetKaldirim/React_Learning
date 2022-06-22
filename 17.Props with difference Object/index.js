"use.strict";
function App() {
  return (
    <div className="contacts">
      <Joke
        punchline="It’s hard to explain puns to kleptomaniacs because they always take things literally."
        isPun={true}
        upvotes={10}
        downvotes={2}
        comments={[{ author: "", body: "", title: "" }]}
      />
      <Joke
        setup="I got my daughter a fridge for her birthday."
        punchline="I can't wait to see her face light up when she opens it."
        isPun={false}
      />
      <Joke
        setup="How did the hacker escape the police?"
        punchline="He just ransomware!"
        isPun={true}
      />
      <Joke
        setup="Why don't pirates travel on mountain roads?"
        punchline="Scurvy."
        isPun={true}
      />
      <Joke
        setup="Why do bees stay in the hive in the winter?"
        punchline="Swarm."
        isPun={true}
      />
      <Joke
        setup="What's the best thing about Switzerland?"
        punchline="I don't know, but the flag is a big plus!"
        isPun={false}
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
