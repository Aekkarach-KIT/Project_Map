import React from 'react'
import { MDBCol, MDBContainer, MDBRow, MDBFooter } from 'mdbreact'

const FooterPage = () => {
  return (
    <MDBFooter
      color='#1c2331 mdb-color darken-4'
      className='font-small pt-5 mt-4'
    >
      <MDBContainer fluid className='text-center text-md-left'>
        <MDBRow>
          <MDBCol md='2'>
            <h3 className='title'>Poppulation Map</h3>
            <p>
              <strong>Create By Aekkarach Kitkanna</strong>
            </p>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    </MDBFooter>
  )
}

export default FooterPage
