import React,{useState} from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';
import './index.css';


const LPage = () => {
  const [loginData,setLoginData] = useState({
    username: "",
    password: "",
  })
  const handleLoginSubmit =async(e) =>{
    e.preventDefault();
    try{
      const response= await axios.post('http://localhost:8000/login',
      loginData);
      const {success,message} = response.data;
      if((success)){
        console.log('Login sucessfully');
      }
      else{
        console.log(message);
      }
      
    }
    catch(error){
      console.log('Login error',error);

    }
    setLoginData({
      username:'',
      password:''

    })
  }


  const handleLoginChange = (e) => {
    const {name,value} = e.target;
    setLoginData((prevData)=>({
      ...prevData,
      [name]:value

    }))

    
  }

  return (
    <div className='login-container'>
      <h1>Login Page</h1>
      <form onSubmit={handleLoginSubmit}>
        <input
          type="text"
          name="username"
          placeholder="Username"
          value={loginData.username}
          onChange={handleLoginChange}
          required
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          value={loginData.password}
          onChange={handleLoginChange}
          required
        />
        <button type='submit'>Login</button>
        <p>
          Not registered yet?
          <Link className='link' to ='/registration'>Register Here</Link>
        </p>


      </form>

    </div>
  )
}

export default LPage
