import NaBar from './Bar'
import Footer from './Footer'
import './Style.css'
import React, { Component, Fragment } from 'react'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'
import classnames from 'classnames'
import Tabletop from 'tabletop'
import { Chart } from 'react-google-charts'
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

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowDown, faArrowUp } from '@fortawesome/free-solid-svg-icons'
import { ResponsiveContainer } from 'recharts'

export default class PageHome extends Component {
  constructor () {
    super()

    this.state = {
      dropdownOpen: false,
      activeTab1: '11',

      People: []
    }
    this.toggle = this.toggle.bind(this)
    this.toggle1 = this.toggle1.bind(this)
  }

  toggle () {
    this.setState(prevState => ({
      dropdownOpen: !prevState.dropdownOpen
    }))
  }

  toggle1 (tab) {
    if (this.state.activeTab1 !== tab) {
      this.setState({
        activeTab1: tab
      })
    }
  }
  componentDidMount () {
    Tabletop.init({
      key: '1iiB6V8DpMS9yx6vph_qbWcP7uVXfPLcYXcMVFXaR15w',
      callback: googleData => {
        this.setState({
          People: googleData
        })
      },
      simpleSheet: true
    })
  }

  render () {
    const { People } = this.state

    return (
      <div className='bgco'>
        <Fragment style={{backgroundColor:'#113C7A'}}>
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

              {People.map(obj => {
                return (
                  <div class='container-fluid'>
                    <h2 class='mt-4' style={{color:'white'}}>จำนวนประชากร</h2>
                    <ol class='breadcrumb mb-4' style={{backgroundColor:'#FFC0CB'}}>
                      <li class='num'>
                        <h3>{obj.People}</h3>
                      </li>
                    </ol>
                  </div>
                )
              })}
              {People.map(obj => {
                return (
                  <div className='d-flex justify-content-center'>
                    <Row>
                      <Col mb='3'>
                        <Card
                          style={{
                            width: '18rem',
                            backgroundColor: '#33FFCC',
                            color: '#000080'
                          }}
                        >
                          <CardBody>
                            <CardTitle>ปริมาณยานพาหนะ</CardTitle>
                            <CardText
                              className='Text'
                              style={{ color: '#FF4500', fontSize: 25 }}
                            >
                              {obj.ปริมาณยานพาหนะ}
                            </CardText>
                          </CardBody>
                        </Card>
                      </Col>

                      <Col mb='3'>
                        <Card
                          style={{
                            width: '18rem',
                            backgroundColor: '#33FFCC',
                            color: '#000080'
                          }}
                        >
                          <CardBody>
                            <CardTitle>ปริมาณขยะ</CardTitle>
                            <CardText
                              className='Text'
                              style={{ color: '#FF4500', fontSize: 25 }}
                            >
                              {obj.ปริมาณขยะ}
                            </CardText>
                          </CardBody>
                        </Card>
                      </Col>

                      <Col mb='3'>
                        <Card
                          style={{
                            width: '18rem',
                            backgroundColor: '#33FFCC',
                            color: '#000080'
                          }}
                        >
                          <CardBody>
                            <CardTitle>นักท่องเที่ยว</CardTitle>
                            <CardText
                              className='Text'
                              style={{ color: '#FF4500', fontSize: 25 }}
                            >
                              {obj.นักท่องเที่ยว}
                            </CardText>
                          </CardBody>
                        </Card>
                      </Col>

                      <Col mb='3'>
                        <Card
                          style={{
                            width: '18rem',
                            backgroundColor: '#33FFCC',
                            color: '#000080'
                          }}
                        >
                          <CardBody>
                            <CardTitle>จำนวนครัวเรือน</CardTitle>
                            <CardText
                              className='Text'
                              style={{ color: '#FF4500', fontSize: 25 }}
                            >
                              {obj.จำนวนครัวเรือน}
                            </CardText>
                          </CardBody>
                        </Card>
                      </Col>

                      <Col mb='3'>
                        <Card
                          style={{
                            width: '18rem',
                            backgroundColor: '#33FFCC',
                            color: '#000080'
                          }}
                        >
                          <CardBody>
                            <CardTitle>ประชากรแฝง</CardTitle>
                            <CardText
                              className='Text'
                              style={{ color: '#FF4500', fontSize: 25 }}
                            >
                              {obj.ประชากรแฝง}
                            </CardText>
                          </CardBody>
                        </Card>
                      </Col>
                    </Row>
                  </div>
                )
              })}
              <Container className='Main'>
                <Row md='7' lg='7'>
                  <Col md='7' lg='7'>
                    <Card className='mb-7'>
                      <CardHeader className='card-header-tab'>
                        <div className='card-header-title'>
                          <i className='header-icon lnr-rocket icon-gradient bg-tempting-azure'>
                            {' '}
                          </i>
                          อัตราการเปลี่ยนแปลงของประชากร
                        </div>
                        <div className='btn-actions-pane-right'>
                          <Button
                            outline
                            className={
                              'border-0 btn-pill btn-wide btn-transition ' +
                              classnames({
                                active: this.state.activeTab1 === '11'
                              })
                            }
                            color='primary'
                            onClick={() => {
                              this.toggle1('11')
                            }}
                          >
                            บุคคลในพื้นที่(ตามทะเบียนราษฎร์)
                          </Button>
                          <Button
                            outline
                            className={
                              'ml-1 btn-pill btn-wide border-0 btn-transition ' +
                              classnames({
                                active: this.state.activeTab1 === '22'
                              })
                            }
                            color='primary'
                            onClick={() => {
                              this.toggle1('22')
                            }}
                          >
                            ประชากรแฝง
                          </Button>
                        </div>
                      </CardHeader>
                      <TabContent activeTab={this.state.activeTab1}>
                        <TabPane tabId='11'>
                          <CardBody className='pt-2'>
                            <Row className='mt-3'>
                              <Col md='10'>
                                <div className='widget-content'>
                                  <div className='widget-content-outer'>
                                    <div className='widget-content-wrapper'>
                                      <div className='widget-content-left mr-3'>
                                        <div className='widget-numbers fsize-4 text-muted'>
                                          52.73%
                                        </div>
                                      </div>
                                      <div className='widget-content-right'>
                                        <div className='text-muted opacity-6'>
                                          จำนวนประชากรเพศหญิง
                                        </div>
                                      </div>
                                    </div>
                                    <div className='widget-progress-wrapper mt-1'>
                                      <Progress
                                        className='progress-bar-sm progress-bar-animated-alt'
                                        color='danger'
                                        value='52.73'
                                      />
                                    </div>
                                  </div>
                                </div>
                              </Col>
                              <Col md='10'>
                                <div className='widget-content'>
                                  <div className='widget-content-outer'>
                                    <div className='widget-content-wrapper'>
                                      <div className='widget-content-left mr-3'>
                                        <div className='widget-numbers fsize-3 text-muted'>
                                          47.26%
                                        </div>
                                      </div>
                                      <div className='widget-content-right'>
                                        <div className='text-muted opacity-6'>
                                          จำนวนประชากรเพศชาย
                                        </div>
                                      </div>
                                    </div>
                                    <div className='widget-progress-wrapper mt-1'>
                                      <Progress
                                        className='progress-bar-sm progress-bar-animated-alt'
                                        color='success'
                                        value='47.26'
                                      />
                                    </div>
                                  </div>
                                </div>
                              </Col>
                            </Row>
                            <div className='divider mt-4' />
                            <Row>
                              <Col md='10'>
                                <div className='widget-content'>
                                  <div className='widget-content-outer'>
                                    <div className='widget-content-wrapper'>
                                      <div className='widget-content-left mr-3'>
                                        <div className='widget-numbers fsize-3 text-muted'>
                                          11.68%
                                        </div>
                                      </div>
                                      <div className='widget-content-right'>
                                        <div className='text-muted opacity-6'>
                                          จำนวนประชากรผู้สูงอายุ (60ปี ขึ้นไป)
                                        </div>
                                      </div>
                                    </div>
                                    <div className='widget-progress-wrapper mt-1'>
                                      <Progress
                                        className='progress-bar-sm progress-bar-animated-alt'
                                        color='primary'
                                        value='11.68'
                                      />
                                    </div>
                                  </div>
                                </div>
                              </Col>
                              <Col md='10'>
                                <div className='widget-content'>
                                  <div className='widget-content-outer'>
                                    <div className='widget-content-wrapper'>
                                      <div className='widget-content-left mr-3'>
                                        <div className='widget-numbers fsize-3 text-muted'>
                                          24.11%
                                        </div>
                                      </div>
                                      <div className='widget-content-right'>
                                        <div className='text-muted opacity-6'>
                                          จำนวนประชากรเด็ก (อายุระหว่าง 0-15 ปี)
                                        </div>
                                      </div>
                                    </div>
                                    <div className='widget-progress-wrapper mt-1'>
                                      <Progress
                                        className='progress-bar-sm progress-bar-animated-alt'
                                        color='warning'
                                        value='24.11'
                                      />
                                    </div>
                                  </div>
                                </div>
                              </Col>
                            </Row>
                            <Row>
                              <Col md='10'>
                                <div className='widget-content'>
                                  <div className='widget-content-outer'>
                                    <div className='widget-content-wrapper'>
                                      <div className='widget-content-left mr-3'>
                                        <div className='widget-numbers fsize-3 text-muted'>
                                          65.12%
                                        </div>
                                      </div>
                                      <div className='widget-content-right'>
                                        <div className='text-muted opacity-6'>
                                          จำนวนประชากรวัยทำงาน (อายุระหว่าง15-60
                                          ปี)
                                        </div>
                                      </div>
                                    </div>
                                    <div className='widget-progress-wrapper mt-1'>
                                      <Progress
                                        className='progress-bar-sm progress-bar-animated-alt'
                                        color='primary'
                                        value='65.12'
                                      />
                                    </div>
                                  </div>
                                </div>
                              </Col>
                            </Row>
                          </CardBody>
                          <div className='widget-chart p-0'>
                            <div className='widget-chart-content'>
                              <div className='widget-description mt-0 text-danger'>
                                <FontAwesomeIcon icon={faArrowDown} />
                                <span className='pl-1' fontSize=''>
                                  0.066%
                                </span>
                                <span className='text-muted opacity-8 pl-1'>
                                  ร้อยละการการขยายตัวของจำนวนประชากรเทียบจากปีก่อนหน้า
                                </span>
                              </div>
                            </div>
                            <ResponsiveContainer height={220}>
                              <iframe
                                width='500'
                                height='214'
                                seamless
                                frameborder='0'
                                scrolling='no'
                                src='https://docs.google.com/spreadsheets/d/e/2PACX-1vR6wNP974coAJ0OsHNS_I1PXyDSeOHrgVe51akze9wmvWHtIpKqpSdT2dZWBjerofco7_VrnZ5DQREw/pubchart?oid=1363727181&amp;format=interactive'
                              ></iframe>
                            </ResponsiveContainer>
                            <CardSubtitle
                              style={{
                                textAlign: 'center',
                                padding: 5,
                                color: 'grey',
                                fontSize: 14
                              }}
                            >
                              ที่มา: กรมการปกครอง กระทรวงมหาดไทย
                            </CardSubtitle>
                          </div>
                        </TabPane>
                        <TabPane tabId='22'>
                          <div className='widget-chart p-0'>
                            <ResponsiveContainer height={200} width={600}>
                              <Chart
                                width={'500px'}
                                height={'500px'}
                                chartType='LineChart'
                                data={[
                                  ['ปี', 'จำนวน(คน)'],

                                  [2553, 45000],
                                  [2554, 55000],
                                  [2555, 70000],
                                  [2556, 80000],
                                  [2557, 94000],
                                  [2558, 120000],
                                  [2559, 150000],
                                  [2560, 200000]
                                ]}
                                options={{
                                  hAxis: {
                                    title: 'ปี'
                                  },
                                  vAxis: {
                                    title: 'จำนวนประชากร'
                                  }
                                }}
                                rootProps={{ 'data-testid': '1' }}
                              />
                            </ResponsiveContainer>
                            <div className='widget-chart-content mt-3 mb-2'>
                              <div className='widget-description mt-0 text-success'>
                                <FontAwesomeIcon icon={faArrowUp} />
                                <span className='pl-2 pr-2'>37.2%</span>
                                <span className='text-muted opacity-8'>
                                  ร้อยละการขยายตัวของจำนวนประชากรแฝงจากปีก่อนหน้า
                                </span>
                              </div>
                            </div>
                          </div>
                          <CardBody className='pt-2'>
                            <Row>
                              <Col md='10' lg='10'>
                                <div className='widget-content'>
                                  <div className='widget-content-outer'>
                                    <div className='widget-content-wrapper'>
                                      <div className='widget-content-left mr-3'>
                                        <div className='widget-numbers fsize-3 text-muted'>
                                          23%
                                        </div>
                                      </div>
                                      <div className='widget-content-right'>
                                        <div className='text-muted opacity-6'>
                                          ประชากรแฝงกลางวัน
                                        </div>
                                      </div>
                                    </div>
                                    <div className='widget-progress-wrapper mt-1'>
                                      <Progress
                                        className='progress-bar-sm progress-bar-animated-alt'
                                        color='warning'
                                        value='23'
                                      />
                                    </div>
                                  </div>
                                </div>
                              </Col>
                              <Col md='10' lg='10'>
                                <div className='widget-content'>
                                  <div className='widget-content-outer'>
                                    <div className='widget-content-wrapper'>
                                      <div className='widget-content-left mr-3'>
                                        <div className='widget-numbers fsize-3 text-muted'>
                                          76%
                                        </div>
                                      </div>
                                      <div className='widget-content-right'>
                                        <div className='text-muted opacity-6'>
                                          ประชากรแฝงกลางคืน
                                        </div>
                                      </div>
                                    </div>
                                    <div className='widget-progress-wrapper mt-1'>
                                      <Progress
                                        className='progress-bar-sm progress-bar-animated-alt'
                                        color='info'
                                        value='76'
                                      />
                                    </div>
                                  </div>
                                </div>
                              </Col>
                            </Row>
                            <div className='divider mt-4' />
                            <Row>
                              <Col md='10' lg='10'>
                                <div className='widget-content'>
                                  <div className='widget-content-outer'>
                                    <div className='widget-content-wrapper'>
                                      <div className='widget-content-left mr-3'>
                                        <div className='widget-numbers fsize-3 text-muted'>
                                          83%
                                        </div>
                                      </div>
                                      <div className='widget-content-right'>
                                        <div className='text-muted opacity-6'>
                                          นักท่องเที่ยว
                                        </div>
                                      </div>
                                    </div>
                                    <div className='widget-progress-wrapper mt-1'>
                                      <Progress
                                        className='progress-bar-sm progress-bar-animated-alt'
                                        color='danger'
                                        value='83'
                                      />
                                    </div>
                                  </div>
                                </div>
                              </Col>
                              <Col md='10' lg='10'>
                                <div className='widget-content'>
                                  <div className='widget-content-outer'>
                                    <div className='widget-content-wrapper'>
                                      <div className='widget-content-left mr-3'>
                                        <div className='widget-numbers fsize-3 text-muted'>
                                          48%
                                        </div>
                                      </div>
                                      <div className='widget-content-right'>
                                        <div className='text-muted opacity-6'>
                                          แรงงานต่างด้าว
                                        </div>
                                      </div>
                                    </div>
                                    <div className='widget-progress-wrapper mt-1'>
                                      <Progress
                                        className='progress-bar-sm progress-bar-animated-alt'
                                        color='alternate'
                                        value='48'
                                      />
                                    </div>
                                  </div>
                                </div>
                              </Col>
                            </Row>
                          </CardBody>
                        </TabPane>
                      </TabContent>
                    </Card>
                  </Col>

                  <Col md='5' lg='5'>
                    <Card
                      style={{
                        marginTop: 0
                      }}
                    >
                      <iframe
                        width='420'
                        height='328'
                        seamless
                        frameborder='0'
                        scrolling='no'
                        src='https://docs.google.com/spreadsheets/d/e/2PACX-1vR6wNP974coAJ0OsHNS_I1PXyDSeOHrgVe51akze9wmvWHtIpKqpSdT2dZWBjerofco7_VrnZ5DQREw/pubchart?oid=775098942&amp;format=interactive'
                      ></iframe>
                      <CardSubtitle
                        style={{
                          marginTop: 1,
                          textAlign: 'left',
                          color: 'grey',
                          textAlign: 'center',
                          fontSize: 14
                        }}
                      >
                        ที่มา: สำนักงานสถิติจังหวัดภูเก็ต
                      </CardSubtitle>
                    </Card>
                    <Card
                      style={{
                        marginTop: 10
                      }}
                    >
                      <iframe
                        width='420'
                        height='410'
                        seamless
                        frameborder='0'
                        scrolling='no'
                        src='https://docs.google.com/spreadsheets/d/e/2PACX-1vR6wNP974coAJ0OsHNS_I1PXyDSeOHrgVe51akze9wmvWHtIpKqpSdT2dZWBjerofco7_VrnZ5DQREw/pubchart?oid=1416066045&amp;format=interactive'
                      ></iframe>
                      <CardSubtitle
                        style={{
                          marginTop: 1,
                          textAlign: 'left',
                          color: 'grey',
                          textAlign: 'center',
                          fontSize: 14
                        }}
                      >
                        ที่มา: กรมการปกครอง กระทรวงมหาดไทย
                      </CardSubtitle>
                    </Card>
                  </Col>
                </Row>
                <hr class='style5' style={{backgroundColor:'#113C7A'}}/>
                <Row>
                  <Container
                    style={{
                      marginTop: 20,
                      width: '100%',
                      marginBottom: 20,
                      backgroundColor:'#113C7A'
                    }}
                  >
                    <CardTitle
                      style={{
                        textShadowOffset: { width: 2, height: 2 },
                        fontSize: 20,
                        fontWeight: 'bold',
                        textAlign: 'center',
                        fontFamily: 'sans-serif',
                        textDecorationStyle: 'solid',
                        color:'white'
                      }}
                    >
                      ข้อมูลสารสนเทศเพื่อการบริหารพื้นที่ จังหวัดภูเก็ต
                    </CardTitle>
                    <Row
                      style={{
                        justifyContent: 'space-between',
                        marginBottom: 10
                      }}
                    >
                      <Card style={{ backgroundColor: '#D3D3D3' }}>
                        <Col style={{ textAlign: 'center' }}>
                          <div>
                            <CardImg
                              style={{
                                marginTop: 7,
                                resizeMode: 'contain',
                                height: 150,
                                width: 220
                              }}
                              variant='top'
                              src='https://i.pinimg.com/736x/81/c0/36/81c036427b68bf284f5ddc04c3a32160.jpg'
                            />
                          </div>
                          <div>
                            <a href='http://phuket.nso.go.th/index.php?option=com_content&view=article&id=371&Itemid=635'>
                              <Button>คลิก</Button>
                            </a>
                          </div>
                        </Col>
                      </Card>
                      <Card style={{ backgroundColor: '#D3D3D3' }}>
                        <Col style={{ textAlign: 'center' }}>
                          <div>
                            <CardImg
                              style={{
                                marginTop: 7,
                                resizeMode: 'contain',
                                height: 150,
                                width: 220
                              }}
                              variant='top'
                              src='https://image.freepik.com/free-vector/happy-young-couple-cartoon-icon_24908-6971.jpg'
                            />
                          </div>
                          <div>
                            <a href='http://phuket.nso.go.th/index.php?option=com_content&view=article&id=373&Itemid=636'>
                              <Button>คลิก</Button>
                            </a>
                          </div>
                        </Col>
                      </Card>
                      <Card style={{ backgroundColor: '#D3D3D3' }}>
                        <Col style={{ textAlign: 'center' }}>
                          <div>
                            <CardImg
                              style={{
                                marginTop: 7,
                                resizeMode: 'contain',
                                height: 150,
                                width: 220
                              }}
                              variant='top'
                              src='https://image.freepik.com/free-vector/couple-elderly-with-smile-face_105783-129.jpg'
                            />
                          </div>
                          <div>
                            <a href='http://phuket.nso.go.th/index.php?option=com_content&view=article&id=374&Itemid=638'>
                              <Button>คลิก</Button>
                            </a>
                          </div>
                        </Col>
                      </Card>
                      <Card style={{ backgroundColor: '#D3D3D3' }}>
                        <Col style={{ textAlign: 'center' }}>
                          <div>
                            <CardImg
                              style={{
                                marginTop: 7,
                                resizeMode: 'contain',
                                height: 150,
                                width: 220
                              }}
                              variant='top'
                              src='https://thumbs.dreamstime.com/b/woman-throw-garbage-trash-bin-plastic-bag-vector-isolated-waste-container-rubbish-segregation-177804394.jpg'
                            />
                          </div>
                          <div>
                            <a href='http://phuket.nso.go.th/index.php?option=com_content&view=article&id=372&Itemid=637'>
                              <Button>คลิก</Button>
                            </a>
                          </div>
                        </Col>
                      </Card>
                    </Row>
                  </Container>
                </Row>
                <hr class='style5' style={{backgroundColor:'#113C7A'}}/>
                <Card style={{ marginTop: 20, padding: 2 }}>
                  <Col>
                    <iframe
                      width='1024'
                      height='714'
                      seamless
                      frameborder='0'
                      scrolling='no'
                      src='https://docs.google.com/spreadsheets/d/e/2PACX-1vR6wNP974coAJ0OsHNS_I1PXyDSeOHrgVe51akze9wmvWHtIpKqpSdT2dZWBjerofco7_VrnZ5DQREw/pubchart?oid=1831049486&amp;format=interactive'
                    ></iframe>
                    <CardSubtitle
                      style={{
                        textAlign: 'center',
                        color: 'grey',
                        fontSize: 14,
                        marginBottom: 10
                      }}
                    >
                      ที่มา: กรมการปกครอง กระทรวงมหาดไทย
                    </CardSubtitle>
                  </Col>
                </Card>
                <Card style={{ marginTop: 20, padding: 2, width: 805 }}>
                  <iframe
                    width='800'
                    height='486'
                    src='https://app.powerbi.com/view?r=eyJrIjoiMGI5ZjRiOWMtNjRiNS00ZTllLThkOGMtYjQ0OWFjNDk4ZTI2IiwidCI6IjhlNjM0ZTY3LTlkNjYtNDZkMi1hNTI5LWUxYjcwOGM1ZDhiYyIsImMiOjEwfQ%3D%3D&pageName=ReportSection'
                    frameborder='0'
                    allowFullScreen='true'
                  ></iframe>
                </Card>
              </Container>

              <Footer />
            </div>
          </ReactCSSTransitionGroup>
        </Fragment>
      </div>
    )
  }
}
