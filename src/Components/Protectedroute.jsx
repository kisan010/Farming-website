
import { Navigate } from "react-router";



 const ProtectedRoute=({children})=>
  { 
    const token = localStorage.getItem("token");
     console.log(token)
     return token ? children : <Navigate to="/login" />; 
  }
export default ProtectedRoute;
