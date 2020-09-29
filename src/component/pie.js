import React, { Component } from 'react'
import { Pie } from 'react-chartjs-2'
import { MDBContainer } from 'mdbreact'
class Pies extends Component {
  state = {
    dataPie: {
      labels: [
        'ลูกจ้างเอกชน',
        'ทำงานส่วนตัว',
        'ช่วยธุระกิจครัวเรือน',
        'ลูกจ้างรัฐบาล',
        'นายจ้าง'
      ],
      datasets: [
        {
          data: [65.4, 19, 6.4, 4.5, 4.7],
          backgroundColor: ['#F7464A', '#46BFBD', '#FDB45C', '#FF66CC','#339900'],
          hoverBackgroundColor: ['#F7464A', '#46BFBD', '#FDB45C', '#FF66CC','#339900']
        }
      ]
    }
  }

  render () {
    return (
      <MDBContainer>
        <h3 className='mt-5'>สถานภาพการทำงาน</h3>
        <Pie data={this.state.dataPie} options={{ responsive: true }} />
      </MDBContainer>
    )
  }
}

export default Pies
