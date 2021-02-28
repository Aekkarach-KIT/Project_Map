import NaBar from './Bar'
import Footer from './Footer'
import React, { Component, Fragment } from 'react'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'

import { Container } from 'reactstrap'
import Table from 'react-bootstrap/Table'
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
                  marginBottom: '90px'
                }}
              >
                <Table striped bordered hover>
                  <thead>
                    <tr>
                      <th
                        style={{
                          color: 'black',
                          fontSize: '20px',
                          width: '100px',
                          textAlign: 'center'
                        }}
                      >
                        ลำดับที่
                      </th>
                      <th
                        style={{
                          color: 'black',
                          fontSize: '20px',
                          textAlign: 'center'
                        }}
                      >
                        ชื่อเอกสาร
                      </th>
                      <th
                        style={{
                          color: 'black',
                          fontSize: '20px',
                          width: '150px',
                          textAlign: 'center'
                        }}
                      >
                        ลิงค์เอกสาร
                      </th>
                      <th
                        style={{
                          color: 'black',
                          fontSize: '20px',
                          textAlign: 'center'
                        }}
                      >
                        แหล่งที่มา
                      </th>
                      <th
                        style={{
                          color: 'black',
                          fontSize: '20px',
                          textAlign: 'center'
                        }}
                      >
                        วันที่เอกสาร
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td
                        style={{
                          color: '#0033CC',
                          fontSize: '19px',
                          textAlign: 'center'
                        }}
                      >
                        1
                      </td>
                      <td
                        style={{
                          color: '#0033CC',
                          fontSize: '19px',
                          textAlign: 'center'
                        }}
                      >
                        ข้อมูลสถิติประชากรภาพรวม
                      </td>
                      <td>
                        <a
                          target='_blank'
                          href='https://docs.google.com/spreadsheets/d/1z89Wz_zwF7a0OeFLgRr3vZE2M6j6_JT8mckMJSMk0a4/edit?usp=sharing'
                          style={{ marginTop: '30px' }}
                        >
                          <div>
                            <img
                              src='https://cdn1.iconfinder.com/data/icons/hawcons/32/699329-icon-57-document-download-256.png'
                              style={{ width: '40px' }}
                            />
                          </div>
                        </a>
                      </td>
                      <td
                        style={{
                          color: '#0033CC',
                          fontSize: '19px',
                          textAlign: 'center'
                        }}
                      >
                        กรมการปกครอง , สำนักงานสถิติจังหวัดภูเก็ต
                      </td>
                      <td
                        style={{
                          color: '#B22222',
                          fontSize: '19px',
                          textAlign: 'center'
                        }}
                      >
                        * ข้อมูล ณ ปี พ.ศ.2563
                      </td>
                    </tr>

                    <tr>
                      <td
                        style={{
                          color: '#0033CC',
                          fontSize: '19px',
                          textAlign: 'center'
                        }}
                      >
                        2
                      </td>
                      <td
                        style={{
                          color: '#0033CC',
                          fontSize: '19px',
                          textAlign: 'center'
                        }}
                      >
                        สถิติการบริการด้านการทะเบียนราษฎร
                      </td>
                      <td>
                        <a
                          target='_blank'
                          href='https://stat.bora.dopa.go.th/stat/statnew/statMenu/newStat/stat/'
                          style={{ marginTop: '30px' }}
                        >
                          <div>
                            <img
                              src='https://cdn1.iconfinder.com/data/icons/hawcons/32/699329-icon-57-document-download-256.png'
                              style={{ width: '40px' }}
                            />
                          </div>
                        </a>
                      </td>
                      <td
                        style={{
                          color: '#0033CC',
                          fontSize: '19px',
                          textAlign: 'center'
                        }}
                      >
                        กรมการปกครอง
                      </td>
                      <td
                        style={{
                          color: '#B22222',
                          fontSize: '19px',
                          textAlign: 'center'
                        }}
                      >
                        * ข้อมูล ถึงปี พ.ศ.2562
                      </td>
                    </tr>

                    <tr>
                      <td
                        style={{
                          color: '#0033CC',
                          fontSize: '19px',
                          textAlign: 'center'
                        }}
                      >
                        3
                      </td>
                      <td
                        style={{
                          color: '#0033CC',
                          fontSize: '19px',
                          textAlign: 'center'
                        }}
                      >
                        สถิตินักท่องเที่ยว
                      </td>
                      <td>
                        <a
                          target='_blank'
                          href='https://www.mots.go.th/more_news_new.php?cid=411'
                          style={{ marginTop: '30px' }}
                        >
                          <div>
                            <img
                              src='https://cdn1.iconfinder.com/data/icons/hawcons/32/699329-icon-57-document-download-256.png'
                              style={{ width: '40px' }}
                            />
                          </div>
                        </a>
                      </td>
                      <td
                        style={{
                          color: '#0033CC',
                          fontSize: '19px',
                          textAlign: 'center'
                        }}
                      >
                        กระทรวงการท่องเที่ยวและกีฬา
                      </td>
                      <td
                        style={{
                          color: '#B22222',
                          fontSize: '19px',
                          textAlign: 'center'
                        }}
                      >
                        * ข้อมูล ถึงปี พ.ศ.2563
                      </td>
                    </tr>

                    <tr>
                      <td
                        style={{
                          color: '#0033CC',
                          fontSize: '19px',
                          textAlign: 'center'
                        }}
                      >
                        4
                      </td>
                      <td
                        style={{
                          color: '#0033CC',
                          fontSize: '19px',
                          textAlign: 'center'
                        }}
                      >
                        สถานการณ์กำลังแรงงานรายจังหวัด
                      </td>
                      <td>
                        <a
                          target='_blank'
                          href='http://analytic.nlic.mol.go.th/analytics/saw.dll?Dashboard'
                          style={{ marginTop: '30px' }}
                        >
                          <div>
                            <img
                              src='https://cdn1.iconfinder.com/data/icons/hawcons/32/699329-icon-57-document-download-256.png'
                              style={{ width: '40px' }}
                            />
                          </div>
                        </a>
                      </td>
                      <td
                        style={{
                          color: '#0033CC',
                          fontSize: '19px',
                          textAlign: 'center'
                        }}
                      >
                        กระทรวงแรงงาน
                      </td>
                      <td
                        style={{
                          color: '#B22222',
                          fontSize: '19px',
                          textAlign: 'center'
                        }}
                      >
                        * ข้อมูล ถึงปี พ.ศ.2563
                      </td>
                    </tr>

                    <tr>
                      <td
                        style={{
                          color: '#0033CC',
                          fontSize: '19px',
                          textAlign: 'center'
                        }}
                      >
                        5
                      </td>
                      <td
                        style={{
                          color: '#0033CC',
                          fontSize: '19px',
                          textAlign: 'center'
                        }}
                      >
                        สถิติเกษตรและประมง
                      </td>
                      <td>
                        <a
                          target='_blank'
                          href='http://statbbi.nso.go.th/staticreport/page/sector/th/11.aspx'
                          style={{ marginTop: '30px' }}
                        >
                          <div>
                            <img
                              src='https://cdn1.iconfinder.com/data/icons/hawcons/32/699329-icon-57-document-download-256.png'
                              style={{ width: '40px' }}
                            />
                          </div>
                        </a>
                      </td>
                      <td
                        style={{
                          color: '#0033CC',
                          fontSize: '19px',
                          textAlign: 'center'
                        }}
                      >
                        สำนักงานสถิติแห่งชาติ
                      </td>
                      <td
                        style={{
                          color: '#B22222',
                          fontSize: '19px',
                          textAlign: 'center'
                        }}
                      >
                        * ข้อมูล ถึงปี พ.ศ.2562
                      </td>
                    </tr>

                    <tr>
                      <td
                        style={{
                          color: '#0033CC',
                          fontSize: '19px',
                          textAlign: 'center'
                        }}
                      >
                        6
                      </td>
                      <td
                        style={{
                          color: '#0033CC',
                          fontSize: '19px',
                          textAlign: 'center'
                        }}
                      >
                        รายงาน COVID-19 ประจำวัน ข้อมูลประจำประเทศไทย
                      </td>
                      <td>
                        <a
                          target='_blank'
                          href='https://data.go.th/dataset/covid-19-daily'
                          style={{ marginTop: '30px' }}
                        >
                          <div>
                            <img
                              src='https://cdn1.iconfinder.com/data/icons/hawcons/32/699329-icon-57-document-download-256.png'
                              style={{ width: '40px' }}
                            />
                          </div>
                        </a>
                      </td>
                      <td
                        style={{
                          color: '#0033CC',
                          fontSize: '19px',
                          textAlign: 'center'
                        }}
                      >
                        กรมควบคุมโรค
                      </td>
                      <td
                        style={{
                          color: '#B22222',
                          fontSize: '19px',
                          textAlign: 'center'
                        }}
                      >
                        * ข้อมูลอัพเดท รายวัน
                      </td>
                    </tr>

                    <tr>
                      <td
                        style={{
                          color: '#0033CC',
                          fontSize: '19px',
                          textAlign: 'center'
                        }}
                      >
                        7
                      </td>
                      <td
                        style={{
                          color: '#0033CC',
                          fontSize: '19px',
                          textAlign: 'center'
                        }}
                      >
                        ข้อมูลสารสนเทศการศึกษา
                      </td>
                      <td>
                        <a
                          target='_blank'
                          href='https://portal.bopp-obec.info/obec63/publicstat/report'
                          style={{ marginTop: '30px' }}
                        >
                          <div>
                            <img
                              src='https://cdn1.iconfinder.com/data/icons/hawcons/32/699329-icon-57-document-download-256.png'
                              style={{ width: '40px' }}
                            />
                          </div>
                        </a>
                      </td>
                      <td
                        style={{
                          color: '#0033CC',
                          fontSize: '19px',
                          textAlign: 'center'
                        }}
                      >
                        สำนักงานคณะกรรมการการศึกษาขั้นพื้นฐาน
                      </td>
                      <td
                        style={{
                          color: '#B22222',
                          fontSize: '19px',
                          textAlign: 'center'
                        }}
                      >
                        * ข้อมูล ถึงปี พ.ศ.2563
                      </td>
                    </tr>

                    <tr>
                      <td
                        style={{
                          color: '#0033CC',
                          fontSize: '19px',
                          textAlign: 'center'
                        }}
                      >
                        8
                      </td>
                      <td
                        style={{
                          color: '#0033CC',
                          fontSize: '19px',
                          textAlign: 'center'
                        }}
                      >
                        สถิติขยะมูลฝอยจังหวัดภูเก็ต ปี 2562
                      </td>
                      <td>
                        <a
                          target='_blank'
                          href='http://phuket.nso.go.th/index.php?option=com_content&view=article&id=372&Itemid=637'
                          style={{ marginTop: '30px' }}
                        >
                          <div>
                            <img
                              src='https://cdn1.iconfinder.com/data/icons/hawcons/32/699329-icon-57-document-download-256.png'
                              style={{ width: '40px' }}
                            />
                          </div>
                        </a>
                      </td>
                      <td
                        style={{
                          color: '#0033CC',
                          fontSize: '19px',
                          textAlign: 'center'
                        }}
                      >
                        สำนักงานสถิติจังหวัดภูเก็ต
                      </td>
                      <td
                        style={{
                          color: '#B22222',
                          fontSize: '19px',
                          textAlign: 'center'
                        }}
                      >
                        * ข้อมูล ถึงปี พ.ศ.2562
                      </td>
                    </tr>
                  </tbody>
                </Table>
              </Container>
              <Footer />
            </div>
          </ReactCSSTransitionGroup>
        </Fragment>
      </div>
    )
  }
}
