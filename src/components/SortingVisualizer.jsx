import React from "react";

import ChartBar from "./ChartBar";
import "./SortingVisualizer.css";
const SortingVisualizer = (props) => {
  const max = Math.max(...props.array);
  const sortHandler = () => {
    props.bubblesort();
  };
  const resetHandler = () => {
    props.reset();
  };
  return (
    <React.Fragment>
      <div className="Chart">
        {props.array.map((value, index) => {
          return (
            <ChartBar
              key={index}
              value={+value}
              max={max}
              length={props.length}
              index={index}
            />
          );
        })}
      </div>
      <button className="myButton" onClick={sortHandler}>
        Sort
      </button>
      <button className="myButton" onClick={resetHandler}>
        Reset
      </button>
    </React.Fragment>
  );
};
export default SortingVisualizer;
