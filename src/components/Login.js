import axios from 'axios';
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

function Login() {
  const navigate = useNavigate()

  const [loginForm, setLoginForm] = useState({
    email: '',
    password: ''
  })
  const handleChange = (e) => {

    const { value, id } = e.target
    setLoginForm(() => {
      return { ...loginForm, [id]: value }
    })
  }
  const handleSubmit = async () => {
    try {
      const users = await axios.get('http://localhost:3000/users')

      const trouve = users.data.find((user) => loginForm.email === user.email && loginForm.password === user.password)

      if (trouve !== undefined) {

        navigate("/list")
      } else {
        alert('Verify Email and password')
      }
    } catch (err) {
      console.log(err)
    }
  }
  return (
    <div>
      <h1 className='h1'>Login</h1>
      <div className='container'>
        <form>
          <div className="form-group mt-5 ">
            <label htmlFor="exampleInputEmail1" className='email'>Email address</label>
            <input onChange={handleChange} type="email" className="form-control" id="email" aria-describedby="emailHelp" placeholder="Enter email" />
          </div>
          <div className="form-group mt-4">
            <label htmlFor="exampleInputPassword1">Password</label>
            <input onChange={handleChange} type="password" className="form-control" id="password" placeholder="Password" />
          </div>
          <input onClick={handleSubmit} type="button" className="btn btn-primary mt-2" value='login' />
        </form>
      </div>
    </div>
  )
}
export default Login;