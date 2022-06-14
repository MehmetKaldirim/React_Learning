/**
Challenge: find out what happens if we try to append JSX
to our div#root using .append() instead of ReactDOM

1. Create a sample page in JSX (≥ 4 elements) and save them in a variable
2. Select the div with the ID of "root" and use `.append()` to append
   your JSX
3. See if you can guess what will show up in the browser before running
   the code
4. See if you can explain what actually shows up in the browser
 */

const page = (
  <div>
    <h1>My first website in React</h1>
    <h3>Reasons I love React is she is brunnet</h3>
    <ol>
      <li>It`s composable</li>
      <li>It`s declarative</li>
      <li>It`s hireable skill</li>
      <li>It`s actively maintained</li>
    </ol>
  </div>
);

ReactDOM.render(page, document.getElementById("root"));
