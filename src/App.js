import React, { Component } from 'react';
import { generatePalette } from './colorHelpers';
import Palette from './Palette';
import seedColors from './seedColors';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Palette palette={generatePalette(seedColors[1])}/>
      </div>
    );
  }
  
}

export default App;
