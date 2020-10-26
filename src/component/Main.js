import React from 'react'
import { Container } from 'react-bootstrap/lib/Tab'
import fire from '../config/fire'
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
const NaBar = props => {
  const logout = () => {
    fire.auth().signOut()
  }
  return (
    <Navbar bg='#DEEBF7'>
      <Form inline>
        <MDBBtn rounded color='danger' onClick={logout}>
          logout
        </MDBBtn>
      </Form>

      <Container style={{backgroundColor='#113C7A'}}>
          <Row>
              <Card>
                  <b>ggegergegege</b>
                  <b>frgtrthehnbhtr5</b>
              </Card>
              <CardImg
                              style={{
                                marginTop: 7,
                                resizeMode: 'contain',
                                height: 150,
                                width: 220
                              }}
                              variant='top'
                              src='https://i.pinimg.com/originals/67/83/d7/6783d7a1dcef38a88220a7ab3414fb38.png'
                            />
          </Row>

      </Container>
    </Navbar>
  )
}
