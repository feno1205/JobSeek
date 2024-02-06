import React from 'react'
import { Col, Row } from 'react-bootstrap'
import jobportal from '../assets/jobportal.png'

function JobCard() {
    return (
        <div className='shadow-lg p-5'>
            <Row>
                <Col lg={2}>
                    <img style={{ width: '60px' }} src={jobportal} alt="" />
                </Col>
                <Col lg={7}>
                    <h3  style={{color:'teal'}}>Full Stack Developer</h3>
                    <h5>Zodiac</h5>
                    <div className='d-flex'>
                        <p id='para' className='p-2 m-2 text-white' style={{backgroundColor:'teal',borderRadius:'8px'}}>United Kingdom</p>
                        <p id='para' className='p-2 m-2 text-white' style={{backgroundColor:'teal',borderRadius:'8px'}} >FullTime</p>
                    </div>
                </Col>
                <Col>
                <h6></h6>
                </Col>
            </Row>
        </div>
    )
}

export default JobCard