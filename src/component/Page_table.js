import React, { Component } from 'react'
import NaBar from './Bar'
import Footer from './Footer'
import Calculator from './Calculator'
import { Navbar, Nav, Form } from 'react-bootstrap'
import { Link } from 'react-router-dom'
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
            <Col>
              <Row style={{ justifyContent: 'space-around' }}>
                <Calculator />
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
