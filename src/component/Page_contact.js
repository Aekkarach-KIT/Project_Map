import React, { Component } from 'react'
import fire from '../config/fire'
import NaBar from './Bar'
import Footer from './Footer'
import './Style.css'
import { Row, Col, Container } from 'reactstrap'
class PageContact extends Component {
  constructor (props) {
    super(props)
    this.state = {
      form: [],
      alert: false,
      alertData: {}
    }
  }

  showAlert (type, message) {
    this.setState({
      alert: true,
      alertData: { type, message }
    })
    setTimeout(() => {
      this.setState({ alert: false })
    }, 4000)
  }

  resetForm () {
    this.refs.contactForm.reset()
  }

  componentWillMount () {
    let formRef = fire
      .database()
      .ref('form')
      .orderByKey()
      .limitToLast(6)
    formRef.on('child_added', snapshot => {
      const { name, email, city, phone, message } = snapshot.val()
      const data = { name, email, city, phone, message }
      this.setState({ form: [data].concat(this.state.form) })
    })
  }

  sendMessage (e) {
    e.preventDefault()
    const params = {
      name: this.inputName.value,
      email: this.inputEmail.value,
      city: this.inputCity.value,
      phone: this.inputPhone.value,
      message: this.textAreaMessage.value
    }
    if (
      params.name &&
      params.email &&
      params.phone &&
      params.phone &&
      params.message
    ) {
      fire
        .database()
        .ref('form')
        .push(params)
        .then(() => {
          this.showAlert('success', 'Your message was sent successfull')
        })
        .catch(() => {
          this.showAlert('danger', 'Your message could not be sent')
        })
      this.resetForm()
    } else {
      this.showAlert('warning', 'Please fill the form')
    }
  }

  render () {
    return (
      <div className='bgco'>
        <NaBar />
        {this.state.alert && (
          <div
            className={`alert alert-${this.state.alertData.type}`}
            role='alert'
          >
            <div className='container'>{this.state.alertData.message}</div>
          </div>
        )}
        <div className='container' style={{ padding: `40px 0px` }}>
          <div className='row'>
            <div className='col-sm-4'>
              <h2 style={{ color: 'white' }}>ติดต่อเรา</h2>
              <form onSubmit={this.sendMessage.bind(this)} ref='contactForm'>
                <div className='form-group'>
                  <label htmlFor='name' style={{ color: 'white' }}>
                    ชื่อ
                  </label>
                  <input
                    type='text'
                    className='form-control'
                    id='name'
                    placeholder='Name'
                    ref={name => (this.inputName = name)}
                  />
                </div>
                <div className='form-group'>
                  <label
                    htmlFor='exampleInputEmail1'
                    style={{ color: 'white' }}
                  >
                    Email
                  </label>
                  <input
                    type='email'
                    className='form-control'
                    id='email'
                    placeholder='Email'
                    ref={email => (this.inputEmail = email)}
                  />
                </div>
                <div className='form-group'>
                  <label htmlFor='city' style={{ color: 'white' }}>
                    ตำบล
                  </label>
                  <select
                    className='form-control'
                    id='city'
                    ref={city => (this.inputCity = city)}
                  >
                    <option value='เกาะแก้ว'>เกาะแก้ว</option>
                    <option value='รัษฎา'>รัษฎา</option>
                    <option value='วิชิต'>วิชิต</option>
                    <option value='ฉลอง'>ฉลอง</option>
                    <option value='ราไวย์'>ราไวย์</option>
                    <option value='กะรน'>กะรน</option>
                    <option value='เทพกระษัตรี'>เทพกระษัตรี</option>
                    <option value='ศรีสุนทร'>ศรีสุนทร</option>
                    <option value='เชิงทะเล'>เชิงทะเล</option>
                    <option value='ป่าคลอก'>ป่าคลอก</option>
                    <option value='ไม้ขาว'>ไม้ขาว</option>
                    <option value='สาคู'>สาคู</option>
                    <option value='กะทู้'>กะทู้</option>
                    <option value='ป่าตอง'>ป่าตอง</option>
                    <option value='กมลา'>กมลา</option>
                  </select>
                </div>

                <div className='form-group'>
                  <label htmlFor='phone' style={{ color: 'white' }}>
                    เบอร์โทรติดต่อ
                  </label>
                  <input
                    type='number'
                    className='form-control'
                    id='phone'
                    placeholder='+66'
                    ref={phone => (this.inputPhone = phone)}
                  />
                </div>
                <div className='form-group'>
                  <label htmlFor='message' style={{ color: 'white' }}>
                    ข้อความ
                  </label>
                  <textarea
                    className='form-control'
                    id='message'
                    rows='3'
                    ref={message => (this.textAreaMessage = message)}
                  ></textarea>
                </div>
                <button type='submit' className='btn btn-success'>
                  ส่ง
                </button>
              </form>
            </div>
            
            <div className='col-sm-8'>
              <Row style={{marginLeft:'100px',marginTop:'75px'}}>
              <div className='row'>
              <iframe
                  src='https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d626.9136052228218!2d98.35227356454321!3d7.89343837579742!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30503034b41c307f%3A0x6a0a93228d659fc9!2z4Lin4Li04LiX4Lii4Liy4Lil4Lix4Lii4LiK4Li44Lih4LiK4LiZ4Lig4Li54LmA4LiB4LmH4LiVIFBodWtldCBDb21tdW5pdHkgQ29sbGVnZQ!5e0!3m2!1sth!2sth!4v1613195097589!5m2!1sth!2sth'
                  width='700'
                  height='450'
                  frameborder='0'
                  allowFullScreen='true'
                ></iframe>
              </div>
              <Col style={{marginTop:'20px',marginLeft:'10%'}}>
              
              <p>สถานที่: มหาวิทยาลัยสงขลานครินทร์ วิทยาเขตภูเก็ต</p>
              <p>เบอร์โทรติดต่อ: 095-4272-653</p>
              <p>Email: s6035512060@phuket.psu.ac.th</p>
           
              </Col>
              </Row>
            </div>
          </div>
        </div>

        <Footer />
      </div>
    )
  }
}

export default PageContact
