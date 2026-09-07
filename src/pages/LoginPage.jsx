import { useNavigate } from "react-router-dom"
import { useAuth } from "../context/AuthContext"

function LoginPage() {
  const navigate = useNavigate()

  const { login } = useAuth()

  const handleLogin = () => {
    const user = {
      id: 1,
      name: "규형",
      email: "test@test.com",
    }

    login(user)

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