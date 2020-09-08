import React, { Component } from 'react'
import { Pie } from 'react-chartjs-2'
import { MDBContainer } from 'mdbreact'

class Pies extends Component {
  state = {
    dataPie: {
      labels: ['พุทธ', 'อิสลาม', 'คริสต์', 'อื่นๆ'],
      datasets: [
        {
          data: [71.06, 27.6, 1.01, 0.33],
          backgroundColor: ['#F7464A', '#46BFBD', '#FDB45C', '#949FB1'],
          hoverBackgroundColor: ['#FF5A5E', '#5AD3D1', '#FFC870', '#A8B3C5']
        }
      ]
    }
  }

  render () {
    return (
      <MDBContainer>
        <h3 className='mt-5'>การนับถือศาสนา (ร้อยละ)</h3>
        <Pie data={this.state.dataPie} options={{ responsive: true }} />
      </MDBContainer>
    )
  }
}

export default Pies
