import React, { useEffect, useState } from "react";
import ColorfulMessage from "./components/ColofulMessage";

const App = () => {
  const [num, setNum] = useState(0);
  const [faceShowFlag, setFaceShowFlag] = useState(false);

  const onClickCountUp = () => {
    setNum(num + 1);
  };
  const onClickSwitchShowFlag = () => {
    setFaceShowFlag(!faceShowFlag);
  };

  useEffect(() => {
    if (num > 0) {
      if (num % 3 === 0) {
        faceShowFlag || setFaceShowFlag(true);
      } else {
        faceShowFlag && setFaceShowFlag(false);
      }
    }
    /* eslint-disable-next-line react-hooks/exhaustive-deps */
  }, [num]);

  return (
    <>
      <h1 style={{ color: "red" }}>Hello</h1>
      <ColorfulMessage color="blue">How are you?</ColorfulMessage>
      <ColorfulMessage color="pink">I am perfect!</ColorfulMessage>
      <button onClick={onClickCountUp}>Count Up!</button>
      <br />
      <button onClick={onClickSwitchShowFlag}>on/off</button>
      <p>{num}</p>
      {faceShowFlag && <p>( ^ω^ )</p>}
    </>
  );
};

export default App;
