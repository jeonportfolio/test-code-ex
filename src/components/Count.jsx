import { useState } from "react"

const Count = () => {
    const [count, setCount] = useState(0);
  return (
    <div>
        <h1>{count}</h1>
        <button onClick={() => setCount((pre) => pre + 1)}>+</button>
        <button onClick={() => setCount((pre) => pre + 1)}>-</button>
    </div>
  )
}

export default Count