import { useRef, useState } from "react";
import SortingVisualizer from "./components/SortingVisualizer";
import "./App.css";
function App() {
  const inputRef = useRef();
  const [length, setLength] = useState(5);
  const [disabled, setDisabled] = useState(false);
  const onChangeHandler = () => {
    setLength(inputRef.current.value);
  };
  const onDisable = (value) => {
    setDisabled(value);
  };
  return (
    <div className="outer">
      <SortingVisualizer length={length} onDisable={onDisable} />;
      <div className="input">
        <input
          type="range"
          min="5"
          max="1000"
          ref={inputRef}
          onChange={onChangeHandler}
          id="myInput"
          disabled={disabled}
        />
        <label htmlFor="myInput">Array length :{length} </label>
      </div>
    </div>
  );
}

export default App;
