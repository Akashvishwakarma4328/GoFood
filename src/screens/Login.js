import React from 'react'
import { useState } from 'react';
import { Link,useNavigate } from 'react-router-dom';

const Login = () => {
  let navigate = useNavigate();
    const [crediantials,setcrediantials] = useState({email:"",passwoard:""})

    const handleSubmit= async(e)=>{
        e.preventDefault();// it is a synthetic event
        const response = await fetch("http://localhost:5000/api/loginUser",{
            method:'post',
            headers:{
                'Content-Type':'application/json'
            },
            body:JSON.stringify({ email:crediantials.email, passwoard:crediantials.passwoard})
        }).then(res=>res.json()).then(data=>{
          if (data.seccess) {
            localStorage.setItem("authToken",data.authToken);
            console.log(localStorage.getItem("authToken"));
            navigate("/");
          }
        });


    }
    const onChange = (event)=>{
        setcrediantials({...crediantials,[event.target.name]:event.target.value})
    }
    return (
        <>
            <div className='container'>
                <form onSubmit={handleSubmit}>

                    <div className="form-group">
                        <label htmlFor="name">Email</label>
                        <input type="email" className="form-control"  placeholder="Enter email" name='email' value={crediantials.email} onChange={onChange} />

                    </div>
                    <div className="form-group">
                        <label htmlFor="exampleInputPassword1">Password</label>
                        <input type="password" className="form-control"  placeholder="Password" name='passwoard' value={crediantials.passwoard} onChange={onChange}/>
                    </div>


                    <button type="submit" className="m-3 btn btn-primary">Login</button>
                    <Link to="/Signup"  className="m-3 btn btn-danger">I am a new User</Link>
                </form>

            </div></>

    )
}

export default Login;