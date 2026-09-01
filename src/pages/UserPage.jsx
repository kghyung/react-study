import { useEffect, useState } from "react"
import { getUsers } from "../api/userApi"
import UserList from "../components/UserList"

function UserPage() {
  const [users, setUsers] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState("")

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const data = await getUsers()

        setUsers(data)
      } catch (error) {
        setError(error.message)
      } finally {
        setLoading(false)
      }
    }

    fetchUsers()
  }, [])

  if (loading) {
    return <p>불러오는 중입니다!!!!</p>
  }

  if (error) {
    return <p>{error}</p>
  }

  return (
    <main>
      <h2>사용자 목록</h2>

      <UserList users={users} />
    </main>
  )
}

export default UserPage