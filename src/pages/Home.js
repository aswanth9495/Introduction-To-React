import React, { useCallback, useEffect, useLayoutEffect, useMemo, useRef, useState } from 'react';
import Hoc from '../Hoc';
import Heading from '../Heading';
import Hello from './Hello';

const Home = (props) => {
  // console.log(props);

  const inputRef = useRef();
  useLayoutEffect(()=>{
    console.log(inputRef.current.getBoundingClientRect())
  }, [])
  const [count, setCount] = useState(0);
  const handleIncrement = useCallback(() => {
    setCount(c => c + 1)
  }, [setCount]);
  const someSentence = "Blah Blah this is something random"; 

  const computeSentenceLength = useCallback((sentence) => {
    console.log("The compute function is running");
    return sentence.length;
  }, [])
  const sentenceLength = useMemo(() => computeSentenceLength(someSentence), [computeSentenceLength])
  return (
    <div>
      <Heading subtitle="this is subtitle"> Home </Heading>
      <h3> This is the home page </h3>
      <input ref={inputRef} name="first_name" type="text" />
      <Hello increment={handleIncrement} />
      <h2>{count}</h2>
      <h1>{sentenceLength}</h1>
    </div>
  );
};

export default Hoc(Home);