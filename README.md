# react-practice
## basic concepts

### why react
- library not a framework - it is lightweight - not a full solution
- allows focus on user interface
- declarative - describes user interfaces, model UI and state
  - html is declarative for static content
  - react is declarative for dynamic data
- virtual dom is friendlier than the DOM
- "just javascript" - small api to learn
- react native applications

### basic concepts
- components 
  - vanilla javascript functions
  - input: props, state
  - output: ui
  - reusable
  - composable
  - can manage a private state
- reactive updates
  - reacts to the changes in a component state
  - takes updates to the browser
- virtual views in memory
  - generate HTML using JavaScript
  - no HTML template language
  - tree reconciliation 
    - virtual dom can compare versions of the UI in memory and update only what is needed

### components
- function components & class components
  - can be stateful
  - can have side-effects
  - can be purely presentational
  - prefer function components over class components because they are simpler
  - can be compared to regular functions
  - input > props & state
    - props 
      - explicit, similar to the attributes an HTML element can have
      - immutable
    - state 
      - internal, auto-reflect changes in the browser
      - can be changed
  - output > jsx (DOM)
- function components 
  - simpler
- class components
  - more powerful
- JSX is not HTML, but it the pre-compile code look very close to actual HTMl
- component name must start with an uppercase letter to avoid collision with HTML element names

