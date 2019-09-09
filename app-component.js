
function App() {
	const [counter, setCounter] = useState(0);
	const incrementCounter = () => setCounter(counter + 1);
	return (
		<div>
      <Button onClickFunction={incrementCounter}/>
      <Display message={counter}/>
    </div>
	);
}

function Button(props) {
	return (
		<button onClick={props.onClickFunction}>
			+1
		</button>
	);
}

function Display(props) {
	return (
		<div>
			{props.message}
		</div>
	)
}

// Render with a parent
ReactDOM.render(
	<App />,
	document.getElementById('mountNode')
);
