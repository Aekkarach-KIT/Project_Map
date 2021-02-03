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

    // Calculate

    const NumX1 = parseFloat(UIX1)
    const NumX2 = parseFloat(UIX2)
    var x = 101082 //จน.นร.ทั้งหมด
    var y = 318674 //จน.แรงงานทั้งหมด
    var a = 104820 //จน.นักท่องเที่ยว
    var b = 72322 //จน.แรงงานต่างด้าว

    const totalStudent = (NumX1 * x) / 100
    const totalWorker = (NumX2 * y) / 100
    const travel = a
    const worker = b

    const dayPeople = totalStudent + totalWorker
    const nightPeople = travel + worker
    const totalPeople = dayPeople + nightPeople

    document.getElementById('totalPeople').innerHTML = totalPeople + 'คน'
    document.getElementById('dayPeople').innerHTML = dayPeople + 'คน'
    document.getElementById('nightPeople').innerHTML = nightPeople + 'คน'
  }
  render () {
    return (
      <Container>
        <Card style={{marginBottom:'20px', marginTop:'40px'}}>
        <Row style={{ justifyContent: 'center' }}>
          <Col style={{ textAlign: 'center' }}>
            <div style={{ marginTop: '20px' ,fontSize:'25px',color:'#2E8B57'}}>ประชากรแฝงรวม</div>
            <img
              src='https://pics.freeicons.io/uploads/icons/png/750560461579605641-512.png'
              style={{ width: '120px' }}
            />
            <div style={{ marginTop: '20px',color:'#FF6347',fontSize:'30px',fontStyle:'bold' }}>
              <p id='totalPeople' class='title is-1'></p>
            </div>
          </Col>
          <Col style={{ textAlign: 'center' }}>
            <div style={{ marginTop: '20px' ,fontSize:'25px',color:'#2E8B57'}}>ประชากรแฝงกลางวัน</div>
            <img
              src='https://pics.freeicons.io/uploads/icons/png/9100573021579547659-512.png'
              style={{ width: '120px' }}
            />
            <div style={{ marginTop: '20px',color:'#FF6347',fontSize:'30px',fontStyle:'bold' }}>
              <p id='dayPeople' class='title is-1'></p>
            </div>
          </Col>
          <Col style={{ textAlign: 'center' }}>
            <div style={{ marginTop: '20px' ,fontSize:'25px',color:'#2E8B57'}}>ประชากรแฝงกลางคืน</div>
            <img
              src='https://pics.freeicons.io/uploads/icons/png/5734291621558096344-512.png'
              style={{ width: '120px' }}
            />
            <div style={{ marginTop: '20px',color:'#FF6347',fontSize:'30px',fontStyle:'bold' }}>
              <p id='nightPeople' class='title is-1'></p>
            </div>
          </Col>
        </Row>
        </Card>
        <Card style={{ marginTop: 40 }}>
          <CardHeader
            style={{
              textAlign: 'center',
              backgroundColor: '#000066',
              color: 'white',
              fontSize: '35px'
            }}
          >
            คำนวณค่าประมาณการประชากรแฝง
          </CardHeader>
          <CardBody>
            <Col>
              <Row style={{ justifyContent: 'space-evenly', marginTop: '20' }}>
                <Col style={{ textAlign: 'center' }}>
                  <div style={{ marginBottom: '20px' ,fontSize:'30px',color:'blue'}}>จำนวนนักเรียนรวม</div>
                  <div style={{ marginTop: '20px',fontSize:'30px',color:'red' }}>101,082 คน</div>
                  <img
                    src='https://cdn0.iconfinder.com/data/icons/streamline-emoji-1/48/130-man-student-2-256.png'
                    style={{ width: '120px' }}
                  />
                  <div style={{ marginTop: '20px' ,fontSize:'17px',color:'green'}}>
                    ร้อยละของประชากรแฝงเทียบกับจำนวนนักเรียนทั้งหมด
                    <input class='input' id='X1' type='number' size='3' />
                  </div>
                </Col>
                <Col style={{ textAlign: 'center' }}>
                  <div style={{ marginBottom: '20px' ,fontSize:'30px',color:'blue'}}>จำนวนแรงงานรวม</div>
                  <div style={{ marginTop: '20px',fontSize:'30px',color:'red' }}>318,674 คน</div>
                  <img
                    src='https://cdn4.iconfinder.com/data/icons/build-a-house-filled-outline/512/engineer_engineering_work_industry_worker_construction_helmet_male_people-256.png'
                    style={{ width: '120px' }}
                  />
                  <div style={{ marginTop: '20px' ,fontSize:'17px',color:'green'}}>
                    ร้อยละของประชากรแฝงเทียบกับจำนวนแรงงานทั้งหมด
                    <input class='input' id='X2' type='number' size='3' />
                  </div>
                </Col>
              </Row>
              <hr/>
              <Row
                style={{ justifyContent: 'space-evenly', marginTop: '30px' }}
              >
                <Col style={{ textAlign: 'center' }}>
                  <div style={{ marginBottom: '20px' ,fontSize:'30px',color:'blue'}}>
                    จำนวนนักท่องเที่ยวรวม
                  </div>
                  <img
                    src='https://cdn1.iconfinder.com/data/icons/travel-111/64/travel-backpack-tourist-people-walk-tourism-traveler-256.png'
                    style={{ width: '120px' }}
                  />

                  <div style={{ marginTop: '20px',fontSize:'30px',color:'red' }}>104,820 คน</div>
                </Col>
                <Col style={{ textAlign: 'center' }}>
                  <div style={{ marginBottom: '20px' ,fontSize:'30px',color:'blue'}}>
                    จำนวนแรงงานต่างด้าวรวม
                  </div>
                  <img
                    src='https://cdn0.iconfinder.com/data/icons/male-national-character-4/128/Myanmar-man-longyi-national-costume-256.png'
                    style={{ width: '120px' }}
                  />

                  <div style={{ marginTop: '20px',fontSize:'30px',color:'red' }}>72,322 คน</div>
                </Col>
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
            </Col>
            
          </CardBody>
        </Card>
      </Container>
    )
  }
}
export default Calculator
