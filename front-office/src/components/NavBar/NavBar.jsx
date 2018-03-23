import React from 'react';
import { Link } from 'react-router-dom';

const  NavBar = ({children, ...props}) => (
      <Link key ={children.id} to={`/${children.path}`}>
        <span style={{color: props.color, float:props.float}}>
          {children.title}|
        </span>
      </Link>
  );

export default NavBar ;