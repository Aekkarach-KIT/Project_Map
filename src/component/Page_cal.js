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
export default class PageCal extends Component {
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
                  marginBottom: '0px',
                  marginLeft: '8%'
                }}
              >
                <iframe
                  width='1280'
                  height='2500'
                  src='https://app.powerbi.com/view?r=eyJrIjoiNzkyZjQ1OGEtMGVhYi00YWFjLTg0MjYtNzIzMWY1MmRhNjBhIiwidCI6IjhlNjM0ZTY3LTlkNjYtNDZkMi1hNTI5LWUxYjcwOGM1ZDhiYyIsImMiOjEwfQ%3D%3D'
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
