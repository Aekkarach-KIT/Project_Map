import NaBar from './Bar'
import Footer from './Footer'
import './Style.css'
import React, { Component, Fragment } from 'react'
import {
  Row,
  Col,
  Button,
  CardHeader,
  Card,
  CardBody,
  Progress,
  TabContent,
  TabPane,
  CardTitle,
  CardSubtitle,
  CardText,
  Container,
  CardImg
} from 'reactstrap'
import { Link } from 'react-router-dom'

export default class PageHome extends Component {
  render () {
    return (
      <div>
        <NaBar />
        <Fragment>
          <div>
            <Container>
              <div
                style={{
                  textAlign: 'center',
                  letterSpacing: '3px',
                  fontSize: '55px',
                  fontStyle: 'bold',
                  marginTop: '30px',
                  color: '#259AC3'
                }}
              >
                ข้อมูลสถิติจังหวัดภูเก็ต
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
                ระบบรวบรวมสถิติด้านต่างๆในพื้นที่จังหวัดภูเก็ต
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
                Phuket Static System
              </div>

              <Row
                style={{
                  justifyContent: 'center',
                  marginTop: '50px',
                  marginBottom: '130px'
                }}
              >
                <Col style={{ textAlign: 'center' }}>
                  <Link to='/page_home'>
                    <img
                      src='https://www.flaticon.com/svg/static/icons/svg/3011/3011069.svg'
                      style={{ width: '170px' }}
                    />
                  </Link>

                  <div style={{ marginTop: '10px' }}>หน้าหลัก</div>
                </Col>
                <Col style={{ textAlign: 'center' }}>
                  <Link to='/page_covid'>
                    <img
                      src='https://www.flaticon.com/svg/static/icons/svg/3728/3728616.svg'
                      style={{ width: '170px' }}
                    />
                  </Link>
                  <div style={{ marginTop: '10px' }}>
                    สถานการณ์โควิดในประเทศไทย
                  </div>
                </Col>
                <Col style={{ textAlign: 'center' }}>
                  <Link to='/page_table'>
                    <img
                      src='https://www.flaticon.com/svg/static/icons/svg/550/550607.svg'
                      style={{ width: '170px' }}
                    />
                  </Link>
                  <div style={{ marginTop: '10px' }}>การจำลองค่าทางสถิติ</div>
                </Col>
                <Col style={{ textAlign: 'center' }}>
                  <Link to='/page_contact'>
                    <img
                      src='https://www.flaticon.com/svg/static/icons/svg/2190/2190552.svg'
                      style={{ width: '170px' }}
                    />
                  </Link>
                  <div style={{ marginTop: '10px' }}>คำแนะนำ</div>
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
