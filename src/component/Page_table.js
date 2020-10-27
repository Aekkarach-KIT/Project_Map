import React, { Component } from 'react'
import NaBar from './Bar'
import Footer from './Footer'
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
                หมวดหมู่ด้านสถิติ
              </h2>
            </div>
            <Col>
              <Row style={{ justifyContent: 'space-around' }}>
                <Card style={{ width: '17rem', marginTop: 15 }}>
                  <CardImg
                    variant='top'
                    src='https://www.netclipart.com/pp/m/94-949525_car-icons-red-car-color-icon-png.png'
                    style={{ width: 270, height: 200 }}
                  />
                  <CardBody>
                    <CardTitle>การคมนาคม</CardTitle>
                    <Button variant='primary' color='danger'>
                      คลิก
                    </Button>
                  </CardBody>
                </Card>
                <Card style={{ width: '17rem', marginTop: 15 }}>
                  <CardImg
                    variant='top'
                    src='https://i.pinimg.com/originals/d0/96/78/d09678a34d6b9bce069ad2da24a195ed.jpg'
                    style={{ width: 270, height: 200 }}
                  />
                  <CardBody>
                    <CardTitle>การจัดการขยะ</CardTitle>
                    <Button variant='primary' color='danger'>
                      คลิก
                    </Button>
                  </CardBody>
                </Card>
                <Card style={{ width: '17rem', marginTop: 15 }}>
                  <CardImg
                    variant='top'
                    width='1rem'
                    src='data:image/png;base64,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'
                    style={{ width: 270, height: 200 }}
                  />
                  <CardBody>
                    <CardTitle>ปริมาณการใช้น้ำประปา</CardTitle>
                    <Button variant='primary' color='danger'>
                      คลิก
                    </Button>
                  </CardBody>
                </Card>
              </Row>
              <Row style={{ justifyContent: 'space-around' }}>
                <Card style={{ width: '17rem', marginTop: 15 }}>
                  <CardImg
                    variant='top'
                    src='https://beelievesourcing.co.th/wp-content/uploads/2018/07/icon-light02.jpg'
                    style={{ width: 270, height: 200 }}
                  />
                  <CardBody>
                    <CardTitle>ปริมาณการใช้ไฟฟ้า</CardTitle>
                    <Button variant='primary' color='danger'>
                      คลิก
                    </Button>
                  </CardBody>
                </Card>
                <Card style={{ width: '17rem', marginTop: 15 }}>
                  <CardImg
                    variant='top'
                    src='https://www.localkit.app/img/icons/icon-001.png'
                    style={{ width: 270, height: 200 }}
                  />
                  <CardBody>
                    <CardTitle>การท่องเที่ยว</CardTitle>
                    <Button variant='primary' color='danger'>
                      คลิก
                    </Button>
                  </CardBody>
                </Card>
                <Card style={{ width: '17rem', marginTop: 15 }}>
                  <CardImg
                    variant='top'
                    src='data:image/png;base64,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'
                    style={{ width: 270, height: 200 }}
                  />
                  <CardBody>
                    <CardTitle>การศึกษา</CardTitle>
                    <Button variant='primary' color='danger'>
                      คลิก
                    </Button>
                  </CardBody>
                </Card>
              </Row>
              <Row style={{ justifyContent: 'space-around' }}>
                <Card style={{ width: '17rem', marginTop: 15 }}>
                  <CardImg
                    variant='top'
                    src='https://png.pngtree.com/element_our/20200702/ourlarge/pngtree-economic-growth-design-icon-image_2291717.jpg'
                    style={{ width: 270, height: 200 }}
                  />
                  <CardBody>
                    <CardTitle>เศรษฐกิจ</CardTitle>
                    <Button variant='primary' color='danger'>
                      คลิก
                    </Button>
                  </CardBody>
                </Card>
                <Card style={{ width: '17rem', marginTop: 15 }}>
                  <CardImg
                    variant='top'
                    src='https://image.freepik.com/free-vector/house-building-vector-icon-illustration_138676-208.jpg'
                    style={{ width: 270, height: 200 }}
                  />
                  <CardBody>
                    <CardTitle>เคหะสถาน</CardTitle>
                    <Button variant='primary' color='danger'>
                      คลิก
                    </Button>
                  </CardBody>
                </Card>
                <Card style={{ width: '17rem', marginTop: 15 }}>
                  <CardImg
                    variant='top'
                    src='https://image.flaticon.com/icons/png/512/864/864573.png'
                    style={{ width: 270, height: 200 }}
                  />
                  <CardBody>
                    <CardTitle>สุขภาพ</CardTitle>
                    <Button variant='primary' color='danger'>
                      คลิก
                    </Button>
                  </CardBody>
                </Card>
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
