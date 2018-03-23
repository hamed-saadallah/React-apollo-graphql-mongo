import React, { Component } from 'react';

import NavBar from '../../components/NavBar';

class TopMenu extends Component {

  render(){
    const menuRight = [{id:3, title:'Login', path:'login'}, {id:4, title:'Signup', path:'signup'}];

    return (
      menuRight.map(item => 
        <NavBar color="red" float="right" key={item.id}>
          {item}
        </NavBar>
      )
    );
  }
}

export default TopMenu;
