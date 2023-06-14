import React from 'react'
import { useState } from 'react';
import { Link } from 'react-router-dom';

const Signup = () => {
    const [crediantials,setcrediantials] = useState({name:"",email:"",passwoard:"",geolocation:""})

    const handleSubmit= async(e)=>{
        e.preventDefault();// it is a synthetic event
        const response = await fetch("http://localhost:5000/api/createUser",{
            method:'post',
            headers:{
                'Content-Type':'application/json'
            },
            body:JSON.stringify({name:crediantials.name , email:crediantials.email, passwoard:crediantials.passwoard, location:crediantials.geolocation})
        }).then(res=>res.json()).then(data=>console.log(data));      

    }
    const onChange = (event)=>{
        setcrediantials({...crediantials,[event.target.name]:event.target.value})
    }
    return (
        <>
            <div className='container'>
                <form onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label htmlFor="name">Name</label>
                        <input type="text" className="form-control"  placeholder="Enter Name" name='name' value={crediantials.name} onChange={onChange} />
                        
                    </div>
                    <div className="form-group">
                        <label htmlFor="name">Email</label>
                        <input type="email" className="form-control"  placeholder="Enter email" name='email' value={crediantials.email} onChange={onChange} />
                        
                    </div>
                    <div className="form-group">
                        <label htmlFor="exampleInputPassword1">Password</label>
                        <input type="password" className="form-control"  placeholder="Password" name='passwoard' value={crediantials.passwoard} onChange={onChange}/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="exampleInputPassword1">Addresh</label>
                        <input type="text" className="form-control"  placeholder="Addresh" name='geolocation' value={crediantials.geolocation} onChange={onChange}/>
                    </div>
                    
                    <button type="submit" className="m-3 btn btn-primary">Submit</button>
                    <Link to="/Login"  className="m-3 btn btn-danger">Already a user</Link>
                </form>

            </div></>

    )
}

export default Signup;