import React, { useState } from 'react'
import { Button, Dropdown, Modal } from 'react-bootstrap';

function AddJob() {
    
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <div>
        <div>
              <button onClick={handleShow} style={{ backgroundColor: 'teal', borderRadius: '10px', fontWeight: '700' }} className='btn text-white m-5'>Add Job Post</button>

              <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                  <Modal.Title className='p-3'>Add Job Post</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                  <input className='form-control mb-3' type="text" placeholder='Job Name' />
                  <div>
                    <input className='form-control mb-3' type="file" placeholder='Company Logo' />
                    <input className='form-control mb-3' type="text" placeholder='Company name' />
                  </div>
                  <input className='form-control mb-3' type="text" placeholder='Salary' />
                  <div className='d-flex'>
                    <Dropdown>
                      <Dropdown.Toggle className='form-control mb-3' variant="white" id="dropdown-basic">
                        Experience level
                      </Dropdown.Toggle>

                      <Dropdown.Menu>
                        <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                        <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                        <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                      </Dropdown.Menu>
                    </Dropdown>
                    <Dropdown>
                      <Dropdown.Toggle className='form-control mb-3' variant="white" id="dropdown-basic">
                        Job Type
                      </Dropdown.Toggle>

                      <Dropdown.Menu>
                        <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                        <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                        <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                      </Dropdown.Menu>
                    </Dropdown>
                    <Dropdown>
                      <Dropdown.Toggle className='form-control mb-3' variant="white" id="dropdown-basic">
                        Work mode
                      </Dropdown.Toggle>

                      <Dropdown.Menu>
                        <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                        <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                        <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                      </Dropdown.Menu>
                    </Dropdown>
                  </div>
                </Modal.Body>
                <Modal.Footer>
                  <Button variant="secondary" onClick={handleClose}>
                    Close
                  </Button>
                  <Button variant="primary" onClick={handleClose}>
                    Save Changes
                  </Button>
                </Modal.Footer>
              </Modal>
            </div>
    </div>
  )
}

export default AddJob