import React, { memo } from "react";

const Child2 = memo((props) => {
  console.log("child2", props);
  return <div>This is Child2</div>;
});

export default Child2;
