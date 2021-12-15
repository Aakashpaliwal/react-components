import React, { useEffect } from "react";
import Progress from "./Progress";

const ProgressContainer = () => {
  const [percentage, setPercentage] = React.useState(95);

  const onCompleteHandler = () => {
    setPercentage(100);
  };

  useEffect(() => {
    let timer = null;
    timer = setInterval(() => {
      setPercentage((percentage) => percentage + 1);
      if (percentage === 100) {
        clearInterval(timer);
      }
    }, 1000);
    return () => clearInterval(timer);
  }, [percentage]);

  return (
    <div>
      <Progress
        size="lg"
        visible={true}
        percentage={percentage}
        onCompleteHandler={onCompleteHandler}
      />
    </div>
  );
};

export default ProgressContainer;
