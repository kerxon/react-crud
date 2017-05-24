'use strict';
const React = require('react');
const ReactDOM = require('react-dom');
import Main from './components/Main';

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
