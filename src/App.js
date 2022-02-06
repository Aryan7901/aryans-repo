import { useRef, useState } from "react";
import SortingVisualizer from "./components/SortingVisualizer";
import "./App.css";
function App() {
  const inputRef = useRef();
  const [length, setLength] = useState(5);
  const onChangeHandler = () => {
    setLength(inputRef.current.value);
  };
  return (
    <div className="outer">
      <SortingVisualizer length={length} />;
      <div className="input">
        <input
          type="range"
          min="5"
          max="1000"
          ref={inputRef}
          onChange={onChangeHandler}
          id="myInput"
        />
        <label htmlFor="myInput">Array length :{length} </label>
      </div>
    </div>
  );
}

export default App;
