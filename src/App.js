import { useState } from "react";

function App() {
  const [toDo, setToDo] = useState("");
  const [toDos, setToDos] = useState([]);
  const onChange = (event) => setToDo(event.target.value);
  const onSubmit = (event) => {
    event.preventDefault(); // submit으로 인한 새로고침 방지
    if(toDo === "") { // toDo에 빈 값이 들어왔을 때
      return; // submit 함수 killing
    }
    setToDos(currentArray => [toDo, ...currentArray]); // ...<array> === array의 원소들
    setToDo(""); // input값 비우기
  }
  return (
    <div>
      <h1>My To Dos ({toDos.length})</h1> {/* toDo 갯수 표기 */}
      <form onSubmit={onSubmit}>
        <input
          value={toDo}
          onChange={onChange}
          type="text"
          placeholder="Write your to do..."
        />
        <button>Add To Do</button>
      </form>
      <hr />
      {toDos.map((item, index) => ( // text가 들어있는 array에서
        <li key={index}>{item}</li> // list array로 각 key 설정하여 mapping
      ))}
    </div>
  );
}

export default App;