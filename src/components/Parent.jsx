import React from "react";
import Child1 from "./Child1";
import Child2 from "./Child2";

const Parent = () => {
  const [count, setCount] = React.useState(0);
  const [name, setName] = React.useState("");
  const [userName, setUserName] = React.useState("");

  const incrementHandler = () => {
    setCount((count) => count + 1);
  };

  return (
    <div>
      <button onClick={incrementHandler}>{count}</button>
      <input type="text" onChange={(e) => setName(e.target.value)} />
      <input type="text" onChange={(e) => setUserName(e.target.value)} />
      <Child1 name={name} />
      <Child2 userName={userName} />
    </div>
  );
};

export default Parent;
