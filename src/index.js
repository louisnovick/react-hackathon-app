// Import NPM dependencies like this:
import React from 'react';
import ReactDOM from 'react-dom';

// Import styles like this:
import './styles/app.scss';

// Import dependencies like this:
import Deck from './components/deck';

class App extends React.Component {
  render() {
    return (
      <Deck />
    );
  }
}

ReactDOM.render(<App />, document.getElementById('app'));
