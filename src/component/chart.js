import React from 'react'
import { Doughnut } from 'react-chartjs-2'
import { MDBContainer } from 'mdbreact'
import { CardSubtitle } from 'reactstrap'

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
            26957,
            8121,
            52233,
            16347,
            18768,
            48740,
            22300,
            57008,
            7106,
            30797,
            21358,
            13433,
            6813,
            9093,
            25746,
            21358,
            6986
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
        <CardSubtitle
          style={{
            textAlign: 'left',
            padding: 2,
            marginTop: 5,
            color: 'grey'
          }}
        >
          ที่มา: กรมการปกครอง กระทรวงมหาดไทย
        </CardSubtitle>
      </MDBContainer>
    )
  }
}

export default Charts
