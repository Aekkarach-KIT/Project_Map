import React from 'react'
import fire from '../config/fire'
import { Navbar, Nav, Form } from 'react-bootstrap'
import { MDBBtn } from 'mdbreact'

const NaBar = props => {
  const logout = () => {
    fire.auth().signOut()
  }

  return (
    <div id='classicformpage'>
      <div>
        <Navbar style={{ backgroundColor: '	#006666' }}>
          <Navbar.Brand
            href='/page_home'
            style={{ color: 'white', fontSize: '20px' }}
          >
            หน้าแรก
          </Navbar.Brand>
          <Nav className='mr-auto'>
            <Nav.Link
              href='/page_covid'
              style={{ color: 'white', fontSize: '20px' }}
            >
              สถานการณ์Covid-19
            </Nav.Link>
            <Nav.Link
              href='/page_cal'
              style={{ color: 'white', fontSize: '20px' }}
            >
              การคำนวณค่า
            </Nav.Link>
            <Nav.Link
              href='/page_contact'
              style={{ color: 'white', fontSize: '20px' }}
            >
              ติดต่อเรา
            </Nav.Link>
            <Nav.Link
              href='/page_download'
              style={{ color: 'white', fontSize: '20px' }}
            >
              Download
            </Nav.Link>
          </Nav>

          <Form inline>
            <MDBBtn rounded color='danger' onClick={logout}>
              logout
            </MDBBtn>
          </Form>
        </Navbar>
      </div>
    </div>
  )
}

export default NaBar
