// Incrementer
function Button() {
	const [counter, setCounter] = useState(0);
  const handleClick = () => setCounter(counter + 1);
	return (
    <button onClick={handleClick}>
      {counter}
    </button>
  );
}

function Display() {
  return (
    <div>... </div>
  );
}

function App() {
  return (
    <div>
      <Button />
      <Display />
    </div>
  );
}

ReactDOM.render(
  <App />,
  document.getElementById('mountNode'),
);

// other ways to render components 

// render with a DOM parent
// ReactDOM.render(
//   <div>
//     <Button />
//     <Display />
//   </div>,
//   document.getElementById('mountNode'),
// );

// Render without a DOM parent, verbose
// ReactDOM.render(
//   <React.Fragment>
//     <Button />
//     <Display />
//   </React.Fragment>,
//   document.getElementById('mountNode'),
// );

// Render without a DOM parent, shorthand
// ReactDOM.render(
//   <>
//     <Button />
//     <Display />
//   </>,
//   document.getElementById('mountNode'),
// );

// ReactDOM.render(
//   [<Button />, <Display />], 
//   document.getElementById('mountNode'),
// );