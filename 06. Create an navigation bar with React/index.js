"use.strict";

/* const page = (
  <div>
    <h1 className="header">This is JSX</h1>
    <p>This is a paragraph</p>
    <p>This is the second par</p>
  </div>
);

ReactDOM.render(page, document.getElementById("root"));
 */

/* 
Challenge: 

Create a navbar in JSX:
    - Use the semantic `nav` element as the parent wrapper
    - Have an h1 element with the brand name of your "website"
    - Insert an unordered list for the other nav elements
        - Inside the `ul`, have three `li`s for "Pricing",
        "About", and "Contact"
    - Don't worry about styling yet - it'll just be plain-looking HTML for now
*/
const navbar = (
  <nav>
    <h1>Math`s Bistro</h1>
    <ul>
      <li>Menu</li>
      <li>About Me</li>
      <li>Contact</li>
    </ul>
  </nav>
);

ReactDOM.render(navbar, document.getElementById("root"));
