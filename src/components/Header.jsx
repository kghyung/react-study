import { useNavigate } from "react-router-dom"
import { useAuth } from "../context/AuthContext"

function Header() {
  const navigate = useNavigate()

  const {
    state,
    logout,
  } = useAuth()

  const handleLogout = () => {
    logout()
    navigate("/login")
  }

  return (
    <header>
      <h1>My React App</h1>

      {state.isLoggedIn ? (
        <>
          <span>
            {state.user?.name}님
          </span>

          <button onClick={handleLogout}>
            로그아웃
          </button>
        </>
      ) : (
        <button onClick={() => navigate("/login")}>
          로그인
        </button>
      )}
    </header>
  )
}

export default Header