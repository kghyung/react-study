import { useEffect, useRef } from "react"

function App() {
  const inputRef = useRef(null)

  useEffect(() => {
    inputRef.current.focus()
  }, [])

  return (
    <div>
      <h1>Focus Input Example</h1>
      <input ref={inputRef} type="text" placeholder="Type something..." />
    </div>
  )

}

export default App