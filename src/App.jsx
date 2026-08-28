import { useState } from "react"

function App() {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [message, setMessage] = useState("")
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$$/

  const handleSubmit = (e) => {
    e.preventDefault()

    if(name.trim() === "" || email.trim() === "" || password.trim() === "") {
      setMessage("모든 필드를 입력해주세요.")
      return
    } 
    setMessage(`로그인 성공 !!!!`)
  }

  return (
    <div>
      <h1>로그인</h1>

      <form onSubmit={handleSubmit}>
        <div>
          <label>이름</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div>
          <label>이메일</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <div>
          <label>비밀번호</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        <button type="submit">
          로그인
        </button>
      </form>

      <p>{message}</p>
    </div>
  )
}

export default App