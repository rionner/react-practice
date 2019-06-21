// example component
// components must start with an uppercase letter
// a lower-case component name is interpreted as plain HTML
function Hello() {
	return <div>Hello React!</div>;
  // compiles to:
  // return React.createElement('div', null, "Hello React!");
  // .createElement arguments: element, attributes, child of the element
}

ReactDOM.render(
  <Hello />, 
  // the jsx equivalent to React.createElement(Hello);
  document.getElementById('mountNode'),
);