import { useState, useEffect } from "react";

function Hello() {
  useEffect(() => {
    console.log("I'm here.");
  }, []); // useEffect 사용하여 특정 조건에만 나타나고 없어지도록 설정
  return <h1>Hello</h1>;
}

function App() {
  const [showing, setShowing] = useState(false);
  const onClick = () => setShowing((prev) => !prev);
  return (
    <div>
      {showing ? <Hello /> : null} {/* showing이 true일 때에만 console.log("I'm here."); */}
      <button onClick={onClick}>{showing ? "Hide" : "Show"}</button>
    </div>
  )
}

export default App;