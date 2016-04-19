import React from 'react';
import Card from '../components/card';

class Deck extends React.Component {
  render() {
    return <div className="deck">
      <Card />
    </div>;
  }
}

// Export dependencies like this:
export default Deck;
