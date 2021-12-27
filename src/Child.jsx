import React, { useMemo } from "react";

const Child = ({ age }) => {
  console.log("childage=", age);
  return <div>child - {age}</div>;
};

export default Child;
