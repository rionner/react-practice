// Button functionality
function Button() {
  // use state returns an array with two elements
  // first: a state object (getter)
  // second: an update function (setter)
  // here we destructure the two elements in the array into variables
  // by passing 0 as the first argument we initialize counter at 0
  const [counter, setCounter] = useState(0);

  const handleClick = () => setCounter(counter + 1);

  // do not invode the function - ie: no ()
  // only pass in the function reference, or
  // functions can be passed inline
  // when breaking into multiple lines, parens wrap the function
  // because we are not returning an object, but a function call
  return (
    <button onClick={handleClick}>
      {counter}
    </button>
  );
}

// Display
function Display() {
  return (
    <div></div>
  )
}

// Render with a parent
ReactDOM.render(
  <div>
    <Button />
    <Display />
  </div>,
  document.getElementById('mountNode')
);

or 

// No new DOM parent
ReactDOM.render(
  <React.Fragment>
    <Button />
    <Display />
  </React.Fragment>,
  document.getElementById('mountNode')
);
ReactDOM.render(
  <>
    <Button />
    <Display />
  </>,
  document.getElementById('mountNode')
);
