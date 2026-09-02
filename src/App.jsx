import { BrowserRouter, Routes, Route } from "react-router-dom"

import Header from "./components/Header"

import HomePage from "./pages/HomePage"
import UserPage from "./pages/UserPage"
import LoginPage from "./pages/LoginPage"

function App() {
  return (
    <BrowserRouter>

      <Header />

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/users" element={<UserPage />} />
        <Route path="/login" element={<LoginPage />} />
      </Routes>

    </BrowserRouter>
  )
}

export default App