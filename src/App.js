import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import { generatePalette } from './colorHelpers';
import Palette from './Palette';
import seedColors from './seedColors';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Switch>
          <Route exact path="/" render={() => <h1>Palette List Here</h1>}/>
          <Route exact path="/palette/:id" render={() => <h1>Palette ID's Here</h1>}/>
        </Switch>
        {/* <Palette palette={generatePalette(seedColors[1])}/> */}
      </div>
    );
  }
  
}

export default App;
