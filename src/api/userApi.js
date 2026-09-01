export const getUsers = async () => {
  const response = await fetch(
    "https://jsonplaceholder.typicode.com/users"
  )

  if (!response.ok) {
    throw new Error("사용자 조회 실패")
  }

  return response.json()
}