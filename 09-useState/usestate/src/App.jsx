import React, { useState } from "react";

const App = () => {
  const [val, setval] = useState(0);
  function inc() {
    setval(val + 1);
  }
    function dec() {
      setval(val - 1);
    }
    function res(){
      setval(0)
    }
  return (
    <div>
      <h1>{val}</h1>
      <button onClick={inc}>Increase</button>
      <button onClick={dec}>Decrease</button>
      <button onClick={res}>Reset</button>
    </div>
  );
};

export default App;
