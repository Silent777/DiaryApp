import React, { Component } from 'react';
import ItemContainer from './containers/itemContainer/ItemContainer';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

class App extends Component {
  render() {
    return (
      <div>
        <MuiThemeProvider>
            <ItemContainer />
        </MuiThemeProvider>
      </div>
    );
  }
}

export default App;
