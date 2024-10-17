export default function Cart(){
    return(
        <>
         <div className="container mt-5">
      <h1 className="mb-4">CART</h1>
      <div className="row">
        {/* Phần sản phẩm bên trái */}
        <div className="col-md-8">
          {/* Sản phẩm 1 */}
          <div className="d-flex justify-content-between align-items-center mb-3 border-bottom pb-3">
            <div className="d-flex align-items-center">
              <div className="bg-light" style={{ width: '100px', height: '100px' }}>
                <img src="/image/pr-bg-05.png" alt="Product" style={{ width: '100%', height: '100%' }} />
              </div>
              <div className="ms-3">
                <h5>Product Title Goes Here</h5>
                <span className="text-muted text-decoration-line-through">AED 32.00</span>
                <span className="fw-bold ms-2">AED 25.60</span>
                <div className="input-group mt-2" style={{ width: '120px' }}>
                  <button className="btn btn-outline-secondary">−</button>
                  <input type="text" className="form-control text-center" value="1" readOnly />
                  <button className="btn btn-outline-secondary">+</button>
                </div>
              </div>
            </div>
            <button className="btn btn-outline-dark">REMOVE</button>
          </div>

          {/* Sản phẩm 2 */}
          <div className="d-flex justify-content-between align-items-center mb-3 border-bottom pb-3">
            <div className="d-flex align-items-center">
              <div className="bg-light" style={{ width: '100px', height: '100px' }}>
                <img src="/image/pr-bg-06.png" alt="Product" style={{ width: '100%', height: '100%' }} />
              </div>
              <div className="ms-3">
                <h5>Product Title Goes Here</h5>
                <span className="text-muted text-decoration-line-through">AED 32.00</span>
                <span className="fw-bold ms-2">AED 25.60</span>
                <div className="input-group mt-2" style={{ width: '120px' }}>
                  <button className="btn btn-outline-secondary">−</button>
                  <input type="text" className="form-control text-center" value="1" readOnly />
                  <button className="btn btn-outline-secondary">+</button>
                </div>
              </div>
            </div>
            <button className="btn btn-outline-dark">REMOVE</button>
          </div>

          {/* Sản phẩm 3 */}
          <div className="d-flex justify-content-between align-items-center mb-3 border-bottom pb-3">
            <div className="d-flex align-items-center">
              <div className="bg-light" style={{ width: '100px', height: '100px' }}>
                <img src="/image/pr-bg-07.png" alt="Product" style={{ width: '100%', height: '100%' }} />
              </div>
              <div className="ms-3">
                <h5>Product Title Goes Here</h5>
                <span className="text-muted text-decoration-line-through">AED 32.00</span>
                <span className="fw-bold ms-2">AED 25.60</span>
                <div className="input-group mt-2" style={{ width: '120px' }}>
                  <button className="btn btn-outline-secondary">−</button>
                  <input type="text" className="form-control text-center" value="1" readOnly />
                  <button className="btn btn-outline-secondary">+</button>
                </div>
              </div>
            </div>
            <button className="btn btn-outline-dark">REMOVE</button>
          </div>

          {/* Sản phẩm 4 */}
          <div className="d-flex justify-content-between align-items-center mb-3 border-bottom pb-3">
            <div className="d-flex align-items-center">
              <div className="bg-light" style={{ width: '100px', height: '100px' }}>
                <img src="/image/pr-bg-08.png" alt="Product" style={{ width: '100%', height: '100%' }} />
              </div>
              <div className="ms-3">
                <h5>Product Title Goes Here</h5>
                <span className="text-muted text-decoration-line-through">AED 32.00</span>
                <span className="fw-bold ms-2">AED 25.60</span>
                <div className="input-group mt-2" style={{ width: '120px' }}>
                  <button className="btn btn-outline-secondary">−</button>
                  <input type="text" className="form-control text-center" value="1" readOnly />
                  <button className="btn btn-outline-secondary">+</button>
                </div>
              </div>
            </div>
            <button className="btn btn-outline-dark">REMOVE</button>
          </div>
        </div>

        {/* Phần tóm tắt bên phải */}
        <div className="col-md-4">
          <div className="p-3 bg-light">
            <h5>Add Promo Code</h5>
            <div className="input-group mb-3">
              <input type="text" className="form-control" placeholder="Enter promo code" />
              <button className="btn btn-dark">ADD</button>
            </div>
          </div>

          <div className="p-3 bg-light mt-3">
            <h5>Summary</h5>
            <div className="d-flex justify-content-between">
              <span>Price (4 items)</span>
              <span>AED 128.60</span>
            </div>
            <div className="d-flex justify-content-between">
              <span>Delivery Charge</span>
              <span>AED 15.00</span>
            </div>
            <div className="d-flex justify-content-between fw-bold mt-2">
              <span>Total Price</span>
              <span>AED 143.00</span>
            </div>

            <button className="btn btn-dark w-100 mt-3">PLACE ORDER</button>
            <button className="btn btn-outline-dark w-100 mt-2">CONTINUE SHOPPING</button>
          </div>
        </div>
      </div>
    </div>
        </>
    )
}