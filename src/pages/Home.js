import React from 'react';
import Hoc from '../Hoc';

const Home = (props) => {
  console.log(props);

  return (
    <div>
      <h1> Home </h1>
      <h3> This is the home page </h3>
    </div>
  );
};

export default Hoc(Home);