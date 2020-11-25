import React, { Component } from 'react'
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
import Chart from 'react-google-charts'
import { MDBBtn } from 'mdbreact'
class Calculator extends Component {
  constructor (props) {
    super(props)

    this.handleChange = this.handleChange.bind(this)
  }
  handleChange (e) {
    e.preventDefault()
    const UIX1 = document.getElementById('X1').value
    const UIX2 = document.getElementById('X2').value
    const UIX3 = document.getElementById('X3').value

    const UIR1 = document.getElementById('R1').value
    const UIR2 = document.getElementById('R2').value
    const UIR3 = document.getElementById('R3').value

    const UIK1 = document.getElementById('K1').value
    const UIK2 = document.getElementById('K2').value
    const UIK3 = document.getElementById('K3').value

    // Calculate

    const NumX1 = parseFloat(UIX1)
    const NumX2 = parseFloat(UIX2)
    const NumX3 = parseFloat(UIX3)

    const NumR1 = parseFloat(UIR1)
    const NumR2 = parseFloat(UIR2)
    const NumR3 = parseFloat(UIR3)

    const NumK1 = parseFloat(UIK1)
    const NumK2 = parseFloat(UIK2)
    const NumK3 = parseFloat(UIK3)

    const totalHotel = ((NumX1 * NumR1) / 100) * NumK1.toFixed(2)
    const totalRent = ((NumX2 * NumR2) / 100) * NumK2.toFixed(2)
    const totalApartment = ((NumX3 * NumR3) / 100) * NumK3.toFixed(2)

    const totalPeople = totalHotel + totalRent + totalApartment

    document.getElementById('totalPeople').innerHTML = totalPeople + 'คน'
  }
  render () {
    return (
      <Container>
        <Card style={{ marginTop: 40 }}>
          <CardHeader
            style={{
              textAlign: 'center',
              backgroundColor: '#000066',
              color: 'white',
              fontSize: '1.2rem'
            }}
          >
            คำนวณค่าประมาณการประชากรแฝง
          </CardHeader>
          <CardBody>
            <Col>
              <Row style={{ justifyContent: 'space-evenly', marginTop: '20' }}>
                <div>
                  X1
                  <input class='input' id='X1' type='number' />
                </div>
                <div>
                  X2
                  <input class='input' id='X2' type='number' size='20' />
                </div>
                <div>
                  X3
                  <input class='input' id='X3' type='number' size='5' />
                </div>
              </Row>
              <Row style={{ justifyContent: 'space-evenly', marginTop: '20' }}>
                <div>
                  R1
                  <input class='input' id='R1' type='number' size='3' />
                </div>
                <div>
                  R2
                  <input class='input' id='R2' type='number' size='3' />
                </div>
                <div>
                  R3
                  <input class='input' id='R3' type='number' size='3' />
                </div>
              </Row>
              <Row style={{ justifyContent: 'space-evenly', marginTop: '20' }}>
                <div>
                  K1
                  <input class='input' id='K1' type='number' size='1' />
                </div>
                <div>
                  K2
                  <input class='input' id='K2' type='number' size='1' />
                </div>
                <div>
                  K3
                  <input class='input' id='K3' type='number' size='1' />
                </div>
              </Row>

              <Row style={{ justifyContent: 'center', marginTop: '1.5rem' }}>
                <MDBBtn
                  color='amber'
                  onClick={this.handleChange}
                  style={{ fontSize: '1.2rem' }}
                >
                  คำนวณ
                </MDBBtn>
              </Row>
              <Row
                style={{
                  justifyContent: 'center',
                  marginTop: '1.5rem',
                  color: 'Red',
                  fontSize: '2rem',
                  fontStyle: 'oblique'
                }}
              >
                <p id='totalPeople' class='title is-1'></p>
              </Row>
            </Col>
            <Col style={{ textAlign: 'center' ,fontSize:'1.5rem'}}>คำอธิบายตัวแปร</Col>
            <Row style={{ justifyContent: 'center', marginTop: '1.5rem' }}>
              <table width='80%' align='center' style={{color:'blue'}}>
                <tr>
                  <td> X1 คือ จำนวนห้องพักของโรงแรมทั้งหมด </td>
                  <td> X2 คือ จำบ้านเช่าทั้งหมด </td>
                  <td> X3 คือ จำนวนห้องพักของหอพักทั้งหมด </td>
                </tr>
                <tr>
                  <td> R1 คือ ร้อยละของการเข้าพักในห้องพักโรงแรม </td>
                  <td> R2 คือ ร้อยละของการเข้าอยู่อาศัยของบ้านเช่า </td>
                  <td> R3 คือ ร้อยละของการเข้าพักในหอพัก </td>
                </tr>
                <tr>
                  <td> K1 จำนวนคนที่เข้าพักต่อห้องในโรงแรม </td>
                  <td> K2 จำนวนคนที่เข้าพักต่อหลังในบ้านเช่า </td>
                  <td> K3 จำนวนคนที่เข้าพักต่อห้องในหอพัก </td>
                </tr>
              </table>
            </Row>
          </CardBody>
        </Card>
      </Container>
    )
  }
}
export default Calculator
