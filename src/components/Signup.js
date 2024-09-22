import React,{useState} from 'react'
import { Navigate, useNavigate } from 'react-router-dom'

const Signup = () => {

    const [credentials, setCredentials] = useState({name: "",email: "", password: "", cpassword: ""}) 
    let history = useNavigate();


    const handleSubmit = async (e) => {
        e.preventDefault();
        const {name,email,password} = credentials;
        const response = await fetch("http://localhost:3000/api/auth/createuser", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({name,email,password})
        });
        const json = await response.json()
        console.log(json);
        if (json.success){
            // Save the auth token and redirect
            localStorage.setItem('token', json.authtoken); 
            

        }
        history("/login");
      
    }

    const onChange = (e)=>{
        setCredentials({...credentials, [e.target.name]: e.target.value})
    }

    return (
        <div>
           <form onSubmit={handleSubmit}>

           <div className="my-2">
    <label htmlFor="name">User Name</label>
    <input type="text" className="form-control" id="name" name='name' onChange={onChange} aria-describedby="emailHelp" placeholder="Enter User Name" />
    
  </div>

  <div className="my-2">
    <label htmlFor="email">Email address</label>
    <input type="email" className="form-control" id="email" name='email' onChange={onChange} aria-describedby="emailHelp" placeholder="Enter email" />
    <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
  </div>

  <div className="my-2">
    <label htmlFor="password">Password</label>
    <input type="password" className="form-control" id="password" name="password" onChange={onChange} placeholder="Password" />
  </div>

  <div className="my-2">
    <label htmlFor="cpassword">Password</label>
    <input type="password" className="form-control" id="cpassword" name='cpassword' onChange={onChange} placeholder=" confirm Password" />
  </div>

  
 
  <button type="submit" className="btn btn-primary my-2">Submit</button>
</form>
        </div>
    )
}

export default Signup 
