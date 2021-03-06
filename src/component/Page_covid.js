import React from 'react'
import { withStyles } from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'
import './Style.css'
import Container from '@material-ui/core/Container'
import Paper from '@material-ui/core/Paper'
import Grid from '@material-ui/core/Grid'
import axios from 'axios'
import NaBar from './Bar'
import Footer from './Footer'
import {
  ResponsiveContainer,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  LineChart,
  Line,
  BarChart,
  Bar,
  PieChart,
  Pie,
  Cell
} from 'recharts'
import { Button, Row } from 'reactstrap'

const styles = theme => ({
  appBarSpacer: theme.mixins.toolbar,
  title: {
    flexGrow: 1
  },
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center'
  },
  paper: {
    padding: theme.spacing(2),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center'
  },
  footer: {
    backgroundColor: theme.palette.background.paper,
    marginTop: theme.spacing.unit * 2
  }
})

class PageCovid extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      dataTimeline: [],
      dataTimeline15: [],
      data_text: {
        updatedDate: '',
        confirmed: '',
        hospitalized: '',
        deaths: '',
        recovered: '',
        newConfirmed: '',
        newHospitalized: '',
        newDeaths: '',
        newRecovered: '',
        
      },
      data_pie: [{}]
    }
  }

  componentDidMount () {
    this.callAPI()
  }

  callAPI () {
    axios
      .get('https://covid19.th-stat.com/api/open/timeline')
      .then(response => {
        console.log(response.data)
        const data = response.data['Data']
        const lastData = data.slice(-1)[0]
        this.setState({
          dataTimeline: data,
          dataTimeline15: data.slice(1).slice(-15),
          data_text: {
            source: response.data['Source'],
            updatedDate: lastData['Date'],
            confirmed: lastData['Confirmed'],
            hospitalized: lastData['Hospitalized'],
            deaths: lastData['Deaths'],
            recovered: lastData['Recovered'],
            newConfirmed: lastData['NewConfirmed'],
            newHospitalized: lastData['NewHospitalized'],
            newDeaths: lastData['NewDeaths'],
            newRecovered: lastData['NewRecovered']
          },
          data_pie: [
            { name: 'กำลังรักษา', value: lastData['Hospitalized'] },
            { name: 'เสียชีวิต', value: lastData['Deaths'] },
            { name: 'หายแล้ว', value: lastData['Recovered'] }
          ]
        })
      })
      .catch(function (error) {
        console.log(error)
      })
  }

  render () {
    const { classes } = this.props
    const { dataTimeline, dataTimeline15, data_text, data_pie } = this.state
    return (
      <div className='bgco'>
        <NaBar />
        <div>
          <div class='container-fluid'>
            <ol class='breadcrumb mb-4' style={{ marginTop: 15 }}>
              <li class='num'>
                <h3>สถิติข้อมูลสถานการณ์ Covid-19 ในประเทศไทย</h3>
              </li>
            </ol>
          </div>
          <Container>
            <Row style={{ justifyContent: 'space-between' }}>
              <div>
                <a
                  target='_blank'
                  href='https://covid19.ddc.moph.go.th/th/self_screening'
                >
                  <Button
                    color='primary'
                    style={{
                      borderRadius: '12px',
                      boxShadow:
                        '0 8px 16px 0 rgba(0,0,0,0.2), 0 6px 20px 0 rgba(0,0,0,0.19)',
                      width: 350,
                      height: 100,
                      marginLeft: 50,
                      fontSize: 25,
                      color: 'white',
                      fontFamily: 'Kanit',
                      textAlign: 'center',
                      backgroundColor: '#66CCCC'
                    }}
                  >
                    ทดสอบประเมินความเสี่ยง
                  </Button>
                </a>
              </div>
              <div>
                <a target='_blank' href='https://www.xn--b3czh8ayeuf.com/'>
                  <Button
                    color='danger'
                    style={{
                      borderRadius: '12px',
                      boxShadow:
                        '0 8px 16px 0 rgba(0,0,0,0.2), 0 6px 20px 0 rgba(0,0,0,0.19)',
                      width: 350,
                      height: 100,
                      marginLeft: 50,
                      fontSize: 25,
                      color: 'white',
                      fontFamily: 'Kanit',
                      textAlign: 'center'
                    }}
                  >
                    ไทยชนะ
                  </Button>
                </a>
              </div>
              <div>
                <a
                  target='_blank'
                  href='https://ddc.moph.go.th/viralpneumonia/img/drchana_full.jpg'
                >
                  <Button
                    color='success'
                    style={{
                      borderRadius: '12px',
                      boxShadow:
                        '0 8px 16px 0 rgba(0,0,0,0.2), 0 6px 20px 0 rgba(0,0,0,0.19)',
                      width: 350,
                      height: 100,
                      marginLeft: 50,
                      fontSize: 25,
                      color: 'white',
                      fontFamily: 'Kanit',
                      textAlign: 'center'
                    }}
                  >
                    แอพหมอชนะ
                  </Button>
                </a>
              </div>
            </Row>
          </Container>

          <div className={classes.appBarSpacer} />
          <Container>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <Typography
                  align='right'
                  style={{ color: 'red', fontSize: '25',marginBottom:'20px',fontFamily: 'Kanit' }}
                >
                  อัพเดทล่าสุดเมื่อ: {data_text.updatedDate}
                </Typography>
                <Typography variant='subtitle2' align='right'>
                  <a
                    target='_blank'
                    href={data_text.source}
                    target='_blank'
                    rel='noopener noreferrer'
                    style={{fontFamily: 'Kanit'}}
                  >
                    {data_text.source}
                  </a>
                </Typography>
              </Grid>
              <Grid item xs={6} sm={3}>
                <Paper
                  className={classes.paper}
                  style={{ backgroundColor: '#FFCC33' }}
                >
                  <Typography style={{fontFamily: 'Kanit'}}>ยืนยัน</Typography>
                  <Typography style={{fontFamily: 'Kanit'}} variant='h3'>
                    {data_text.confirmed.toLocaleString()}
                  </Typography>
                  <Typography style={{fontFamily: 'Kanit'}} variant='h5'>
                    ({data_text.newConfirmed.toLocaleString()})
                  </Typography>
                </Paper>
              </Grid>
              <Grid item xs={6} sm={3}>
                <Paper
                  className={classes.paper}
                  style={{ backgroundColor: '#99CCFF' }}
                >
                  <Typography style={{fontFamily: 'Kanit'}}>รักษาตัวในโรงพยาบาล</Typography>
                  <Typography style={{fontFamily: 'Kanit'}} variant='h3'>
                    {data_text.hospitalized.toLocaleString()}
                  </Typography>
                  <Typography style={{fontFamily: 'Kanit'}} variant='h5'>
                    ({data_text.newHospitalized.toLocaleString()})
                  </Typography>
                </Paper>
              </Grid>
              <Grid item xs={6} sm={3}>
                <Paper
                  className={classes.paper}
                  style={{ backgroundColor: '#FF6666' }}
                >
                  <Typography style={{fontFamily: 'Kanit'}}>เสียชีวิต</Typography>
                  <Typography style={{fontFamily: 'Kanit'}} variant='h3'>
                    {data_text.deaths.toLocaleString()}
                  </Typography>
                  <Typography style={{fontFamily: 'Kanit'}} variant='h5'>
                    ({data_text.newDeaths.toLocaleString()})
                  </Typography>
                </Paper>
              </Grid>
              <Grid item xs={6} sm={3}>
                <Paper
                  className={classes.paper}
                  style={{ backgroundColor: '#00CC33' }}
                >
                  <Typography style={{fontFamily: 'Kanit'}}>หายแล้ว</Typography>
                  <Typography style={{fontFamily: 'Kanit'}} variant='h3'>
                    {data_text.recovered.toLocaleString()}
                  </Typography>
                  <Typography style={{fontFamily: 'Kanit'}} variant='h5'>
                    ({data_text.newRecovered.toLocaleString()})
                  </Typography>
                </Paper>
              </Grid>
              <Grid item xs={12} sm={6}>
                <Paper className={classes.paper}>
                  <ResponsiveContainer width='100%' height={300}>
                    <BarChart
                      width={500}
                      height={300}
                      data={dataTimeline15}
                      margin={{ top: 5, right: 5, left: 0, bottom: 5 }}
                    >
                      <CartesianGrid strokeDasharray='3 3' />
                      <XAxis dataKey='Date' />
                      <YAxis />
                      <Tooltip />
                      <Legend />
                      <Bar dataKey='NewConfirmed' fill='#003399' />
                      <Bar dataKey='NewDeaths' fill='#FF6666' />
                    </BarChart>
                  </ResponsiveContainer>
                </Paper>
              </Grid>
              <Grid item xs={12} sm={6}>
                <Paper className={classes.paper}>
                  <ResponsiveContainer width='100%' height={300}>
                    <PieChart width={400} height={400}>
                      <Legend />
                      <Pie
                        dataKey='value'
                        isAnimationActive={false}
                        data={data_pie}
                        outerRadius={100}
                        label
                      >
                        <Cell fill='#00CCFF' />
                        <Cell fill='#FF6666' />
                        <Cell fill='#33CC66' />
                      </Pie>
                      <Tooltip />
                    </PieChart>
                  </ResponsiveContainer>
                </Paper>
              </Grid>
              <Grid item xs={12}>
                <Paper className={classes.paper}>
                  <ResponsiveContainer width='100%' height={500}>
                    <LineChart
                      data={dataTimeline}
                      margin={{ top: 5, right: 5, left: 0, bottom: 5 }}
                    >
                      <CartesianGrid strokeDasharray='3 3' />
                      <XAxis dataKey='Date' />
                      <YAxis />
                      <Tooltip />
                      <Legend />
                      <Line
                        type='monotone'
                        dataKey='Confirmed'
                        stroke='blue'
                        dot={false}
                      />
                      <Line
                        type='monotone'
                        dataKey='Hospitalized'
                        stroke='orange'
                        dot={false}
                      />
                      <Line
                        type='monotone'
                        dataKey='Deaths'
                        stroke='red'
                        dot={false}
                      />
                      <Line
                        type='monotone'
                        dataKey='Recovered'
                        stroke='green'
                        dot={false}
                      />
                    </LineChart>
                  </ResponsiveContainer>
                </Paper>
              </Grid>
            </Grid>
          </Container>
          <Footer />
        </div>
      </div>
    )
  }
}

export default withStyles(styles)(PageCovid)
