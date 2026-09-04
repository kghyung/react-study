import { BrowserRouter, Routes, Route } from "react-router-dom"

import Header from "./components/Header"
import ProtectedRoute from "./components/ProtectedRoute"

import HomePage from "./pages/HomePage"
import LoginPage from "./pages/LoginPage"
import UserPage from "./pages/UserPage"

function App() {
  return (
    <BrowserRouter>
      <Header />

      <Routes>

        <Route
          path="/"
          element={<HomePage />}
        />

        <Route
          path="/login"
          element={<LoginPage />}
        />

        <Route
          path="/users"
          element={
            <ProtectedRoute>
              <UserPage />
            </ProtectedRoute>
          }
        />

      </Routes>
    </BrowserRouter>
  )
}

export default App