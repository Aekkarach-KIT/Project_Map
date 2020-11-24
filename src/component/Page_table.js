import React, { Component } from 'react'
import NaBar from './Bar'
import Footer from './Footer'
import Calculator from './Calculator'
import { Navbar, Nav, Form } from 'react-bootstrap'
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
import { Route } from 'react-router-dom'

class PageTable extends Component {
  constructor (props) {
    super(props)
  }
  render () {
    return (
      <div>
        <NaBar />
        <Container>
          <Row>
            <div class='container-fluid'>
              <h2
                class='mt-4'
                style={{
                  color: 'blue',
                  textAlign: 'center',
                  backgroundColor: 'orange',
                  height: 70
                }}
              >
                การคำนวณค่าประมาณการทางสถิติแบ่งตามหมวดหมู่
              </h2>
            </div>
            <Col>
              <Row style={{ justifyContent: 'space-around' }}>
               <Calculator/>
              </Row>
            </Col>
          </Row>
        </Container>
        
        <Footer />
      </div>
    )
  }
}
export default PageTable
