function App() {
  const [count, setCount] = React.useState(0);
  /**
   * Challenge: Set up state to track our count (initial value is 0)
   */

  function iteratePlus() {
    //setCount(count + 1);
    setCount((prevCount) => prevCount + 1);
  }

  function iterateMinus() {
    //setCount(count - 1);
    setCount((prevCount) => prevCount - 1);
  }

  return (
    <div className="counter">
      <button className="counter--minus" onClick={iterateMinus}>
        –
      </button>
      <div className="counter--count">
        <h1>{count}</h1>
      </div>
      <button className="counter--plus" onClick={iteratePlus}>
        +
      </button>
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById("root"));
