import React from 'react';
import Hoc from '../Hoc';
import Heading from '../Heading';

const Home = (props) => {
  console.log(props);
  return (
    <div>
      <Heading subtitle="this is subtitle"> Home </Heading>
      <h3> This is the home page </h3>
    </div>
  );
};

export default Hoc(Home);