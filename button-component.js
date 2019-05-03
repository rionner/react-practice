function Button() {
  // use state returns an array with two elements
  // first: a state object (getter)
  // second: an update function (setter)
  // here we destructure the two elements in the array into variables
  // by passing 0 as the first argument we initialize counter at 0
  const [counter, setCounter] = useState(0); 
  // do not invode the function - ie: no ()
  // only pass in the function reference, or
  // functions can be passed inline
  return <button onClick={() => setCounter(counter+1)}>{counter}</button>;
}
  
ReactDOM.render(
  <Button />,
  document.getElementById('mountNode')
);
