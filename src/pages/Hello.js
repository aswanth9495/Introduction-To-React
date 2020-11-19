import React, { useRef, useState } from 'react';

export const Hello = React.memo(({ increment }) => {
  const renders = useRef(0); 
  console.log(renders.current++)
  return (
    <button onClick={increment}>
      Hello
    </button>
  )
}
);
export default Hello;