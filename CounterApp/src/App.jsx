import React, { useState } from "react";

const App = () => {
  const [counter, setCounter] = useState(15);

  const addValue = () => setCounter(counter + 1);
  const removeValue = () => setCounter(counter - 1);

  return (
    <div className="container">
      <h1>Counter Value: {counter}</h1>

      <div className="button-container">
        <button onClick={addValue} className="add-button">
          Add Value (+)
        </button>

        <button onClick={removeValue} className="remove-button">
          Remove Value (-)
        </button>
      </div>
    </div>
  );
};

export default App;
