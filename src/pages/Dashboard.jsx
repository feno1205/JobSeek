import React from 'react'
import Header from '../Components/Header'
import JobCard from '../Components/jobCard'
import SearchArea from '../Components/SearchArea'
import Sidebar from '../Components/Sidebar'
import { Col, Row } from 'react-bootstrap'
import jobportal from '../assets/jobportal.png'
import { Link } from 'react-router-dom'

function Dashboard() {
  return (
    <div>
      <Header />
      <Row>
        <Col lg={8} className='mt-5'>
          <div className='px-5 mx-5'>
            <p style={{ fontSize: '50px',fontFamily:'roboto' }} className='pt-5'>Find the <span style={{color:'teal'}}>Job</span> that suits your Skills and Interest</p>
          </div>
        </Col>
        <Col lg={4} className='mt-5 ps-5'>
          <img style={{ width: '200px' }} src={jobportal} alt="" />
        </Col>
      </Row>
      
      <SearchArea />
      <hr />
      <Row>
        <Col lg={3}>
          <Sidebar/>
        </Col>
        <Col lg={7}>
          <Link style={{textDecoration:'none'}} to={'/overview'}><JobCard /></Link>
        </Col>
      </Row>
    </div>
  )
}

export default Dashboard