'use client'
import React from 'react';
import { useState } from 'react';
import axios from 'axios';
import { useRouter } from 'next/navigation';
const uploadImageStyle: React.CSSProperties = {
  display: 'inline-block',
  width: '100px',
  height: '100px',
  border: '2px dashed #bbb',
  borderRadius: '5px',
  textAlign: 'center', // Đảm bảo thuộc tính này là hợp lệ
  lineHeight: '100px',
  color: '#bbb',
  cursor: 'pointer'
};

const socialButtonStyle: React.CSSProperties = {
  display: 'inline-block',
  margin: '0 5px 10px',
  padding: '10px 20px',
  backgroundColor: '#f0f0f0',
  border: '1px solid #ddd',
  cursor: 'pointer',
  borderRadius: '3px',
  fontSize: '14px'
};

const formRowStyle: React.CSSProperties = {
  display: 'flex',
  justifyContent: 'space-between',
  marginBottom: '15px'
};

const inputStyle: React.CSSProperties = {
  flex: '1',
  padding: '10px',
  marginRight: '10px',
  marginLeft: '10px',
  border: '1px solid #ddd',
  borderRadius: '4px',
  fontSize: '14px'
};

const submitButtonStyle: React.CSSProperties = {
  padding: '10px 30px',
  backgroundColor: '#000',
  color: '#fff',
  border: 'none',
  cursor: 'pointer',
  fontSize: '16px',
  borderRadius: '4px'
};

export default function Register() {

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    phone: '',
    birthday: '',
    address: '',
    gender: '',
    otp: '',
  });
  const [otpSent, setOtpSent] = useState(false);
  const [otpError, setOtpError] = useState(false);
  const router = useRouter();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleCheckEmail = async () => {
    try {
      const response = await axios.post('https://api-pro.teklearner.com/auth/v1/check-email', { email: formData.email });
      if (response.data.exists) {
        alert('Email đã tồn tại trong hệ thống.');
      } else {
        handleCheckPhone();
      }
    } catch (error) {
      console.error('Error checking email:', error);
    }
  };

  const handleCheckPhone = async () => {
    try {
      const response = await axios.post('https://api-pro.teklearner.com/auth/v1/check-phone', { phone: formData.phone });
      if (response.data.exists) {
        alert('Số điện thoại đã tồn tại trong hệ thống.');
      } else {
        handleSendOtp();
      }
    } catch (error) {
      console.error('Error checking phone:', error);
    }
  };

  const handleSendOtp = async () => {
    try {
      await axios.post('https://api-pro.teklearner.com/auth/v1/send-otp-email', { email: formData.email });
      setOtpSent(true);
    } catch (error) {
      console.error('Error sending OTP:', error);
    }
  };

  const handleRegister = async () => {
    if (!otpSent) {
      setOtpError(true);
      return;
    }

    try {
      await axios.post('https://api-pro.teklearner.com/auth/v1/register', formData);
      alert('Đăng ký thành công!');
      router.push('/');
    } catch (error) {
      console.error('Error registering:', error);
    }
  };

  return (
    <div style={{ padding: '20px', fontFamily: 'Arial, sans-serif', maxWidth: '600px', margin: 'auto' }}>
      <h1>REGISTRATION</h1>

      <div style={{ textAlign: 'center', marginBottom: '20px' }}>
        <button style={socialButtonStyle}>Register with Facebook</button>
        <button style={socialButtonStyle}>Register with Google+</button>
        <button style={socialButtonStyle}>Register with Instagram</button>
      </div>

      <div style={{ textAlign: 'center', marginBottom: '20px' }}>OR</div>

      <div style={{ textAlign: 'center', marginBottom: '20px' }}>
        <div style={uploadImageStyle}>
          <span style={{ display: 'block', fontSize: '24px', color: '#bbb' }}>+</span>
          <span>Upload Image</span>
        </div>
      </div>

      <form>
        <h2>Personal Details</h2>
        <div style={formRowStyle}>
          <input type="text" name="name" placeholder="First Name *" style={inputStyle} required value={formData.name}
            onChange={handleChange} />
        </div>
        <div style={formRowStyle}>
          <input type="text" name="password" placeholder="PassWord*" style={inputStyle} required value={formData.password}
            onChange={handleChange} />
        </div>
        <div style={formRowStyle}>
          <input type="email" name="email" placeholder="Email Address *" style={inputStyle} required value={formData.email}
            onBlur={handleCheckEmail}
            onChange={handleChange} />
          <input type="tel"  name="phone" placeholder="Mobile Number *" style={inputStyle} required    value={formData.phone}
          onChange={handleChange}/>
        </div>

        <h2>Address</h2>
        <div style={formRowStyle}>
          <input type="text" name="birthday" placeholder="Ngày sinh" style={inputStyle}   value={formData.birthday}
          onChange={handleChange} />
        </div>
        <div style={formRowStyle}>
          <input type="text"   name="address" placeholder="Street" style={inputStyle} value={formData.address}
          onChange={handleChange}/>
        </div>
        <div style={formRowStyle}>
          <input type="text"   name="gender" placeholder="gender" style={inputStyle} value={formData.gender}
          onChange={handleChange}/>
        </div>

        {otpSent && (
          <input
            type="text"
            name="otp"
            placeholder="Nhập mã OTP"
            value={formData.otp}
            onChange={handleChange}
          />
        )}

        <div style={{ textAlign: 'center' }}>
          <button type="submit" onClick={handleRegister} style={submitButtonStyle}>REGISTER</button>
        </div>
      </form>
      {otpError && <p style={{ color: 'red' }}>Vui lòng nhập mã OTP.</p>}
    </div>
  );
}
