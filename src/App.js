import { useState, useEffect } from "react";

function App() {
  const [counter, setValue] = useState(0);
  const [keyword, setKeyword] = useState("");

  const onClick = () => setValue((prev) => prev + 1);
  const onChange = (event) => setKeyword(event.target.value);

  console.log("I run all the time.");
  useEffect(() => {
    console.log("CALL THE API....");
  }, []); // 변화 기준점이 없어서 한 번만 실행
  useEffect(() => {
    console.log("SEARCH FOR", keyword);
  }, [keyword]); // 처음과, keyword가 변화할 때에만 해당 코드 실행, 여러 개도 가능

  return (
    <div>
      <input
        value={keyword}
        onChange={onChange}
        type="text"
        placeholder="Search here..."
      />
      <h1>{counter}</h1>
      <button onClick={onClick}>Click me</button>
    </div>
  );
}

export default App;
