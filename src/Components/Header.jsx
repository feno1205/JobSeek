import React from 'react'
import { Container, Dropdown, Navbar } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import userImg from '../assets/userImg.png'

function Header() {
  return (
    <div>
      <Navbar style={{ height: '80px' }} className='shadow-lg'>
        <Container>
          <Navbar.Brand href="#home" style={{ color: 'teal', fontSize: '25px', fontWeight: '700' }}>
            <i className="fa-solid fa-user-tie p-2"></i>JobSeeker
          </Navbar.Brand>
          <Dropdown>
            <Dropdown.Toggle variant="white" id="dropdown-basic" style={{fontSize:'20px'}}>
             <img style={{width:'40px'}} src={userImg} alt="" />
            </Dropdown.Toggle>

            <Dropdown.Menu>
              <Link to={'/profile'}><Dropdown.Item href="#/action-1">Profile</Dropdown.Item></Link>
              <Dropdown.Item href="#/action-2">LogOut</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </Container>
      </Navbar>
    </div>
  )
}

export default Header