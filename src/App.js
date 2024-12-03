import { useState, useEffect } from "react";

function App() {
  const [counter, setValue] = useState(0);
  const onClick = () => setValue((prev) => prev + 1);
  console.log("I run all the time."); // state가 변경될 때마다 전체 코드가 실행되면서 매번 렌더
  const iRunOnlyOnce = () => {
    console.log("I run only once.");
  }
  useEffect(iRunOnlyOnce, []); // useEffect가 iRunOnlyOnce를 처음 로드 시에만 렌더
  return (
    <div>
      <h1>{counter}</h1>
      <button onClick={onClick}>Click me</button>
    </div>
  );
}

export default App;
