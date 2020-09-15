import React from 'react'
import { Doughnut } from 'react-chartjs-2'
import { MDBContainer } from 'mdbreact'

class Charts extends React.Component {
  state = {
    dataDoughnut: {
      labels: [
        'ตำบลฉลอง',
        'ตำบลกะรน',
        'ตำบลวิชิต',
        'ตำบลเกาะแก้ว',
        'ตำบลราไวย์',
        'ตำบลรัษฎา',
        'ตำบลตลาดเหนือ',
        'ตำบลตลาดใหญ่',
        'ตำบลกมลา',
        'ตำบลกะทู้',
        'ตำบลป่าตอง',
        'ตำบลไม้ขาว',
        'ตำบลสาคู',
        'ตำบลเทพกระษัตรี',
        'ตำบลศรีสุนทร',
        'ตำบลป่าคลอก',
        'ตำบลเชิงทะเล'
      ],
      datasets: [
        {
          data: [
            18750,
            12500,
            35000,
            30000,
            14375,
            21875,
            5193,
            11775,
            19871,
            10250,
            18250,
            6687,
            49000,
            28187,
            32187,
            23187,
            6930
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

export default Charts
