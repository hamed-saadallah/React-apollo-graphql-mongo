import React from 'react';

const  Page = ({children, ...props}) => (
  <div>    
    <h2 style={{color: props.colorTitle}}>{children.title}</h2>
    <img src={children.image} alt={children.title}/>
    <p style={{color: props.colorText, float:props.float}}>
      {children.description}
    </p>
  </div>
  );

export default Page;