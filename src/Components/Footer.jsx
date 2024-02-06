import React from 'react'
import { Col, Row } from 'react-bootstrap'

function Footer() {
    return (
        <div>
            <hr />
            <Row>
                <div className='header container-fluid d-flex'>
                    <Col lg={3} className='p-5' >
                        <h3><span style={{color:'teal'}}><i className="fa-solid fa-user-tie p-2"></i>JobSeeker</span></h3>
                        <p id='para'>Designed and built with all the love in the world by the bootrap team Possimus recusandae consequator ipsa veritatis expedita aspenatur.</p>
                    </Col>
                    <Col lg={3} className='p-5'>
                        <h5>Useful Links</h5>
                        <p id='para'>Landing Page</p>
                        <p id='para'>Home</p>
                        <p id='para'>Projects</p>
                    </Col>
                    <Col lg={3} className='p-5'>
                        <h5 id='para'>Guides</h5>
                        <p id='para'>React</p>
                        <p id='para'>React Bootstrap</p>
                        <p id='para'>Routing</p>
                    </Col>
                    <Col lg={3} className='p-5'>
                        <h5>Contact Us</h5>
                        <input className='form-control' type="text" placeholder='Enter email' />
                        <button style={{backgroundColor:'teal'}} className='form-control mt-2 text-white'>Send</button>
                        <i className="fa-brands fa-instagram mx-4 my-3"></i>
                        <i className="fa-brands fa-facebook mx-4 my-3"></i>
                        <i className="fa-brands fa-twitter mx-4 my-3"></i>
                        <i className="fa-brands fa-github mx-4 my-3"></i>
                    </Col>
                </div>
            </Row>
            <div style={{textAlign:'center'}}>
                <p id='para'>Copyright@2024</p>
            </div>
        </div>
    )
}

export default Footer