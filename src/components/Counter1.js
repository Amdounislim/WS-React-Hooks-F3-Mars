import React, { useState, useEffect } from "react";

const Counter1 = () => {
  const [count, setCount] = useState(0);
  const [bol, setBol] = useState(true)

  useEffect(() => {
    console.log("useEffect");
  }, [(bol&&count)]);

  return (
    <div>
      <h1>Counter 1</h1>
      <h3>{count}</h3>
      <button onClick={() => setCount(count + 1)}>+</button>
      <button onClick={() => setCount(count - 1)}>-</button>
      <button onClick={() => setCount(0)}>reset</button>
      <button onClick={()=>setBol(!bol)}>switch</button>
    </div>
  );
};

export default Counter1;
