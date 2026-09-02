import { useNavigate } from "react-router-dom"

function LoginPage({ setIsLoggedIn }) {
  const navigate = useNavigate()

  const handleLogin = () => {
    // 실제로는 여기서 서버에 로그인 API 요청

    setIsLoggedIn(true)

    navigate("/users")
  }

  return (
    <div>
      <h1>로그인</h1>

      <button onClick={handleLogin}>
        로그인
      </button>
    </div>
  )
}

export default LoginPage