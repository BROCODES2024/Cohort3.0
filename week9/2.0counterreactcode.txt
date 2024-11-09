import { useEffect, useState } from "react";
function App() {
  return (
    <div>
      <Counter></Counter>
      {/* Counter is a function, and these functions need to be rendered inside the App */}
    </div>
  );
}
//mounting(running for the 1st time),re-rendering,unmounting
function Counter() {
  // converting to state variable
  const [count, setCount] = useState(0);

  //no matter how many renders happen setinterval runs only once hences flashes in the clock stops
  useEffect(function () {
    setInterval(() => {
      // setCount((count) => count + 1); this is equivalent to below function
      setCount(function (count) {
        return count + 1;
      });
    }, 1000);
  }, []); //[] this is dependency array

  return (
    <div>
      <h1>{count}</h1>
    </div>
  );
}
export default App;
