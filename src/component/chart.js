import React from 'react'
import { Doughnut } from 'react-chartjs-2'
import { MDBContainer } from 'mdbreact'

class Chart extends React.Component {
  state = {
    dataDoughnut: {
      labels: [
        'กะรน',
        'ฉลอง',
        'ตลาดเหนือ',
        'ตลาดใหญ่',
        'รัษฎา',
        'ราไวย์',
        'วิชิต',
        'กมลา',
        'กะทู้',
        'ป่าตอง',
        'ป่าคลอก',
        'ศรีสุนทร',
        'สาคู',
        'เชิงทะเล',
        'เทพกษัตรี',
        'ไม้ขาว',
        'เกาะแก้ว'
      ],
      datasets: [
        {
          data: [
            8153,
            9856,
            10052,
            5000,
            22228,
            8571,
            23461,
            4582,
            27149,
            10203,
            7489,
            10520,
            3150,
            3097,
            4158,
            2014,
            3250
          ],
          backgroundColor: [
            '#edb879',
            '#31401c',
            '#aad3e0',
            '#0d9aa2',
            '#045f6b',
            '#e3c7d8',
            '#b58fb5',
            '#834a6c',
            '#23212c',
            '#cfbeb7',
            '#f1ead7',
            '#e99e9a',
            '#e61b44',
            '#e67b79',
            '#91c7c2',
            '#809e73',
            '#9b4980'
          ],
          hoverBackgroundColor: [
            '#edb879',
            '#31401c',
            '#aad3e0',
            '#0d9aa2',
            '#045f6b',
            '#e3c7d8',
            '#b58fb5',
            '#834a6c',
            '#23212c',
            '#cfbeb7',
            '#f1ead7',
            '#e99e9a',
            '#e61b44',
            '#e67b79',
            '#91c7c2',
            '#809e73',
            '#9b4980'
          ]
        }
      ]
    }
  }

  render () {
    return (
      <MDBContainer>
        <h3 className='mt-2'>ภาพรวมประชากรแต่ละตำบล</h3>
        <Doughnut
          data={this.state.dataDoughnut}
          options={{ responsive: true }}
        />
      </MDBContainer>
    )
  }
}

export default Chart
