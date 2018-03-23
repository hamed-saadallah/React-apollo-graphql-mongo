import React, { Component } from 'react';
import { get } from 'lodash';

import NavBar from '../../components/NavBar';

class TopMenu extends Component {

  render(){
    const blocksList = get(this.props, 'data.viewer.blocksQuery.blocks', []);
    return (
      blocksList.map(item => 
        <NavBar color="red" float="left" key={item._id}>
          {item}
        </NavBar>
      )
    );
  }
}

export default TopMenu;
