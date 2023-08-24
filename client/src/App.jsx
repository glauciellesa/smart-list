import { useState } from "react";
import "./App.css";

function App() {
  const [count, setCoun] = useState(0);

  const contValue = () => {
    setCoun(count + 1);
  };

  return (
    <>
      <div>
        <h1>Shopping List</h1>
        <button onClick={contValue}>{count}</button>
      </div>
    </>
  );
}

export default App;
