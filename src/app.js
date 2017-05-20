'use strict';
const React = require('react');
const ReactDOM = require('react-dom');
const Main = require('./components/Main');

class App extends React.Component {
  render() {
    return (
      <div>
        <Main />
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('app'));
