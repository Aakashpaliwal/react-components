import React, { useEffect, useState } from "react";
import { Fragment } from "react";
import "./stopwatch.scss";

const Stopwatch = () => {
  const [isActive, setIsActive] = useState(false);
  const [isPaused, setIsPaused] = useState(true);
  const [time, setTime] = useState(0);
  const [min, setMin] = useState(1);
  const [max, setMax] = useState(10);

  React.useEffect(() => {
    let interval = null;

    if (isActive && isPaused === false) {
      interval = setInterval(() => {
        setTime((time) => time + 10);
      }, 10);
    } else {
      clearInterval(interval);
    }
    return () => {
      clearInterval(interval);
    };
  }, [isActive, isPaused]);

  useEffect(() => {
    // console.log(("0" + (Math.floor(time / 1000) % 60)).toString().slice(-2));
    // console.log(Math.random() * max + min);
    // var array = [1, 2, 3, 4, 5, 6, 7, 10, 9, 8, 23];
    // var done = false;
    // while (!done) {
    //   done = true;
    //   for (var i = 1; i < array.length; i += 1) {
    //     if (array[i - 1] > array[i]) {
    //       done = false;
    //       var tmp = array[i - 1];
    //       array[i - 1] = array[i];
    //       array[i] = tmp;
    //     }
    //   }
    // }
    // // return array;
    // console.log(array);
    const arr = [4, 56, 5, 3, 34, 37, 89, 57, 98];
    const sortWithReduce = (arr) => {
      return arr.reduce((acc, val) => {
        let ind = 0;
        while (ind < arr.length && val < arr[ind]) {
          ind++;
        }
        acc.splice(ind, 0, val);
        return acc;
      }, []);
    };
    console.log(sortWithReduce(arr));
  }, [time]);

  const handleStart = () => {
    setIsActive(true);
    setIsPaused(false);
  };

  const handlePauseResume = () => {
    setIsPaused(!isPaused);
  };

  const handleReset = () => {
    setIsActive(false);
    setTime(0);
  };

  return (
    <Fragment>
      <div className="stopwatch_container">
        <span className="digits">
          {("0" + Math.floor((time / 60000) % 60)).slice(-2)}:
        </span>
        <span className="digits">
          {("0" + Math.floor((time / 1000) % 60)).slice(-2)}.
        </span>
        <span className="digits mili-sec">
          {("0" + ((time / 10) % 100)).slice(-2)}
        </span>
      </div>
      <div className="button_container">
        <button className="stopwatch_btn_start" onClick={handleStart}>
          Start
        </button>

        <button className="stopwatch_btn_start" onClick={handlePauseResume}>
          pause
        </button>

        <button className="stopwatch_btn" onClick={handleReset}>
          Stop
        </button>
      </div>
    </Fragment>
  );
};

export default Stopwatch;
