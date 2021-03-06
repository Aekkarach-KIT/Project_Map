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

              <Container
                style={{
                  justifyContent: 'center',
                  marginTop: '50px',
                  marginBottom: '50px',
                  marginLeft: '8%'
                }}
              >
                <Row
                  style={{
                    justifyContent: 'center',
                    marginTop: '50px',
                    marginBottom: '50px',
                    width: '1280px'
                  }}
                >
                  <Col style={{ textAlign: 'center' }}>
                    <Link to='/page_home' style={{ marginTop: '30px' }}>
                      <img
                        src='https://www.flaticon.com/svg/static/icons/svg/3011/3011069.svg'
                        style={{ width: '70px' }}
                      />
                      <div style={{ fontSize: '17px', color: '#003399' }}>
                        สถิติภาพรวม
                      </div>
                    </Link>
                  </Col>

                  <Col style={{ textAlign: 'center' }}>
                    <Link to='/page_edu' style={{ marginTop: '30px' }}>
                      <img
                        src='https://cdn3.iconfinder.com/data/icons/education-and-school-8/48/Education-256.png'
                        style={{ width: '70px' }}
                      />
                      <div style={{ fontSize: '17px', color: '#003399' }}>
                        การศึกษา
                      </div>
                    </Link>
                  </Col>
                  <Col style={{ textAlign: 'center' }}>
                    <Link to='/page_env' style={{ marginTop: '30px' }}>
                      <img
                        src='https://cdn0.iconfinder.com/data/icons/streamline-emoji-1/48/138-man-farmer-2-256.png'
                        style={{ width: '70px' }}
                      />

                      <div style={{ fontSize: '17px', color: '#003399' }}>
                        การเกษตรและสิ่งแวดล้อม
                      </div>
                    </Link>
                  </Col>
                  <Col style={{ textAlign: 'center' }}>
                    <Link to='/page_worker' style={{ marginTop: '30px' }}>
                      <img
                        src='https://cdn4.iconfinder.com/data/icons/avatars-xmas-giveaway/128/builder_worker_helmet-256.png'
                        style={{ width: '70px' }}
                      />

                      <div style={{ fontSize: '17px', color: '#003399' }}>
                        สถิติแรงงาน
                      </div>
                    </Link>
                  </Col>
                </Row>

                <iframe
                  width='1280'
                  height='2180'
                  src='https://app.powerbi.com/view?r=eyJrIjoiMDEyMThjNTItZThlNC00NmNjLThhNzUtZjRkMzdkNTJkNjVlIiwidCI6IjhlNjM0ZTY3LTlkNjYtNDZkMi1hNTI5LWUxYjcwOGM1ZDhiYyIsImMiOjEwfQ%3D%3D&pageName=ReportSection'
                  frameborder='0'
                  allowFullScreen='true'
                ></iframe>
              </Container>

              <Footer />
            </div>
          </ReactCSSTransitionGroup>
        </Fragment>
      </div>
    )
  }
}
