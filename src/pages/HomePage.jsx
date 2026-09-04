import useToggle from "../hooks/useToggle"

function HomePage() {
  const [isOpen, toggle] = useToggle(false)

  return (
    <div>
      <button onClick={toggle}>
        열기 / 닫기
      </button>

      {isOpen && (
        <p>내용이 열렸습니다!!!!!</p>
      )}
    </div>
  )
}

export default HomePage