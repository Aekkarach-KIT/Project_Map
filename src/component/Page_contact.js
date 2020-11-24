import React, { Component } from 'react'
import fire from '../config/fire'
import NaBar from './Bar'
import Footer from './Footer'
import './Style.css'

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
              <h2 style={{color:'white'}}>ติดต่อเรา</h2>
              <form onSubmit={this.sendMessage.bind(this)} ref='contactForm'>
                <div className='form-group'>
                  <label htmlFor='name' style={{color:'white'}}>ชื่อ</label>
                  <input
                    type='text'
                    className='form-control'
                    id='name'
                    placeholder='Name'
                    ref={name => (this.inputName = name)}
                  />
                </div>
                <div className='form-group'>
                  <label htmlFor='exampleInputEmail1' style={{color:'white'}}>Email</label>
                  <input
                    type='email'
                    className='form-control'
                    id='email'
                    placeholder='Email'
                    ref={email => (this.inputEmail = email)}
                  />
                </div>
                <div className='form-group'>
                  <label htmlFor='city' style={{color:'white'}}>ตำบล</label>
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
                  <label htmlFor='phone' style={{color:'white'}}>เบอร์โทรติดต่อ</label>
                  <input
                    type='number'
                    className='form-control'
                    id='phone'
                    placeholder='+66'
                    ref={phone => (this.inputPhone = phone)}
                  />
                </div>
                <div className='form-group'>
                  <label htmlFor='message' style={{color:'white'}}>ข้อความ</label>
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
              <div className='row'>
                {this.state.form.map(form => (
                  <div
                    className='col-sm-6'
                    key={form.phone}
                    style={{ margin: `0px 0px 30px 0px` }}
                  >
                    <div className='card'>
                      <div className='card-body'>
                        <h4 className='card-title'>{form.name}</h4>
                        <h6 className='card-subtitle mb-2 text-muted'>
                          {form.city}
                        </h6>
                        <p className='card-text'>{form.message}</p>
                        <a href={`tel:${form.phone}`} className='card-link'>
                          {form.phone}
                        </a>
                        <a href={`mailto:${form.email}`} className='card-link'>
                          {form.email}
                        </a>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <Footer />
      </div>
    )
  }
}

export default PageContact
