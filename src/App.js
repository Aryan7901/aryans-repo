import { useEffect, useRef, useState } from "react";
import SortingVisualizer from "./components/SortingVisualizer";
import "./App.css";
function genArray(length, min, max) {
  const array = [];
  for (let i = 0; i < length; i++) {
    array.push(Math.floor(Math.random() * (max - min + 1) + min));
  }
  return array;
}
function App() {
  const [array, setArray] = useState([]);
  const [sorting, setSorting] = useState(false);
  const [length, setLength] = useState(30);
  const [i, setI] = useState(0);
  const [j, setJ] = useState(0);
  const timer = useRef();
  const reset = () => {
    setI(0);
    setJ(0);
    setSorting(false);
  };
  const resetHandler = () => {
    setArray(genArray(length, 5, 100));
    clearTimeout(timer.current);
    reset();
  };
  const sortHandler = () => {
    if (i === length - 1 && j === length - i - 1) {
      reset();
    } else {
      setSorting(true);
    }
    const copy = [...array];
    if (j === length - i - 1) {
      setJ(0);
      setI((i) => i + 1);
    } else if (i < length - 1 && j < length - i - 1) {
      if (copy[j] > copy[j + 1]) {
        const temp = copy[j];
        copy[j] = copy[j + 1];
        copy[j + 1] = temp;
        setArray(copy);
        setJ((j) => j + 1);
      } else {
        setJ((j) => j + 1);
      }
    }
  };
  useEffect(() => {
    setArray(genArray(length, 5, 100));
    clearTimeout(timer.current);
    reset();
  }, [length]);
  useEffect(() => {
    if (sorting) {
      clearTimeout(timer.current);
      timer.current = setTimeout(() => {
        sortHandler();
      }, 3);
    }
  }, [i, j, sorting]);
  const onChangeHandler = (event) => {
    setLength(+event.target.value);
  };

  return (
    <div className="outer">
      <SortingVisualizer
        length={length}
        array={array}
        bubblesort={sortHandler}
        reset={resetHandler}
      />
      ;
      <div className="input">
        <input
          type="range"
          min="5"
          max="1000"
          value={length}
          id="myInput"
          onChange={onChangeHandler}
        />
        <label htmlFor="myInput">Array length :{length} </label>
      </div>
    </div>
  );
}

export default App;
