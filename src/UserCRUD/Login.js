import {useState} from 'react';
import axios from "axios";
import {Link} from "react-router-dom";
// import "./Login.css";

function Login() {
  const [email,setEmail]=useState('')
  const [password,setPassword]=useState('')

  
  const handleEmail = (e) => {
    setEmail(e.target.value)    
  }
  const handlePassword = (e) => {
    setPassword(e.target.value)
  }
  const handleApi = () => {
    console.log({email,password})
    axios.post('https://localhost:7233/api/driver/Login',{
      email:email,
      password:password
    })
    .then(result=>{
      console.log(result.data)      
    })
    .catch(error=>{
      console.log(error)
    })
  }
  return (
    <div> <div class="container">
    <div class="forms-container">
    <div class="signin-signup">
    <form action="#" class="sign-in-form">
    <h2 class="title">SIGN IN</h2>
    <div class="input-field">
    
    <input value={email} onChange={handleEmail} type="text" placeholder="Username" />    
    </div>
    <div class="input-field">
    
    <input  value={password} onChange={handlePassword} type="password" placeholder="Password" />
    </div>
    <button onClick={handleApi} type="submit" value="Login" class="btn solid" > <Link className="Logout" to="/Login">Login</Link> </button>
    </form>
    </div>
    </div>      
    </div>
    </div>
  );
}

export default Login;

// function Login(){  
//   var name=document.myform.name.value;  
//   var password=document.myform.password.value;  
    
//   if (name==null || name==""){  
//     alert("Name can't be blank");  
//     return false;  
//   }else if(password.length<6){  
//     alert("Password must be at least 6 characters long.");  
//     return false;  
//     }  
//   }
  
  
//   <body>  
//   <form name="myform" method="post" action="abc.jsp" onsubmit="return validateform()" >  
//   Name: <input type="text" name="name"><br/>  
//   Password: <input type="password" name="password"><br/>  
//   <input type="submit" value="register">  
//   </form>  
  
//   export default Login;
