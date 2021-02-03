import NaBar from './Bar'
import Footer from './Footer'
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
export default class PageDow extends Component {
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
                  marginBottom: '90px',
                  marginLeft: '8%'
                }}
              >
                <a
                  href='https://docs.google.com/spreadsheets/d/1z89Wz_zwF7a0OeFLgRr3vZE2M6j6_JT8mckMJSMk0a4/edit?usp=sharing'
                  style={{ marginTop: '30px' }}
                >
                  <div>ข้อมูลที่เกี่ยวข้อง</div>
                </a>
              </Container>

              <Footer />
            </div>
          </ReactCSSTransitionGroup>
        </Fragment>
      </div>
    )
  }
}
