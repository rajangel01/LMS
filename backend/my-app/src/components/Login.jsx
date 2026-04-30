import React from 'react'
// import useEffect from 'react'
import {useNavigate, Link} from 'react-router-dom'


function Login() {
  const [email,setEmail] = React.useState('');
  const [password,setPassword] = React.useState('');

  const navigate = useNavigate();
  

  const handle = async()=>{
    console.warn(email,password);
    let result = await fetch('http://localhost:8080/login',{
      method:'post',
      body:JSON.stringify({email,password}),
      headers:{
        'Content-Type': 'application/json'
      }
    });
      result= await result.json();
      console.warn(result);
      if(result.email){
        console.warn("You have Loged In...");
        localStorage.setItem("user",JSON.stringify(result));
        let profile = JSON.parse(localStorage.getItem("user"));
        if(profile.email==="rajangel" && profile.password==="123"){
          navigate("/admin");
        }else{
          navigate("/home");
        }
        
        window.location.reload();
      }else{
        alert("Please Enter a Valid Login ID and Password")
      }
  }
  return (
    <>
      <div className="containerer  ">
        <div className="container shadow-sm p-3 mb-5 bg-body-tertiary rounded fix-width">
        <h1 className='mx-auto p-2'>Login</h1>
        <input className='form-control my-3' type="text" placeholder='Enter Your Email' onChange={(e)=>setEmail(e.target.value)} value={email}/>
        <input className='form-control my-3' type="text" placeholder='Enter Your Password' onChange={(e)=>setPassword(e.target.value)} value={password}/>
        <div className="submit">
        <input onClick={handle} className='submit bg-success p-2' type="submit" />
        </div>
        <div className="justify-content-center">
        <p className='my-3'>Don't have an account <Link to="/signup">Signup</Link> now..!!</p>
        </div>
        </div>
        
      </div>
    </>
  )
}

export default Login
