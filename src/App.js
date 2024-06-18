import { React, useState } from "react";
import "./App.css";

function App() {
  const [val, setval] = useState(0);
  const [boxesToDisplay, setBoxesToDisplay] = useState([]);
  function handleChange(event) {
    const inp = event.target.value;
    setval(inp);
    console.log(val);
    console.log(typeof val);
    // if (!Number.isNaN(parseInt(inp))) {
    //   window.alert("invalid input");
    // }
  }

  const renderBoxes = () => {
    const boxes = [];
    for (let i = 1; i <= val; i++) {
      const boxStyle = {
        backgroundColor: "blue",
        textAlign: "center",
        padding: "20px",
        margin: "10px",
        display: "inline-block",
      };

      boxes.push(
        <div key={i} style={boxStyle}>
          <p style={{ margin: 0 }}>box {i}</p>
        </div>
      );
      setBoxesToDisplay(boxes);
    }
    return boxes;
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Enter the number of boxes</h1>
        <input onChange={handleChange}></input>
        <button onClick={renderBoxes}>Submit</button>
        <div>{boxesToDisplay}</div>
      </header>
    </div>
  );
}

export default App;
