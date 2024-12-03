import Button from "./Button";
import styles from "./App.module.css";

function App() {
  return (
    <div>
      <h1 className={styles.title}>Welcome back!</h1> {/* 같은 class명을 사용하더라도 뒤에 랜덤값을 붙여 매번 다른 클래스를 생성해냄 */}
      <Button text={"Continue"}/>
    </div>
  );
}

export default App;
