import React, { useEffect } from "react";
import Counter from "./Counter";

const CounterContainer = () => {
  const [counterData, setCounterData] = React.useState([
    {
      id: 1,
      value: 0,
    },
    {
      id: 2,
      value: 0,
    },
    {
      id: 3,
      value: 0,
    },
  ]);

  const [total, setTotal] = React.useState(0);

  const increment = (id) => {
    let newCounterData = [...counterData];
    newCounterData[id - 1].value++;
    setCounterData(newCounterData);
  };

  const decrement = (id) => {
    let newCounterData = [...counterData];
    newCounterData[id - 1].value--;
    setCounterData(newCounterData);
  };

  useEffect(() => {
    const total = counterData.reduce(function (acc, curr) {
      return acc + +curr.value;
    }, 0);
    setTotal(total);
  }, [counterData]);

  useEffect(() => {
    console.log(
      new Date().toLocaleTimeString(),
      new Date().getDate(),
      new Date().getMonth() + 1,
      new Date().getFullYear(),
      new Date().getTime()
    );

    // const timer = setInterval(() => {
    //   console.log(new Date().toLocaleTimeString());
    // }, 1000);

    // return () => {
    //   clearInterval(timer);
    // };
  }, []);

  return (
    <div>
      {counterData.map((counter, index) => (
        <Counter
          id={counter.id}
          value={counter.value}
          key={counter.id}
          increment={increment}
          decrement={decrement}
          width={200}
        />
      ))}
      <hr />
      <p>Total : {total}</p>
    </div>
  );
};

export default CounterContainer;
