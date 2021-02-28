import React from 'react'
import { MDBCol, MDBContainer, MDBRow, MDBFooter } from 'mdbreact'
import { Link } from 'react-router-dom'
const FooterPage = () => {
  return (
    <MDBFooter
      color='#1c2331 mdb-color darken-4'
      className='font-small pt-5 mt-4'
    >
      <MDBContainer fluid className='text-center text-md-left'>
        <MDBRow>
          <MDBCol md='2'>
            <h3 style={{ fontFamily: 'Kanit' }} className='title'>
              Poppulation Map
            </h3>
            <p>
              <strong style={{ fontFamily: 'Kanit' }}>
                Create By Aekkarach Kitkanna
              </strong>
            </p>
          </MDBCol>
          <MDBRow style={{ justifyContent: 'center', marginLeft: '50px' }}>
          <MDBCol style={{ textAlign: 'center' }}>
              <Link to='/page_home' style={{ marginTop: '30px' }}>
                <img
                  src='https://www.flaticon.com/svg/static/icons/svg/3011/3011069.svg'
                  style={{ width: '30px' }}
                />
                <div style={{ fontSize: '15px', color: 'white' }}>
                  หน้าหลัก
                </div>
              </Link>
            </MDBCol>
            <MDBCol style={{ textAlign: 'center' }}>
              <Link to='/page_edu' style={{ marginTop: '30px' }}>
                <img
                  src='https://cdn3.iconfinder.com/data/icons/education-and-school-8/48/Education-256.png'
                  style={{ width: '30px' }}
                />
                <div style={{ fontSize: '15px', color: 'white' }}>การศึกษา</div>
              </Link>
            </MDBCol>
            <MDBCol style={{ textAlign: 'center' }}>
              <Link to='/page_env' style={{ marginTop: '30px' }}>
                <img
                  src='https://cdn0.iconfinder.com/data/icons/streamline-emoji-1/48/138-man-farmer-2-256.png'
                  style={{ width: '30px' }}
                />
                <div style={{ fontSize: '15px', color: 'white' }}>
                  การเกษตรและสิ่งแวดล้อม
                </div>
              </Link>
            </MDBCol>
            <MDBCol style={{ textAlign: 'center' }}>
              <Link to='/page_worker' style={{ marginTop: '30px' }}>
                <img
                  src='https://cdn4.iconfinder.com/data/icons/avatars-xmas-giveaway/128/builder_worker_helmet-256.png'
                  style={{ width: '30px' }}
                />
                <div style={{ fontSize: '15px', color: 'white' }}>
                  สถิติแรงงาน
                </div>
              </Link>
            </MDBCol>
            <MDBCol style={{ textAlign: 'center' }}>
              <Link to='/page_covid' style={{ marginTop: '30px' }}>
                <img
                  src='https://r7app.moph.go.th/covid-dashboard/assets/images/coronavirus.png'
                  style={{ width: '30px' }}
                />
                <div style={{ fontSize: '15px', color: 'white' }}>
                สถานการณ์ Covid-19
                </div>
              </Link>
            </MDBCol>
            <MDBCol style={{ textAlign: 'center' }}>
              <Link to='/page_cal' style={{ marginTop: '30px' }}>
                <img
                  src='https://www.flaticon.com/svg/static/icons/svg/550/550607.svg'
                  style={{ width: '30px' }}
                />
                <div style={{ fontSize: '15px', color: 'white' }}>
                  ตำลองค่าทางสถิติ
                </div>
              </Link>
            </MDBCol>
            <MDBCol style={{ textAlign: 'center' }}>
              <Link to='/page_contact' style={{ marginTop: '30px' }}>
                <img
                  src='https://www.flaticon.com/svg/static/icons/svg/2190/2190552.svg'
                  style={{ width: '30px' }}
                />
                <div style={{ fontSize: '15px', color: 'white' }}>
                  ติดต่อเรา
                </div>
              </Link>
            </MDBCol>
          </MDBRow>
        </MDBRow>
      </MDBContainer>
    </MDBFooter>
  )
}

export default FooterPage
