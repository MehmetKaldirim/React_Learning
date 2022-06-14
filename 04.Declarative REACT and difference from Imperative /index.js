"use.strict";

//use imperative way first

/* const h1 = document.createElement("h1");
h1.textContent = "This is an imperative way to program";
h1.className = "header";
document.getElementById("root").append(h1); */

//and so easy with declarative way
ReactDOM.render(
  <h1 className="header">Hello, React!</h1>,
  document.getElementById("root")
);
