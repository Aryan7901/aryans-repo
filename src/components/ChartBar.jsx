import "./ChartBar.css";
const ChartBar = (props) => {
  const height = Math.floor((props.value / props.max) * 100) + "%";
  const width = Math.ceil((1 / props.length) * 100) + "%";
  return (
    <div className="outer-container" style={{ width: width }}>
      <div className="inner-filling" style={{ height: height }}></div>
    </div>
  );
};
export default ChartBar;
