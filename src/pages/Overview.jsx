import React from 'react'
import Header from '../Components/Header'
import { Col, Row } from 'react-bootstrap'
import jobportal from '../assets/jobportal.png'

function Overview() {
  return (
    <div>
      <Header />
      <div className='container mt-5 p-5'>
        <Row>
          <Col lg={5}>
            <div>
              <h2 style={{ color: 'teal' }}>Frontend Developer</h2>
              <div className='d-flex p-3'>
                <img style={{ width: '40px', height: '40px' }} src={jobportal} alt="" />
                <h3>Zodiac</h3>
              </div>
              <p id='para' className='p-2 m-2'><i class="fa-solid fa-location-dot"></i> United Kingdom</p>

              <div>
                <p className='p-2 m-2'>1 week ago</p>
              </div>
              <p id='para' className='p-2 m-2'><i class="fa-solid fa-briefcase "></i> <i class="fa-solid fa-sterling-sign"></i>45k/yr - 50k/yr</p>
              <div className='d-flex'>
                <p id='para' className='p-2 m-2'><i class="fa-solid fa-circle-dot "></i> Entry-level</p>
                <p id='para' className='p-2 m-2'><i class="fa-solid fa-circle-dot"></i> Remote</p>
                <p id='para' className='p-2 m-2'><i class="fa-solid fa-circle-dot"></i> FullTime</p>
              </div>
              <div>
                <p id='para' className='p-2 m-2'><i class="fa-solid fa-star"></i> Skills :</p>
                <p id='para' className='p-2 m-2'>Frontend Development,JavaScript Libraries</p>
              </div>
              <div className='d-flex p-2 m-2'>
                <button style={{ backgroundColor: 'teal', width: '100px', fontWeight: '500px' }} className='btn text-white me-5'>Apply</button>
                <button style={{ backgroundColor: 'teal', width: '100px', fontWeight: '500px' }} className='btn text-white'>Save</button>
              </div>
            </div>
          </Col>
          <Col>
            <div>
              <h4>About the job</h4>
              <p id='para'>We are currently looking for several Mid-Level front-end developers with experience in React who want to work remotely on a very successful software system used by over 1500 UK veterinary practices to help them deliver the best standard of care to the animals they look after. Beyond its well-established customer base in the UK the the company is planning an expansion into the US market where animal healthcare is worth an estimated $11 billion.
                The software provides a suite of systems that enable appointment management, patient histories, reminders of scheduled follow-ups, customer billing, and supplier integrations to allow for seamless stock management. The company that own it are publicly traded, profitable and looking to grow.</p>
            </div>
            <div className='pt-4'>
              <h4>About the company</h4>
              <p id='para'>Zodiac is a recruitment company that resides somewhere between a network and a community it is partly a business and partly a social experiment. In the age of faceless communication through electronics and metric driven “talent acquisition” is there a place for putting people back at the forefront of what this is all about?</p>
            </div>
          </Col>
        </Row>
      </div>
    </div>
  )
}

export default Overview