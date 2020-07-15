import React from 'react';

const Heading = ({ subtitle, children }) => {
  return (
    <div> 
    <h1>
      {children}
      </h1> 
      <h3>
      {subtitle}
      </h3> 
      </div>
  );
}

export default Heading; 