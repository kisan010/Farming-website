import { useState } from "react";
import Navbar from "../Components/Navbar";
import { Link, useNavigate } from "react-router";
import axios from "axios";
import { faHouse } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { toast } from "react-toastify";


const Login = () => {
  let [user, setUser] = useState({ email: "", password: "" });

  const navigate = useNavigate();
  const handleinputChange = (e) => {
    let { value, name } = e.target;
    setUser({ ...user, [name]: value });
  };

  const handleLogin = async (e) => {
    try {
        e.preventDefault();
      const res = await axios.post("https://farming-website-backend.onrender.com/login", {
        email: user.email,
        password: user.password,
      });
     console.log(res);
    localStorage.setItem("token",JSON.stringify(res.data.token) );
    localStorage.setItem("user",JSON.stringify(res.data.user.email) );

     toast.success(`welcome ${user.email}`, { autoClose: 3000 });
      navigate('/cart');
      
     
  }catch (err) {
    console.log(err);
    if(err.response.data.message=='User not found')
    {
      toast.error('User not found please signUp');
    }
    else{
     toast.error("Invalid credentials");
    }
      
    
  }}

  return (
    <>
    <FontAwesomeIcon
              icon={faHouse}
              className="homeicon"
              onClick={() => navigate("/")}
              style={{color:'black',position:'absolute',top:'15%',left:'48%',fontSize:'3rem'}}
            />
      <div className="container" id="Login">
        <div className="box">
          <h1>Login Form</h1>
          <form id="login_form">
            <div className="input_group">
              <label htmlFor="email">Email:</label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Enter Email id"
                onChange={(e) => handleinputChange(e)}
              />
              <br />
            </div>
            <div className="input_group">
              <label htmlFor="password">password:</label>
              <input
                type="text"
                id="password"
                name="password"
                placeholder="Enter Password"
                onChange={(e) => handleinputChange(e)}
              />
              <br />
            </div>
            <button onClick={(e) => handleLogin(e)}>Login</button>
            <Link to='/signup' style={{color:'black'}}>Don't have an Account? <b>Register</b></Link>
          </form>
        </div>
      </div>
    </>
  );
};

export default Login;
