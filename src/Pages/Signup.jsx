import { faHouse } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router";


const Signup=()=>{

  let [user,setUser]=useState({email:'',password:'',repassword:''});
    const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
let navigate= useNavigate();

  const handlesignUp=async(e)=>{
     e.preventDefault(); 

    setError("");
    setSuccess("");

    if (user.password !== user.repassword) {
      setError("Passwords do not match");
      return;
    }
     try {
      const response = await axios.post("https://farming-website-backend.onrender.com/signup", {
        email: user.email,
        password: user.password,
        repassword: user.repassword,
      });

      setSuccess("Signup successful!");

      setUser({email:'',password:'',repassword:''})
     setTimeout(()=>navigate('/login'),1000) 
    } catch (err) {
      console.error(err.response?.data || err.message);
      setError(err.response?.data?.message || "Signup failed");
    }
  }
  const handleinputs=(e)=>{
    const {name,value}=e.target;
    setUser({...user,[name]:value});
  }


    return(
        <>
          <FontAwesomeIcon
                      icon={faHouse}
                      className="homeicon"
                      onClick={() => navigate("/")}
                       style={{color:'black',position:'absolute',top:'11%',left:'49%',fontSize:'3rem'}}
                    />
        <div className="container" id="Signup">
            <div className="box" id='signupBox'>
                 <h1>Signup Form</h1>
                <form id='signUp_form'>
                     <div className="input_group">
                    <label htmlFor="email">Email:</label>
                    <input type="email" id='email' name="email" onChange={handleinputs} value={user.email} /></div>
                    <div className="input_group">
                    <label htmlFor="password">password:</label>                   
                    <input type="text"  id='password' name="password" onChange={handleinputs} value={user.password} /></div>
                     <div className="input_group">
                    <label htmlFor="re-password" >Re-password:</label>
                    <input type="text" id='re-password' name="repassword" onChange={handleinputs} value={user.repassword}/>
                    </div>
                    <button onClick={(e)=>handlesignUp(e)}>Signup</button>
                     {error && <p style={{ color: "red" }}>{error}</p>}
          {success && <p style={{ color: "green" }}>{success}</p>}
                </form>
            </div>
        </div>
        </>
    )
}

export default Signup;