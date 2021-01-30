import NaBar from './Bar'
import Footer from './Footer'
import './Style.css'
import React, { Component, Fragment } from 'react'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'
import { Link } from 'react-router-dom'
import Image from 'react-bootstrap/Image'
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

export default class PageHome extends Component {
  render () {
    return (
      <div className='bgco'>
        <Fragment style={{ backgroundColor: '#113C7A' }}>
          <ReactCSSTransitionGroup
            component='div'
            transitionName='TabsAnimation'
            transitionAppear={true}
            transitionAppearTimeout={0}
            transitionEnter={false}
            transitionLeave={false}
          >
            <div>
              <NaBar />
              <a href='https://docs.google.com/spreadsheets/d/1z89Wz_zwF7a0OeFLgRr3vZE2M6j6_JT8mckMJSMk0a4/edit?usp=sharing' style={{ marginTop: '30px' }}>
                    <img
                      src='https://image.freepik.com/free-icon/big-arrow-representing-download_318-9995.jpg'
                      style={{ width: '50px' }}
                    />

                    <div>ข้อมูลที่เกี่ยวข้อง</div>
                  </a>
              <Container
                style={{
                  justifyContent: 'center',
                  marginTop: '20px',
                  marginBottom: '90px',
                  marginLeft: '8%'
                }}
              >
                <iframe
                  width='1280'
                  height='2180'
                  src='https://app.powerbi.com/view?r=eyJrIjoiMDEyMThjNTItZThlNC00NmNjLThhNzUtZjRkMzdkNTJkNjVlIiwidCI6IjhlNjM0ZTY3LTlkNjYtNDZkMi1hNTI5LWUxYjcwOGM1ZDhiYyIsImMiOjEwfQ%3D%3D&pageName=ReportSection'
                  frameborder='0'
                  allowFullScreen='true'
                ></iframe>
              </Container>
              <div class='container-fluid'>
                <h2
                  class='mt-4'
                  style={{
                    color: 'red',
                    textAlign: 'center'
                  }}
                >
                  สถิติด้านอื่น ๆ
                </h2>
              </div>
              <hr />
              <Row
                style={{
                  justifyContent: 'center',
                  marginTop: '10px',
                  marginBottom: '130px'
                }}
              >
                <Col style={{ textAlign: 'center' }}>
                  <Link to='/page_edu' style={{ marginTop: '30px' }}>
                    <img
                      src='https://cdn3.iconfinder.com/data/icons/education-and-school-8/48/Education-256.png'
                      style={{ width: '120px' }}
                    />

                    <div>การศึกษา</div>
                  </Link>
                </Col>
                <Col style={{ textAlign: 'center' }}>
                  <Link to='/page_env' style={{ marginTop: '30px' }}>
                    <img
                      src='https://cdn0.iconfinder.com/data/icons/streamline-emoji-1/48/138-man-farmer-2-256.png'
                      style={{ width: '120px' }}
                    />

                    <div>การเกษตรและสิ่งแวดล้อม</div>
                  </Link>
                </Col>
                <Col style={{ textAlign: 'center' }}>
                  <Link to='/page_worker' style={{ marginTop: '30px' }}>
                    <img
                      src='https://cdn4.iconfinder.com/data/icons/avatars-xmas-giveaway/128/builder_worker_helmet-256.png'
                      style={{ width: '120px' }}
                    />

                    <div>สถิติแรงงาน</div>
                  </Link>
                </Col>

               
              </Row>

              <Footer />
            </div>
          </ReactCSSTransitionGroup>
        </Fragment>
      </div>
    )
  }
}
