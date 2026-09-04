import { useNavigate } from "react-router-dom"
import { useAuth } from "../context/AuthContext"

function Header() {
  const navigate = useNavigate()

  const { isLoggedIn, logout } = useAuth()

  const handleLogout = () => {
    logout()
    navigate("/login")
  }

  return (
    <header>
      <h1>My React App</h1>

      {isLoggedIn ? (
        <button onClick={handleLogout}>
          로그아웃
        </button>
      ) : (
        <button onClick={() => navigate("/login")}>
          로그인
        </button>
      )}
    </header>
  )
}

export default Header