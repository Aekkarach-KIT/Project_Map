import NaBar from './Bar'
import Footer from './Footer'
import './Style.css'
import React, { Component, Fragment } from 'react'
import { Row, Col, Container } from 'reactstrap'
import { Link } from 'react-router-dom'

export default class PageHome extends Component {
  render () {
    return (
      <div className='bgco'>
        <NaBar />
        <Fragment>
          <div>
            <Container
            style={{marginBottom: '160px'}}>
              <div
                style={{
                  textAlign: 'center',
                  letterSpacing: '3px',
                  fontSize: '45px',
                  fontStyle: 'bold',
                  marginTop: '30px',
                  color: '#D80000',
                }}
              >
                DATA VISUALIZATION AND ANALYTICS
              </div>
              <div
                style={{
                  textAlign: 'center',
                  letterSpacing: '1px',
                  fontSize: '20px',
                  marginTop: '17px',
                  color: '#525252'
                }}
              >
                กรณีศึกษา: ข้อมูลสถิติจังหวัดภูเก็ต
              </div>
              <div
                style={{
                  textAlign: 'center',
                  fontSize: '20px',
                  fontStyle: 'bold',
                  marginTop: '17px',
                  color: '#606C7B'
                }}
              >
                Phuket statistics System
              </div>

              <Row
                style={{
                  justifyContent: 'center',
                  marginTop: '100px',
                  marginBottom: '130px'
                }}
              >
                <Col style={{ textAlign: 'center' }}>
                  <Link to='/page_home'>
                    <img
                      src='https://www.flaticon.com/svg/static/icons/svg/3011/3011069.svg'
                      style={{ width: '120px' }}
                    />
                  </Link>

                  <div style={{ marginTop: '10px' }}>สถิติภาพรวม</div>
                </Col>
                <Col style={{ textAlign: 'center' }}>
                  <Link to='/page_cal'>
                    <img
                      src='https://www.flaticon.com/svg/static/icons/svg/550/550607.svg'
                      style={{ width: '120px' }}
                    />
                  </Link>
                  <div style={{ marginTop: '10px' }}>การจำลองค่าทางสถิติ</div>
                </Col>
                <Col style={{ textAlign: 'center' }}>
                  <Link to='/page_covid'>
                    <img
                      src='https://www.flaticon.com/svg/static/icons/svg/3728/3728616.svg'
                      style={{ width: '120px' }}
                    />
                  </Link>
                  <div style={{ marginTop: '10px' }}>สถานการณ์ Covid-19</div>
                </Col>
                <Col style={{ textAlign: 'center' }}>
                  <Link to='/page_contact'>
                    <img
                      src='https://www.flaticon.com/svg/static/icons/svg/2190/2190552.svg'
                      style={{ width: '120px' }}
                    />
                  </Link>
                  <div style={{ marginTop: '10px' }}>ติดต่อเรา</div>
                </Col>
              </Row>
            </Container>
          </div>
        </Fragment>

        <Footer />
      </div>
    )
  }
}
