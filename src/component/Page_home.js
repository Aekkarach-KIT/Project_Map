import NaBar from './Bar'
import Footer from './Footer'
import './Style.css'
import React, { Component, Fragment } from 'react'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'
import classnames from 'classnames'
import Chart from './chart'
import Pies from './pie'

import { MDBPopover, MDBPopoverBody, MDBBtn, MDBContainer } from 'mdbreact'
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
  Container
} from 'reactstrap'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faAngleUp,
  faArrowRight,
  faArrowUp,
  faArrowLeft,
  faAngleDown
} from '@fortawesome/free-solid-svg-icons'
import {
  AreaChart,
  Area,
  Line,
  ResponsiveContainer,
  Bar,
  BarChart,
  ComposedChart,
  CartesianGrid,
  Tooltip,
  LineChart
} from 'recharts'

const data = [
  { name: 'Page A', uv: 4000, pv: 2400, amt: 2400 },
  { name: 'Page B', uv: 2000, pv: 1398, amt: 2210 },
  { name: 'Page C', uv: 2000, pv: 9800, amt: 2290 },
  { name: 'Page D', uv: 2780, pv: 3908, amt: 2000 },
  { name: 'Page E', uv: 1890, pv: 4800, amt: 2181 },
  { name: 'Page F', uv: 2390, pv: 3800, amt: 2500 },
  { name: 'Page G', uv: 3490, pv: 4300, amt: 2100 },
  { name: 'Page C', uv: 2000, pv: 6800, amt: 2290 },
  { name: 'Page D', uv: 4780, pv: 7908, amt: 2000 },
  { name: 'Page E', uv: 2890, pv: 9800, amt: 2181 },
  { name: 'Page F', uv: 1390, pv: 3800, amt: 1500 },
  { name: 'Page G', uv: 3490, pv: 4300, amt: 2100 }
]

const data2 = [
  { name: 'Page A', uv: 5400, pv: 5240, amt: 1240 },
  { name: 'Page B', uv: 7300, pv: 4139, amt: 3221 },
  { name: 'Page C', uv: 8200, pv: 7980, amt: 5229 },
  { name: 'Page D', uv: 6278, pv: 4390, amt: 3200 },
  { name: 'Page E', uv: 3189, pv: 7480, amt: 6218 },
  { name: 'Page D', uv: 9478, pv: 6790, amt: 2200 },
  { name: 'Page E', uv: 1289, pv: 1980, amt: 7218 },
  { name: 'Page F', uv: 3139, pv: 2380, amt: 5150 },
  { name: 'Page G', uv: 5349, pv: 3430, amt: 3210 }
]

