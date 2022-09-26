import React from 'react'
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { Formik } from 'formik'

function Register() {
  
  const navigate = useNavigate();
  
  return (
    <div>
      <h1 className='h1'>Register</h1>
      <div className='container'>
        <Formik
          initialValues={{ firstName: '', lastName: '', email: '', password: '' }}
          validate={values => {
            const errors = {};
            const first = document.getElementsByName('firstName')[0];
            // const last = document.getElementsByName('lastName')[0];
            // const emaild = document.getElementsByName('firstName')[0];
            // const password = document.getElementsByName('firstName')[0];

            if (!values.firstName) {
              errors.firstName = 'Required';
             first.classList.add('is-invalid') 
             first.classList.remove('is-valid') 
            }else{
             first.classList.remove('is-invalid') 
             first.classList.add('is-valid') 
            }
            if (!values.lastName) {
              errors.lastName = 'Required';
            };
            if (!values.email) {
              errors.email = 'Required';
            } else if (
              !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
            ) {
              errors.email = 'Invalid email address';
            }
            if (!values.password) {
              errors.password = 'Required';
            }else if(values.password.length <=4){
          errors.password = 'password too short '
          }
          // console.log({values});
          // console.log({errors});
            return errors;
          }}
          onSubmit={async (values, { setSubmitting }) => {
            try {
              const users = await axios.get('http://localhost:3000/users')
              const trouve = await users.data.find((user) => values.email === user.email)
              if (trouve !==undefined) {
                alert('vérifier email déja existe ')
              } else {
                await axios.post('http://localhost:3000/users', values)
                navigate('/login')
                setSubmitting(false);
              }
            }
            catch (err) {
              console.log(err)
            }
          }}
        >
          {({
            values,
            errors,
            touched,
            handleChange,
            handleBlur,
            handleSubmit,
            isSubmitting,
            /* and other goodies */
          }) => (
            <form onSubmit={handleSubmit}>
              <label className='form-label' >firstName</label>
              <input
                type="text"
                name="firstName"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.firstName}
                className='form-control'
              />
              <p style={{color:'red'}}>{errors.firstName && touched.firstName && errors.firstName}</p>
              <label className='form-label' >lastName</label>
              <input
                type="text"
                name="lastName"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.lastName}
                className='form-control'
              />
              <p style={{color:'red'}}>{errors.lastName && touched.lastName && errors.lastName}</p>
              <label className='form-label' >email</label>
              <input
                type="email"
                name="email"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.email}
                className='form-control'
              />
              <p style={{color:'red'}}>{errors.email && touched.email && errors.email}</p>
              <label className='form-label' >password</label>
              <input
                type="password"
                name="password"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.password}
                className='form-control'
              />
              <p style={{color:'red'}}>{errors.password && touched.password && errors.password}</p>
              <button type="submit" className='btn btn-primary' disabled={isSubmitting}>
                Submit
              </button>
            </form>
          )}
        </Formik>
      </div>
    </div>
  )
}
export default Register;