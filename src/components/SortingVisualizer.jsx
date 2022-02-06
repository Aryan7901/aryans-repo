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
  useEffect(() => {
    const initialArray = genArray(props.length, 5, 100);
    setArray(initialArray);
  }, [props.length]);
  const max = Math.max(...array);
  const swap = (array, index1, index2) => {
    const temp = array[index1];
    array[index1] = array[index2];
    array[index2] = temp;
  };
  const SortHandler = () => {
    const tempArray = [...array];
    for (let i = 0; i < props.length; i++) {
      for (let j = 0; j < props.length - i - 1; j++) {
        if (tempArray[j] > tempArray[j + 1]) {
          swap(tempArray, j, j + 1);
          setArray(tempArray);
        }
      }
    }
    setArray(tempArray);
  };
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
      <button className="myButton" onClick={SortHandler}>
        Sort
      </button>
    </React.Fragment>
  );
};
export default SortingVisualizer;