export default class PageHome extends Component {
  constructor () {
    super()

    this.state = {
      dropdownOpen: false,
      activeTab1: '11'
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

  render () {
    return (
        <div className='bgco'>
      <Fragment>
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
            <div class='container-fluid'>
              <h2 class='mt-4'>จำนวนประชากร</h2>
              <ol class='breadcrumb mb-4'>
                <li class='num'>
                  <h3>416,582 คน</h3>
                </li>
              </ol>
            </div>
            <div className='d-flex justify-content-center'>
              <Row>
                <Col mb='3'>
                  <Card style={{ width: '18rem' }}>
                    <CardBody>
                      <CardTitle>ปริมาณยานพาหนะ</CardTitle>
                      <CardText className='Text'>469448 คัน</CardText>
                      <MDBPopover
                        placement='top'
                        popover
                        clickable
                        id='popper5'
                      >
                        <Button color='purple'>คลิก</Button>
                        <div>
                          <MDBPopoverBody>
                            <img
                              src='https://mdbootstrap.com/img/logo/mdb192x192.jpg'
                              alt=''
                            />
                          </MDBPopoverBody>
                        </div>
                      </MDBPopover>
                    </CardBody>
                  </Card>
                </Col>

                <Col mb='3'>
                  <Card style={{ width: '18rem' }}>
                    <CardBody>
                      <CardTitle>ปริมาณขยะ</CardTitle>
                      <CardText className='Text'>925 ตัน/วัน</CardText>
                      <Button color='purple'>คลิก</Button>
                    </CardBody>
                  </Card>
                </Col>

                <Col mb='3'>
                  <Card style={{ width: '18rem' }}>
                    <CardBody>
                      <CardTitle>นักท่องเที่ยว</CardTitle>
                      <CardText className='Text'>30000 คน/วัน</CardText>
                      <Button color='purple'>คลิก</Button>
                    </CardBody>
                  </Card>
                </Col>

                <Col mb='3'>
                  <Card style={{ width: '18rem' }}>
                    <CardBody>
                      <CardTitle>จำนวนครัวเรือน</CardTitle>
                      <CardText className='Text'>320405 หลังคาเรือน</CardText>
                      <Button color='purple'>คลิก</Button>
                    </CardBody>
                  </Card>
                </Col>

                <Col mb='3'>
                  <Card style={{ width: '18rem' }}>
                    <CardBody>
                      <CardTitle>ประชากรแฝง</CardTitle>
                      <CardText className='Text'>
                        เฉลี่ย 300000 คน(±20%)
                      </CardText>
                      <Button color='purple'>คลิก</Button>
                    </CardBody>
                  </Card>
                </Col>
              </Row>
            </div>
            <Container className='Main'>
              <Row>
                <Col md='12' lg='6'>
                  <Card className='mb-3'>
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
                            <Col md='6'>
                              <div className='widget-content'>
                                <div className='widget-content-outer'>
                                  <div className='widget-content-wrapper'>
                                    <div className='widget-content-left mr-3'>
                                      <div className='widget-numbers fsize-4 text-muted'>
                                        52.68%
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
                                      value='52.68'
                                    />
                                  </div>
                                </div>
                              </div>
                            </Col>
                            <Col md='6'>
                              <div className='widget-content'>
                                <div className='widget-content-outer'>
                                  <div className='widget-content-wrapper'>
                                    <div className='widget-content-left mr-3'>
                                      <div className='widget-numbers fsize-3 text-muted'>
                                        47.32%
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
                                      value='47.32'
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
                                        9.72%
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
                                      value='9.72'
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
                                        21.08%
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
                                      value='21.08'
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
                                        69.2%
                                      </div>
                                    </div>
                                    <div className='widget-content-right'>
                                      <div className='text-muted opacity-6'>
                                        จำนวนประชากรวัยทำงาน (อายุระหว่าง15-60 ปี)
                                      </div>
                                    </div>
                                  </div>
                                  <div className='widget-progress-wrapper mt-1'>
                                    <Progress
                                      className='progress-bar-sm progress-bar-animated-alt'
                                      color='primary'
                                      value='69.2'
                                    />
                                  </div>
                                </div>
                              </div>
                              </Col>
                            </Row>
                        </CardBody>
                        <div className='widget-chart p-0'>
                          <div className='widget-chart-content'>
                            <div className='widget-description mt-0 text-warning'>
                              <FontAwesomeIcon icon={faArrowUp} />
                              <span className='pl-1'>2.10%</span>
                              <span className='text-muted opacity-8 pl-1'>
                                ร้อยละการเพิ่มขึ้นของจำนวนปรชากรจากปีก่อนหน้า
                              </span>
                            </div>
                          </div>
                          <ResponsiveContainer height={187}>
                            <AreaChart
                              data={data}
                              margin={{
                                top: -45,
                                right: 0,
                                left: 0,
                                bottom: 0
                              }}
                            >
                              <defs>
                                <linearGradient
                                  id='colorPv2'
                                  x1='0'
                                  y1='0'
                                  x2='0'
                                  y2='1'
                                >
                                  <stop
                                    offset='10%'
                                    stopColor='var(--warning)'
                                    stopOpacity={1}
                                  />
                                  <stop
                                    offset='90%'
                                    stopColor='var(--warning)'
                                    stopOpacity={0}
                                  />
                                </linearGradient>
                              </defs>
                              <Tooltip />
                              <Area
                                type='monotoneX'
                                dataKey='uv'
                                stroke='var(--warning)'
                                strokeWidth={2}
                                fillOpacity={1}
                                fill='url(#colorPv2)'
                              />
                            </AreaChart>
                          </ResponsiveContainer>
                        </div>
                      </TabPane>
                      <TabPane tabId='22'>
                        <div className='widget-chart p-0'>
                          <ResponsiveContainer height={179}>
                            <ComposedChart data={data2}>
                              <CartesianGrid stroke='#ffffff' />
                              <Area
                                type='monotone'
                                dataKey='amt'
                                fill='#f7ffd0'
                                stroke='#85a200'
                              />
                              <Bar
                                dataKey='pv'
                                barSize={16}
                                fill='var(--primary)'
                              />
                              <Line
                                type='monotone'
                                dataKey='uv'
                                strokeWidth='3'
                                stroke='var(--danger)'
                              />
                            </ComposedChart>
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
                            <Col md='6'>
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
                            <Col md='6'>
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
                            <Col md='6'>
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
                            <Col md='6'>
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
                <Col md='12' lg='6'>
                  <Card className='mb-3'>
                      <Pies/>
                      </Card>
                      </Col>
              </Row>
              <Col>
              <Chart />
              </Col>
              <Row>
                <Col md='12'>
                  <Card className='main-card mb-3 mt-7'>
                    <div className='card-header'>
                      จำนวนประชากรจำแนกตามเขตการปกครอง
                    </div>
                    <div className='table-responsive'>
                      <table className='align-middle mb-0 table table-borderless table-striped table-hover'>
                        <thead>
                          <tr>
                            <th className='text-center'>No.</th>
                            <th>ตำบล</th>
                            <th className='text-center'>เพศชาย</th>
                            <th className='text-center'>เพศหญิง</th>
                            <th className='text-center'>รวม</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td className='text-center text-muted'>1</td>
                            <td>
                              <div className='widget-content p-0'>
                                <div className='widget-content-wrapper'>
                                  <div className='widget-content-left flex2'>
                                    <div className='widget-heading'>
                                      ในเขตเทศบาล
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </td>
                            <td className='text-center'>122,062 คน</td>
                            <td className='text-center'>142,615 คน</td>
                            <td className='text-center'>260,034 คน</td>
                          </tr>

                          <tr>
                            <td className='text-center text-muted'>2</td>
                            <td>
                              <div className='widget-content p-0'>
                                <div className='widget-content-wrapper'>
                                  <div className='widget-content-left flex2'>
                                    <div className='widget-heading'>
                                      นอกเขตเทศบาล
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </td>
                            <td className='text-center'>64,342 คน</td>
                            <td className='text-center'>69,183 คน</td>
                            <td className='text-center'>133,525 คน</td>
                          </tr>

                          <tr>
                            <td className='text-center text-muted'>3</td>
                            <td>
                              <div className='widget-content p-0'>
                                <div className='widget-content-wrapper'>
                                  <div className='widget-content-left flex2'>
                                    <div className='widget-heading'>
                                      อำเภอเมืองภูเก็ต
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </td>
                            <td className='text-center'>113,652 คน</td>
                            <td className='text-center'>129,169 คน</td>
                            <td className='text-center'>242,821 คน</td>
                          </tr>

                          <tr>
                            <td className='text-center text-muted'>4</td>
                            <td>
                              <div className='widget-content p-0'>
                                <div className='widget-content-wrapper'>
                                  <div className='widget-content-left flex2'>
                                    <div className='widget-heading'>
                                      เทศบาลนครภูเก็ต
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </td>
                            <td className='text-center'>36,684 คน</td>
                            <td className='text-center'>42,578 คน</td>
                            <td className='text-center'>79,262 คน</td>
                          </tr>
                          <tr>
                            <td className='text-center text-muted'>5</td>
                            <td>
                              <div className='widget-content p-0'>
                                <div className='widget-content-wrapper'>
                                  <div className='widget-content-left flex2'>
                                    <div className='widget-heading'>
                                      เทศบาลตำบลกะรน
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </td>
                            <td className='text-center'>3,847 คน</td>
                            <td className='text-center'>4,321 คน</td>
                            <td className='text-center'>8,168 คน</td>
                          </tr>

                          <tr>
                            <td className='text-center text-muted'>6</td>
                            <td>
                              <div className='widget-content p-0'>
                                <div className='widget-content-wrapper'>
                                  <div className='widget-content-left flex2'>
                                    <div className='widget-heading'>
                                      เทศบาลตำบลรัษฎา
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </td>
                            <td className='text-center'>22,228 คน</td>
                            <td className='text-center'>25,146 คน</td>
                            <td className='text-center'>47,374 คน</td>
                          </tr>
                          <tr>
                            <td className='text-center text-muted'>7</td>
                            <td>
                              <div className='widget-content p-0'>
                                <div className='widget-content-wrapper'>
                                  <div className='widget-content-left flex2'>
                                    <div className='widget-heading'>
                                      เทศบาลตำบลราไวย์
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </td>
                            <td className='text-center'>8,571 คน</td>
                            <td className='text-center'>9,621 คน</td>
                            <td className='text-center'>18,192 คน</td>
                          </tr>
                          <tr>
                            <td className='text-center text-muted'>8</td>
                            <td>
                              <div className='widget-content p-0'>
                                <div className='widget-content-wrapper'>
                                  <div className='widget-content-left flex2'>
                                    <div className='widget-heading'>
                                      เทศบาลตำบลวิชิต
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </td>
                            <td className='text-center'>23,461 คน</td>
                            <td className='text-center'>26,363 คน</td>
                            <td className='text-center'>49,824 คน</td>
                          </tr>
                          <tr>
                            <td className='text-center text-muted'>9</td>
                            <td>
                              <div className='widget-content p-0'>
                                <div className='widget-content-wrapper'>
                                  <div className='widget-content-left flex2'>
                                    <div className='widget-heading'>
                                      อำเภอกะทู้
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </td>
                            <td className='text-center'>27,149 คน</td>
                            <td className='text-center'>30,101 คน</td>
                            <td className='text-center'>57,250 คน</td>
                          </tr>
                          <tr>
                            <td className='text-center text-muted'>10</td>
                            <td>
                              <div className='widget-content p-0'>
                                <div className='widget-content-wrapper'>
                                  <div className='widget-content-left flex2'>
                                    <div className='widget-heading'>
                                      เทศบาลเมืองป่าตอง
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </td>
                            <td className='text-center'>10,203 คน</td>
                            <td className='text-center'>10,694 คน</td>
                            <td className='text-center'>20,897 คน</td>
                          </tr>
                          <tr>
                            <td className='text-center text-muted'>11</td>
                            <td>
                              <div className='widget-content p-0'>
                                <div className='widget-content-wrapper'>
                                  <div className='widget-content-left flex2'>
                                    <div className='widget-heading'>
                                      เทศบาลเมืองกะทู้
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </td>
                            <td className='text-center'>13,628 คน</td>
                            <td className='text-center'>15,767 คน</td>
                            <td className='text-center'>29,395 คน</td>
                          </tr>
                          <tr>
                            <td className='text-center text-muted'>12</td>
                            <td>
                              <div className='widget-content p-0'>
                                <div className='widget-content-wrapper'>
                                  <div className='widget-content-left flex2'>
                                    <div className='widget-heading'>
                                      อำเภอถลาง
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </td>
                            <td className='text-center'>49,418 คน</td>
                            <td className='text-center'>52,528 คน</td>
                            <td className='text-center'>101,946 คน</td>
                          </tr>

                          <tr>
                            <td className='text-center text-muted'>13</td>
                            <td>
                              <div className='widget-content p-0'>
                                <div className='widget-content-wrapper'>
                                  <div className='widget-content-left flex2'>
                                    <div className='widget-heading'>
                                      เทศบาลตำบลเชิงทะเล
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </td>
                            <td className='text-center'>3,097 คน</td>
                            <td className='text-center'>3,883 คน</td>
                            <td className='text-center'>6,930 คน</td>
                          </tr>

                          <tr>
                            <td className='text-center text-muted'>14</td>
                            <td>
                              <div className='widget-content p-0'>
                                <div className='widget-content-wrapper'>
                                  <div className='widget-content-left flex2'>
                                    <div className='widget-heading'>
                                      เทษบาลตำบลเทพกษัตรี
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </td>
                            <td className='text-center'>4,158 คน</td>
                            <td className='text-center'>4,292 คน</td>
                            <td className='text-center'>8,450 คน</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </Card>

                  <CardSubtitle>
                    ที่มา : สำนักงานสถิติจังหวัดภูเก็ต
                  </CardSubtitle>
                </Col>
              </Row>
            </Container>
            <Footer />
          </div>
        </ReactCSSTransitionGroup>
      </Fragment>
      </div>
    )
  }
}
