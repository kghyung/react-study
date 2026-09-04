import { useState } from "react"

function useLocalStorage(key, initialValue) {
  const [value, setValue] = useState(() => {
    const savedValue = localStorage.getItem(key)

    if (savedValue === null) {
      return initialValue
    }

    return JSON.parse(savedValue)
  })

  const setStoredValue = (newValue) => {
    setValue(newValue)

    localStorage.setItem(
      key,
      JSON.stringify(newValue)
    )
  }

  return [value, setStoredValue]
}

export default useLocalStorage