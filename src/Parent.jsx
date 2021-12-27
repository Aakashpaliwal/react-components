import React, { useMemo } from "react";
import Child from "./Child";

// const Mchild = useMemo(() => <Child age={10} />, []);

const Parent = ({ name, age }) => {
  const MChild = React.memo(() => <Child age={age} />, []);
  return (
    <div>
      <h2>
        {name}, {age}
      </h2>
      <hr />
      <MChild />
    </div>
  );
};

export default Parent;
