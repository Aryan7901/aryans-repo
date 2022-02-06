import React, { useEffect, useState } from "react";
import ChartBar from "./ChartBar";
import "./SortingVisualizer.css";
const SortingVisualizer = (props) => {
  function genArray(length, min, max) {
    const array = [];
    for (let i = 0; i < length; i++) {
      array.push(Math.floor(Math.random() * (max - min + 1) + min));
    }
    return array;
  }
  const [array, setArray] = useState([]);
  const [disabled, setDisabled] = useState(false);

  useEffect(() => {
    const initialArray = genArray(props.length, 5, 100);
    setArray(initialArray);
    setDisabled(false);
  }, [props.length]);
  useEffect(() => {
    props.onDisable(disabled);
  }, [disabled, props]);

  function bubbleSort() {
    const bars = document.getElementsByClassName("inner-filling");
    for (let i = 0; i < props.length; i++) {
      for (let j = 0; j < props.length - i - 1; j++) {
        setTimeout(() => {
          if (
            Number(bars[j].style.height.replaceAll("%", "")) >
            Number(bars[j + 1].style.height.replaceAll("%", ""))
          ) {
            const temp = bars[j].style.height;
            bars[j].style.height = bars[j + 1].style.height;
            bars[j + 1].style.height = temp;
          }
        }, 100);
      }
    }
  }
  const max = Math.max(...array);
  const SortHandler = () => {
    setDisabled(true);
  };
  const resetHandler = () => {
    setDisabled(false);
    const tempArray = genArray(props.length, 5, 100);
    setArray(tempArray);
  };
  if (disabled) {
    bubbleSort();
  }

  return (
    <React.Fragment>
      <div className="Chart">
        {array.map((value, index) => {
          return (
            <ChartBar
              key={index}
              value={value}
              max={max}
              length={props.length}
            />
          );
        })}
      </div>
      <button disabled={disabled} className="myButton" onClick={SortHandler}>
        Sort
      </button>
      <button className="myButton" onClick={resetHandler}>
        Reset
      </button>
    </React.Fragment>
  );
};
export default SortingVisualizer;
