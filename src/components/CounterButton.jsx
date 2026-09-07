import { memo } from 'react';

const CounterButton = memo(function CounterButton({ onClick }) {
  console.log("CounterButton 렌더링!!!!!")

  return (
    <button onClick={onClick}>
      숫자증가
    </button>
  )
})

export default CounterButton
