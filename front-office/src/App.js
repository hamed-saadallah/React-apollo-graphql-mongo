import React, { Component } from 'react';
import {  BrowserRouter as Router } from 'react-router-dom';

import TopMenu from './containers/TopMenu';
import BlockContainer from './containers/BlockContainer';
import withBlocks from './hocs/withBlocks';

class App extends Component {
  
  render() {
    const EnhancedTopMenu = withBlocks(TopMenu);
    const EnhancedBlocks = withBlocks(BlockContainer);
    return (
        <div className="App">
          <div className="rightMenu">
            <Router>
                <EnhancedTopMenu/> 
            </Router>
          </div>
          <br/>
          <div>
            <EnhancedBlocks/>
          </div>
        </div>
    );
  }
}

export default App;
