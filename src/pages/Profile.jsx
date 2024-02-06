import React, { useState } from 'react'
import Header from '../Components/Header'
import { Card, Col, Row } from 'react-bootstrap'
import userImg from '../assets/userImg.png'
import AddJob from '../Components/AddJob';

function Profile() {


  return (
    <div>
      <Header />
      <div>
        <Row>
          <Col lg={5} className='ms-5 text-center'>
            <div className='container shadow-lg mt-5 p-5'>
              <img className='mx-5' style={{ width: '120px' }} src={userImg} alt="" />
              <h1>Amal Mathew</h1>
              <h4>Frontend Developer</h4>
              <p id='para'>I am a enthusiastic Frontend developer. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reprehenderit aliquam maxime rem repudiandae quas recusandae facilis aut, temporibus odit odio voluptatem ea corrupti exercitationem ex, at nesciunt nam eius error!</p>
              <div>
                <h5>Skills</h5>
                <div className='d-flex'>
                  <h6 className='p-2' style={{ backgroundColor: 'teal', borderRadius: '10px' }}>ReactJS</h6>
                </div>
              </div>
            </div>
          </Col>
          <Col className='p-5 m-5'>
            <h4>Experience</h4>
            <Card>
              <div className='d-flex mb-3'>
                <img className='m-3 mt-3 px-2' style={{ width: '100px', height: '70px' }} src={userImg} alt="" />
                <div>
                  <h6 className='pt-4'>Google</h6>
                  <hr />
                  <h4>Developer</h4>
                  <p id='para'>2021-2023</p>
                </div>
              </div>
            </Card>
            <hr />
            <AddJob/>
          </Col>
        </Row>
      </div>
    </div>
  )
}

export default Profile