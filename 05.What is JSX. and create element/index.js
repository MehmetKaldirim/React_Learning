"use.strict";
const h1 = document.createElement("h1");
h1.textContent = "Hello world";
h1.className = "header";
console.log(h1);

// <h1 class="header">

/* const element = <h1 className="header">This is JSX</h1>;
console.log(element);
 */
/*
{
    type: "h1", 
    key: null, 
    ref: null, 
    props: {className: "header", children: "This is JSX"}, 
    _owner: null, 
    _store: {}
}
 */

// JSX wecan return only one single parent element
//ReactDOM.render(element, document.getElementById("root"));

// but if i have a dive as one parent other sure i could put many children in it

const page = (
  <div>
    <h1 className="header">This is JSX</h1>
    <p>This is a paragraph</p>
    <p>This is the second par</p>
  </div>
);

ReactDOM.render(page, document.getElementById("root"));
