import { BrowserRouter, Routes, Route } from "react-router-dom"
import ProtectRoute from "./components/ProtectRoute"
import Header from "./components/Header"
import HomePage from "./pages/HomePage"
import UserPage from "./pages/UserPage"
import LoginPage from "./pages/LoginPage"
import ProductPage from "./pages/ProductPage"

import { useState } from "react"

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false)

  return (
    <BrowserRouter>
      <Header
        isLoggedIn={isLoggedIn}
        setIsLoggedIn={setIsLoggedIn}
      />

      <Routes>
        <Route path="/" element={<HomePage />} />

        <Route
          path="/login"
          element={
            <LoginPage
              setIsLoggedIn={setIsLoggedIn}
            />
          }
        />

        <Route
          path="/users"
          element={
            <ProtectRoute isLoggedIn={isLoggedIn}>
              <UserPage />
            </ProtectRoute>
          }
        />

        <Route
          path="/products"
          element={<ProductPage />}
        />
      </Routes>
    </BrowserRouter>
  )
}

export default App