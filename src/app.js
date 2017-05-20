'use strict';
const React = require('react');
const ReactDOM = require('react-dom');

console.log('running app.js');

class App extends React.Component {
  render() {
    return (
      <div>
        <h1>hi react</h1>
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('app'));
