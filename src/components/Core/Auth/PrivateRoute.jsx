import { useSelector } from "react-redux"
import { Navigate } from "react-router-dom"

function PrivateRoute({ children }) {
  const { token } = useSelector((state) => state.auth);
  const {signupData} = useSelector((state)=>state.auth);

  if (signupData || token !== null) {
    return children
  } else {
    return <Navigate to="/login" />
  }
}

export default PrivateRoute;