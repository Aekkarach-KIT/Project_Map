import React, { Component } from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import './Style.css'
import {
  MDBNavbar,
  MDBNavbarBrand,
  MDBMask,
  MDBRow,
  MDBCol,
  MDBIcon,
  MDBBtn,
  MDBView,
  MDBContainer,
  MDBCard,
  MDBCardBody,
  MDBInput,
  MDBAnimation
} from 'mdbreact'
import './Login.css'
import fire from '../config/fire'
import 'bootstrap/dist/css/bootstrap.min.css'
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth'
import firebase from 'firebase'
class Login extends Component {
  constructor (props) {
    super(props)
    this.login = this.login.bind(this)
    this.handleChange = this.handleChange.bind(this)
    this.sigup = this.sigup.bind(this)
    this.state = {
      email: '',
      password: '',
      isSignedIn: false
    }
  }

  uiConfig = {
    signInFlow: 'popup',
    signInOptions: [firebase.auth.GoogleAuthProvider.PROVIDER_ID],

    callback: {
      signInSuccess: () => false
    }
  }

  componentDidMount () {
    firebase.auth().onAuthStateChanged(user => {
      this.setState({ isSignedIn: !!user })
    })
  }

  login (e) {
    e.preventDefault()

    fire
      .auth()
      .signInWithEmailAndPassword(this.state.email, this.state.passeword)
      .then(u => {
        console.log(u)
      })
      .catch(err => {
        console.log(err)
      })
  }

  handleChange (e) {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  sigup (e) {
    e.preventDefault()
    fire
      .auth()
      .createUserWithEmailAndPassword(this.state.email, this.state.password)
      .then(u => {
        console.log(u)
      })
      .catch(err => {
        console.log(err)
      })
  }

  render () {
    return (
      <div id='classicformpage'>
        <Router>
          <div>
            <MDBNavbar dark expand='md' fixed='top'>
              <MDBNavbarBrand style={{ fontFamily: 'Kanit', fontSize: '30px' }}>
                <strong className='white-text'>PHUKET MAP POPULATION</strong>
              </MDBNavbarBrand>
            </MDBNavbar>
          </div>
        </Router>

        <MDBView>
          <MDBMask className='d-flex justify-content-center align-items-center gradient'>
            <MDBContainer>
              <MDBRow>
                <MDBAnimation
                  type='fadeInLeft'
                  delay='.3s'
                  className='white-text text-center text-md-left col-md-6 mt-xl-5 mb-5'
                >
                  <h1 className='h1-responsive font-weight-bold'>WELCOME</h1>
                  <hr className='hr-light' />
                  <h6 className='mb-4' style={{ fontSize: '17px' }}>
                    ยินดีต้อนรับเข้าสู่เว็บไซต์แผนที่แสดงจำนวนประชากรของจังหวัดภูเก็ต
                    ซึ่งเป็นเว็บไซต์ที่มีประโยชน์ในเรื่องของข้อมูลทางสถิติประชากรในแต่ละพื้นที่ของจังหวัดภูเก็ต
                    และ มีข้อมูลอื่น ๆ ที่น่าสนใจ เช่น ปริมาณขยะ
                    ปริมาณประชากรแฝง ปริมาณนักท่องเที่ยว เป็นต้น
                    เหมาะสำหรับผู้ที่สนใจนำข้อมูลเหล่านี้ไปใช้ในการวิเคราะห์
                    หรือ บุคคลทั่วไปเพื่อศึกษาสถิติต่าง ๆ ในพื้นที่จังหวัดภูเก็ต
                  </h6>
                </MDBAnimation>

                <MDBCol md='6' xl='5' className='mb-4'>
                  <MDBAnimation type='fadeInRight' delay='.3s'>
                    <MDBCard id='classic-card'>
                      <MDBCardBody className='white-text'>
                        <h3 className='text-center'>
                          <MDBIcon icon='user' /> ลงชื่อเข้าใช้งาน
                        </h3>
                        <hr className='hr-light' />
                        <MDBInput
                          className='white-text'
                          iconClass='white-text'
                          label='Your email'
                          roup
                          type='email'
                          name='email'
                          validate
                          error='wrong'
                          success='right'
                          icon='envelope'
                          value={this.state.email}
                          onChange={this.handleChange}
                          style={{ fontFamily: 'Kanit' }}
                        />
                        <MDBInput
                          className='white-text'
                          iconClass='white-text'
                          label='Your password'
                          icon='lock'
                          type='password'
                          group
                          name='password'
                          validate
                          value={this.state.password}
                          onChange={this.handleChange}
                        />
                        <div className='text-center mt-4 black-text'>
                          <MDBBtn
                            style={{ fontFamily: 'Kanit', fontSize: '17px' }}
                            color='amber'
                            onClick={this.login}
                          >
                            Login
                          </MDBBtn>
                          <MDBBtn
                            style={{ fontFamily: 'Kanit', fontSize: '17px' }}
                            color='amber'
                            onClick={this.sigup}
                          >
                            Sign Up
                          </MDBBtn>
                          <hr className='hr-light' />
                          <StyledFirebaseAuth
                            uiConfig={this.uiConfig}
                            firebaseAuth={firebase.auth()}
                          />
                        </div>
                      </MDBCardBody>
                    </MDBCard>
                  </MDBAnimation>
                </MDBCol>
              </MDBRow>
            </MDBContainer>
          </MDBMask>
        </MDBView>
      </div>
    )
  }
}

export default Login
