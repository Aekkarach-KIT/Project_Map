import React, { Component } from 'react'
import Tabletop from 'tabletop'
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
class PageTitle extends Component {
  constructor () {
    super()

    this.state = {
      data: []
    }
  }
  componentDidMount () {
    Tabletop.init({
      key: '12F30yHJjTV2U_p7mMqAatEKPSQ8O31WCcAitwH1RXoY',
      callback: googleData => {
        this.setState({
          data: googleData
        })
      },
      simpleSheet: true
    })
  }
  render () {
    const { data } = this.state

    return data.map(obj => {
      return (
        <Row>
          <Col md='12'>
            <Card className='main-card mb-3 mt-7'>
              <div className='card-header'>
                จำนวนประชากรจำแนกตามเขตการปกครอง
              </div>
              <div className='table-responsive'>
                <table
                  className='align-middle mb-0 table table-borderless table-striped table-hover'
                  key={obj.No}
                >
                  <thead>
                    <tr>
                      <td className='text-center'>No.</td>
                      <td>ตำบล</td>
                      <td className='text-center'>เพศชาย</td>
                      <td className='text-center'>เพศหญิง</td>
                      <td className='text-center'>รวม</td>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className='text-center text-muted'>{obj.No}</td>
                      <td>
                        <div className='widget-content p-0'>
                          <div className='widget-content-wrapper'>
                            <div className='widget-content-left flex2'>
                              <div className='widget-heading'>{obj.ตำบล}</div>
                            </div>
                          </div>
                        </div>
                      </td>
                      <td className='text-center'>{obj.เพศชาย}</td>
                      <td className='text-center'>{obj.เพศหญิง}</td>
                      <td className='text-center'>{obj.รวม}</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </Card>
          </Col>
        </Row>
      )
    })
  }
}

export default PageTitle
