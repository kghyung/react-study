import {Navigate} from "react-router-dom"

function ProtectRoute({isLoggedIn, children}) {
    if(!isLoggedIn) {
        return <Navigate to="/login" replace />
    }

    return children
}

export default ProtectRoute