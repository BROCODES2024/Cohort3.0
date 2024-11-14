import React, { useState } from "react";

function App() {
  return (
    <div>
      <Toggle />
    </div>
  );
}

function Toggle() {
  const [isVisible, setIsVisible] = useState(true);

  function toggle() {
    setIsVisible((isVisible) => !isVisible);
  }

  return (
    <div>
      <button onClick={toggle}>Toggle Message</button>
      <br />
      {isVisible ? "Hi" : null}
    </div>
  );
}

export default App;
