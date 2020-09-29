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
        <Navbar bg='#1c2331 mdb-color darken-4 ' variant='dark '>
          <Navbar.Brand href='/page_home'>หน้าแรก</Navbar.Brand>
          <Nav className='mr-auto'>
            <Nav.Link href='/page_covid'>Covid-19</Nav.Link>
            <Nav.Link href='/page_table'>ตาราง</Nav.Link>
            <Nav.Link href='/page_contact'>ติดต่อเรา</Nav.Link>
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
