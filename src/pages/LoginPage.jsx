import { useNavigate } from "react-router-dom"
import { useAuth } from "../context/AuthContext"

function LoginPage() {
  const navigate = useNavigate()

  const { login } = useAuth()

  const handleLogin = () => {
    // 실제 로그인 API는 나중에 연결
    login()

    navigate("/users")
  }

  return (
    <div>
      <h2>로그인</h2>

      <button onClick={handleLogin}>
        로그인
      </button>
    </div>
  )
}

export default LoginPage