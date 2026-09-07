import { useCallback, useState } from "react"
import CounterButton from "../components/CounterButton"

function HomePage() {
  const [count, setCount] = useState(0)

  const handleIncrease = useCallback(() => {
    setCount(prev => prev + 1)
  }, [])

  return (
    <div>
      <h2>Count: {count}</h2>

      <CounterButton onClick={handleIncrease} />

      <button onClick={() => console.log("다른 버튼!!!!!")}>
        다른 버튼
      </button>
    </div>
  )
}

export default HomePage