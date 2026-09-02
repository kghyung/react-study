import { Link, useNavigate } from "react-router-dom"

function Header({
  isLoggedIn,
  setIsLoggedIn,
}) {
  const navigate = useNavigate()

  const handleLogout = () => {
    setIsLoggedIn(false)

    navigate("/login")
  }

  return (
    <header>
      <h1>React Study</h1>

      <nav>
        <Link to="/">홈</Link>{" "}
        <Link to="/users">사용자</Link>{" "}
        <Link to="/products">상품</Link>{" "}

        {isLoggedIn ? (
          <button onClick={handleLogout}>
            로그아웃
          </button>
        ) : (
          <Link to="/login">
            로그인
          </Link>
        )}
      </nav>
    </header>
  )
}

export default Header