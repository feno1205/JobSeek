import React from 'react'
import homeImg from '../assets/homeImg.png'
import { Form } from 'react-bootstrap'
import { Link } from 'react-router-dom'

function Auth({insideRegister}) {
  return (
    <div style={{ width: '100%', height: '100vh' }} className='d-flex justify-content-center align-items-center'>
      <div className="container w-75">
        <div className="card shadow p-5">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <img className='w-100' src={homeImg} alt="authentication" />
            </div>
            <div className="col-lg-6">
              <h1 style={{ color: 'teal'}} className="fw-bolder m-5">
              <i className="fa-solid fa-user-tie p-2"></i>JobSeeker
              </h1>
              <h5 className='fw-bolder mt-2 pb-2'>Sign{insideRegister? 'Up' : 'In'} to your Account</h5>
              <Form>
                {
                  insideRegister &&
                  <Form.Group className="mb-3" controlId="formBasicName">
                    <Form.Control type="text" placeholder="Enter Name" />
                  </Form.Group>
                }
                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Control type="email" placeholder="Enter Email" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                  <Form.Control type="password" placeholder="Enter Password" />
                </Form.Group>
                {
                  insideRegister ?
                    <div>
                      <button style={{backgroundColor:'teal',color:'white'}} className='btn mb-2'>Register</button>
                      <p>Already have Account? Click here to <Link to={'/login'} className='text-success'>Login</Link></p>
                    </div> :
                    <div>
                      <button style={{backgroundColor:'teal',color:'white'}} className='btn mb-2'>Login</button>
                      <p>New User? Click here to <Link to={'/register'} className='text-success'>Register</Link></p>
                    </div>
                }
              </Form>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Auth