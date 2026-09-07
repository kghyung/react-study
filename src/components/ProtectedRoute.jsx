import {
  createContext,
  useContext,
  useReducer,
} from "react"

const AuthContext = createContext()

const initialState = {
  isLoggedIn:
    localStorage.getItem("isLoggedIn") === "true",
  user: null,
  loading: false,
  error: null,
}

function authReducer(state, action) {
  switch (action.type) {
    case "LOGIN":
      return {
        ...state,
        isLoggedIn: true,
        user: action.payload,
        error: null,
      }

    case "LOGOUT":
      return {
        ...state,
        isLoggedIn: false,
        user: null,
      }

    case "SET_LOADING":
      return {
        ...state,
        loading: action.payload,
      }

    case "SET_ERROR":
      return {
        ...state,
        error: action.payload,
      }

    default:
      return state
  }
}

export function AuthProvider({ children }) {
  const [state, dispatch] = useReducer(
    authReducer,
    initialState
  )

  const login = (user) => {
    localStorage.setItem("isLoggedIn", "true")

    dispatch({
      type: "LOGIN",
      payload: user,
    })
  }

  const logout = () => {
    localStorage.removeItem("isLoggedIn")

    dispatch({
      type: "LOGOUT",
    })
  }

  return (
    <AuthContext.Provider
      value={{
        state,
        login,
        logout,
        dispatch,
      }}
    >
      {children}
    </AuthContext.Provider>
  )
}

export function useAuth() {
  return useContext(AuthContext)
}

export default AuthContext