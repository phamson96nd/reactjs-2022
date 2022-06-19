import Content from "./Content";
import {useState} from "react";

function App() {
  const [isShow, setShow] = useState(false);

  return (
    <div className="App">
      <button onClick={() => setShow(!isShow)}>Click me!</button>

      {isShow && <Content />}
    </div>
  );
}

export default App;
