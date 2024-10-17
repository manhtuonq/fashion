export default function checkOut (){
return(
    <>
     <div className="container mt-5">
      <h1 className="mb-4">CHECKOUT</h1>

      {/* Breadcrumb */}
      <nav aria-label="breadcrumb">
        <ol className="breadcrumb">
          <li className="breadcrumb-item"><a href="/">Home</a></li>
          <li className="breadcrumb-item active" aria-current="page">Checkout</li>
        </ol>
      </nav>

      <div className="row">
        {/* Phần form bên trái */}
        <div className="col-md-8">
          <div className="p-4 bg-light">
            <div className="d-flex justify-content-between">
              <h5>Shipping Details</h5>
              <h5>Billing Details</h5>
            </div>
            <hr />
            
            {/* Checkbox same as shipping */}
            <div className="form-check mb-3">
              <input className="form-check-input" type="checkbox" id="sameAddress" />
              <label className="form-check-label" htmlFor="sameAddress">
                Same as Shipping Address
              </label>
            </div>

            {/* Loại địa chỉ */}
            <div className="row mb-3">
              <div className="col-md-6">
                <label htmlFor="addressType" className="form-label">Type of Address</label>
                <select id="addressType" className="form-select">
                  <option>Personal</option>
                  <option>Business</option>
                </select>
              </div>
            </div>

            {/* First Name, Last Name */}
            <div className="row mb-3">
              <div className="col-md-6">
                <label htmlFor="firstName" className="form-label">First Name</label>
                <input type="text" className="form-control" id="firstName" />
              </div>
              <div className="col-md-6">
                <label htmlFor="lastName" className="form-label">Last Name</label>
                <input type="text" className="form-control" id="lastName" />
              </div>
            </div>

            {/* Street Address, Area */}
            <div className="row mb-3">
              <div className="col-md-6">
                <label htmlFor="streetAddress" className="form-label">Street Address</label>
                <input type="text" className="form-control" id="streetAddress" />
              </div>
              <div className="col-md-6">
                <label htmlFor="area" className="form-label">Area</label>
                <select id="area" className="form-select">
                  <option>Select Area</option>
                  <option>Area 1</option>
                  <option>Area 2</option>
                </select>
              </div>
            </div>

            {/* Emirate */}
            <div className="row mb-3">
              <div className="col-md-12">
                <label htmlFor="emirate" className="form-label">Emirate</label>
                <input type="text" className="form-control" id="emirate" />
              </div>
            </div>

            {/* Enter Card Details */}
            <h5 className="mt-4">Enter Card Details</h5>
            <hr />

            {/* Card Number */}
            <div className="row mb-3">
              <div className="col-md-12">
                <label htmlFor="cardNumber" className="form-label">Card Number</label>
                <input type="text" className="form-control" id="cardNumber" />
              </div>
            </div>

            {/* Card Name */}
            <div className="row mb-3">
              <div className="col-md-12">
                <label htmlFor="cardName" className="form-label">Card Number Name</label>
                <input type="text" className="form-control" id="cardName" />
              </div>
            </div>

            {/* Expiry Date and CVV */}
            <div className="row mb-3">
              <div className="col-md-6">
                <label htmlFor="expiryDate" className="form-label">Expiry Date</label>
                <div className="d-flex">
                  <input type="text" className="form-control me-2" placeholder="MM" maxLength={2} />
                  <input type="text" className="form-control" placeholder="YYYY" maxLength={4} />
                </div>
              </div>
              <div className="col-md-6">
                <label htmlFor="cvv" className="form-label">CVV</label>
                <input type="text" className="form-control" id="cvv" maxLength={3} />
              </div>
            </div>

            {/* Agree to terms */}
            <div className="form-check mb-3">
              <input className="form-check-input" type="checkbox" id="terms" />
              <label className="form-check-label" htmlFor="terms">
                I agree to the <a href="#">Terms & Conditions</a>
              </label>
            </div>

            {/* Pay Button */}
            <button className="btn btn-dark w-100">PAY</button>
          </div>
        </div>

        {/* Phần tóm tắt bên phải */}
        <div className="col-md-4">
          <div className="p-4 bg-light">
            <h5>Summary</h5>
            <div className="d-flex justify-content-between mb-2">
              <span>Price (4 items)</span>
              <span>AED 128.60</span>
            </div>
            <div className="d-flex justify-content-between mb-2">
              <span>Delivery Charge</span>
              <span>AED 15.00</span>
            </div>
            <div className="d-flex justify-content-between fw-bold">
              <span>Total Price</span>
              <span>AED 143.00</span>
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
)
}