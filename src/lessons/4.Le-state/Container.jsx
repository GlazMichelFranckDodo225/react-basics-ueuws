import { useState } from "react"

export default function Container() {
  // const countState = useState(0); 
  const [count, setCount] = useState(0);
  console.log("Mise à jour !");

  function handleClick() {
    // setCount(count + 1);
    // Callback Functions
    setCount(count => count + 1); // de 0 => 1
    setCount(count => count + 1); // de 1 => 2
    setCount(count => count + 1); // de 2 => 3
    setCount(count => count + 1); // de 3 => 4 
  }
  
  return (
    <div>
      <h1>Le state</h1>
      {/* <p>{countState[0]}</p> */}
      <p>{count}</p>
      <button onClick={handleClick}>Incrémenter</button>
    </div>
  )
}
