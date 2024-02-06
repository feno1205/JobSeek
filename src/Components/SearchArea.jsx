import React from 'react'
import { Col, Row } from 'react-bootstrap'
import jobportal from '../assets/jobportal.jpg'

function SearchArea() {
    return (
        <div className='d-flex justify-content-center align-items-center'>
            <Row className='m-5 px-5'>
                <Col>
                    <input style={{width:'400px'}} className='form-control shadow-lg' type="text" placeholder='Find Job' />
                </Col>
                <Col>
                    <input style={{width:'400px'}} className='form-control shadow-lg' type="text" placeholder='Location' />
                </Col>
                <Col>
                    <button style={{backgroundColor:'teal',fontWeight:'700'}} className='btn text-white'>Search</button>
                </Col>
            </Row>
        </div>
    )
}

export default SearchArea