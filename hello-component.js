// example button component
function Hello() {
	return <div>Hello React!</div>;
  // compiles to:
  // return React.createElement('div', null, "Hello React!");
}

ReactDOM.render(
  <Hello />, 
  // React.createElement(Hello);
  document.getElementById('mountNode'),
);
