import { Container, Row, Col, Image } from 'react-bootstrap';
"use client"
export default function Profile(){
    return(
        <>
        <div>
      {/* Thêm Bootstrap và Font Awesome qua CDN */}
      <div>
        <link
          rel="stylesheet"
          href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
          integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ775rHh9KRX5smVVZi0tHA5cJX/n/tWTIax"
          crossOrigin="anonymous"
        />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css"
        />
      </div>

      {/* Giao diện chính */}
      <div className="container text-center" style={{ marginTop: '50px' }}>
        {/* Avatar Section */}
        <div className="row justify-content-center">
          <div className="col-md-6 text-center">
            <div style={{ marginTop: '20px' }}>
              <img
                src="/image/profile.jpg" // Đổi thành đường dẫn hình đại diện
                className="rounded-circle"
                width={120}
                height={120}
                alt="Profile Picture"
              />
            </div>
          </div>
        </div>

        {/* Name and Username */}
        <div className="row justify-content-center mt-3">
          <div className="col-md-6">
            <h2>Name Surname</h2>
            <p>@username</p>

            {/* Social Media Icons */}
            <div style={{ fontSize: '24px' }}>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: '#000', marginRight: '10px', transition: 'color 0.3s' }}
                onMouseOver={(e) => (e.target.style.color = '#007bff')}
                onMouseOut={(e) => (e.target.style.color = '#000')}
              >
                <i className="fab fa-facebook"></i>
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: '#000', marginRight: '10px', transition: 'color 0.3s' }}
                onMouseOver={(e) => (e.target.style.color = '#007bff')}
                onMouseOut={(e) => (e.target.style.color = '#000')}
              >
                <i className="fab fa-instagram"></i>
              </a>
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: '#000', transition: 'color 0.3s' }}
                onMouseOver={(e) => (e.target.style.color = '#007bff')}
                onMouseOut={(e) => (e.target.style.color = '#000')}
              >
                <i className="fab fa-youtube"></i>
              </a>
            </div>
          </div>
        </div>

        {/* Description Section */}
        <div className="row justify-content-center mt-3">
          <div className="col-md-8">
            <p style={{ color: '#6c757d' }}>
              Enim expedita torquent! Animi sunt beatae laoreet nec. Eiusmod rutrum pariatur! 
              Nunc dolorum nisi eum quos quisquam ea. Nobis Perspiciatis, quidem! Sint esse neque 
              viverra rerum nullam.
            </p>
          </div>
        </div>

        {/* Placeholder for additional content or carousel */}
        <div className="row justify-content-center mt-5">
          <div className="col-md-8">
            <div
              style={{
                height: '200px',
                backgroundColor: '#f8f9fa',
                border: '2px dashed #dee2e6',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
              }}
            >
              <img src="/placeholder-image.png" alt="Placeholder" style={{ width: '100px', height: '100px' }} />
            </div>
          </div>
        </div>
      </div>
    </div>
        </>
    )
}