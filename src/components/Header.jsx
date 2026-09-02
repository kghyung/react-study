import { Link } from "react-router-dom"

function Header() {
  return (
    <header>
      <h1>React Study</h1>

      <nav>
        <Link to="/">홈</Link>{" "}
        <Link to="/users">사용자</Link>{" "}
        <Link to="/login">로그인</Link>
      </nav>
    </header>
  )
}

export default Header