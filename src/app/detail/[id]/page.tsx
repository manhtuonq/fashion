"use client";
import useSWR from "swr";

const fetcher = async (url: string, options?: RequestInit) => {
  const res = await fetch(url, options);
  if (!res.ok) {
    const errorText = await res.text();
    throw new Error(`Network response was not ok: ${errorText}`);
  }
  return res.json();
};

export default function Detail({ params }: { params: { id: string } }) {
  const { data, error } = useSWR(
    `https://api-pro.teklearner.com/product/v1/get-product-detail?id=${params.id}`,
    fetcher,
    { refreshInterval: 6000 }
  );

  if (error) return <div>Lỗi load dữ liệu: {error.message}</div>;
  if (!data) return <div>Đang tải...</div>;

  // Kiểm tra và lấy sản phẩm từ dữ liệu
  const product = data.data;

  if (!product) return <div>Không tìm thấy sản phẩm.</div>;

  return (
    <>
    <div className="bg-body-tertiary pt-4">
      <div className="container">
        <div>
          <p className="fw-medium">
            Home <i className="bi bi-chevron-right"></i>
            Skincare <i className="bi bi-chevron-right"></i>
            Brand <i className="bi bi-chevron-right"></i>
            {product.product_title}
          </p>
        </div>
        <h2>Details</h2>
        <div className="row bg-body py-5">
          <div className="col-12 col-lg-6 mb-4">
            <div className="container">
              <div className="row">
                <div className="col-4 col-sm-3 mb-3">
                  {product.product_gallery.map((url: string, index: number) => (
                    <img
                      key={index}
                      src={url}
                      className="img-thumbnail mt-3"
                      alt={`Product Image ${index + 1}`}
                    />
                  ))}
                </div>
                <div className="col-8 col-sm-9">
                  <img
                    src={product.product_gallery[0]}
                    className="img-thumbnail"
                    alt="Main Product"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="col-12 col-lg-6 fw-bold">
            <h4 className="text-uppercase">
              {product.product_brand || "Brand"}
            </h4>
            <h3>{product.product_title}</h3>
            <p>
              <i className="bi bi-heart pe-2"></i>Add to Favourites
            </p>
            <p>{product.product_description}</p>
            <p className="text-decoration-underline">Read More</p>
            <div className="d-flex flex-column flex-md-row gap-3">
              <p className="pt-2 text-decoration-line-through text-black-50 bg-white">
                AED {product.product_price}
              </p>
              <p className="pt-2">AED {product.product_sale_price}</p>
              <p className="border border-black px-3 py-2 fw-bold">30% Off</p>
            </div>
            <div className="d-flex flex-column flex-md-row gap-2">
              <p>You can track the price of this product </p>
              <p className="text-decoration-underline">Track Rate</p>
            </div>
            <div className="my-3 d-flex flex-column flex-md-row gap-3">
              <button className="b-detail bg-black text-light fw-bold">
                ADD TO CART
              </button>
              <button className="b-detail bg-black text-light fw-bold">
                BUY NOW
              </button>
            </div>
            <p className="text-decoration-underline">
              <i className="bi bi-heart pe-2"></i> View My Favourite List
            </p>
            <div className="container-fluid text-center">
              <div className="row gap-3">
                {/* Render thêm thông tin  */}
                <div className="col-12 col-sm-6 col-md-3 py-2 fs-6 border">
                  Lorem ipsum
                </div>
                <div className="col-12 col-sm-6 col-md-3 py-2 fs-6 border">
                  Lorem ipsum
                </div>
                <div className="col-12 col-sm-6 col-md-3 py-2 fs-6 border">
                  Lorem ipsum
                </div>
                <div className="col-12 col-sm-6 col-md-3 py-2 fs-6 border">
                  Lorem ipsum
                </div>
                <div className="col-12 col-sm-6 col-md-3 py-2 fs-6 border">
                  Lorem ipsum
                </div>
                <div className="col-12 col-sm-6 col-md-3 py-2 fs-6 border">
                  Lorem ipsum
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

  
  <section className="container my-5">
    <h3 className="text-center mb-4">See what Ambassadors says about the product</h3>
    <div className="row text-center">
      <div className="col-md-6 col-lg-4 mb-4">
        <div className="card p-4 shadow-sm">
          <img src="/image/pr-bg-10.png" className="rounded-circle mx-auto d-block mb-3" alt="Ambassador"/>
          <h5 className="card-title">Name Surname</h5>
          <span className="badge bg-secondary">AMBASSADOR</span>
          <p className="card-text mt-3">Pede dis ipsum placeat do exercitation laborum...</p>
          <button className="btn btn-dark">SHOP WITH ME</button>
          <p className="mt-4">What I love about this product</p>
          <div className="d-flex justify-content-around mt-2">
            <button className="btn btn-outline-dark">Lorem Ipsum</button>
            <button className="btn btn-outline-dark">Lorem Ipsum Se</button>
          </div>
        </div>
      </div>
      
      <div className="col-md-6 col-lg-4 mb-4">
        <div className="card p-4 shadow-sm">
          <img src="/image/pr-bg-11.png" className="rounded-circle mx-auto d-block mb-3" alt="Ambassador" />
          <h5 className="card-title">Name Surname</h5>
          <span className="badge bg-secondary">AMBASSADOR</span>
          <p className="card-text mt-3">Pede dis ipsum placeat do exercitation laborum...</p>
          <button className="btn btn-dark">SHOP WITH ME</button>
          <p className="mt-4">What I love about this product</p>
          <div className="d-flex justify-content-around mt-2">
            <button className="btn btn-outline-dark">Lorem Ipsum</button>
            <button className="btn btn-outline-dark">Lorem Ipsum Se</button>
          </div>
        </div>
      </div>
      
      <div className="col-md-6 col-lg-4 mb-4">
        <div className="card p-4 shadow-sm">
          <img src="/image/pr-bg-12.png" className="rounded-circle mx-auto d-block mb-3" alt="Ambassador" />
          <h5 className="card-title">Name Surname</h5>
          <span className="badge bg-secondary">AMBASSADOR</span>
          <p className="card-text mt-3">Pede dis ipsum placeat do exercitation laborum...</p>
          <button className="btn btn-dark">SHOP WITH ME</button>
          <p className="mt-4">What I love about this product</p>
          <div className="d-flex justify-content-around mt-2">
            <button className="btn btn-outline-dark">Lorem Ipsum</button>
            <button className="btn btn-outline-dark">Lorem Ipsum Se</button>
          </div>
        </div>
      </div>
    </div>
  </section>

  <section className="container my-5">
    <h3 className="mb-4">Product Details</h3>
    <p>Ad illum natoque volutpat leo tor...</p>

    <div className="row">
      <div className="col-md-6 mb-4">
        <h4>Key Ingredients</h4>
        <ul>
          <li>Ingredient - Lorem ipsum dolor sit amet</li>
          <li>Ingredient - Etiam vehicula est libero</li>
          <li>Ingredient - Vestibulum tincidunt consectetur</li>
          <li>Ingredient - Aenean eget orci in purus efficitur</li>
        </ul>
      </div>

      <div className="col-md-6 mb-4">
        <h4>Key Benefits</h4>
        <ul>
          <li>Benefit - Lorem ipsum dolor sit amet</li>
          <li>Benefit - Praesent et nisl id lorem</li>
          <li>Benefit - Fusce efficitur ligula nec ex interdum</li>
          <li>Benefit - Nulla facilisi. Vivamus commodo</li>
        </ul>
      </div>
    </div>

    <h4>How to Use?</h4>
    <p>Ad illum natoque volutpat leo tor vehicula est libero.</p>

    <h4>All Ingredients</h4>
    <p>Water, Brassica Alcohol, Glycerin, etc.</p>
  </section>

  <div className="container mt-5">
      <div className="row">
        {/* Reviews Section */}
        <div className="col-lg-8">
          <div className="d-flex justify-content-between align-items-center mb-3">
            <h4>Reviews (1480)</h4>
            <button className="btn btn-dark">Write Review</button>
          </div>
          <div className="d-flex align-items-center mb-4">
            <h5 className="mr-2">4 / 5</h5>
            <span className="text-muted">Average Rating</span>
          </div>

          {/* Single Review */}
          <div className="mb-4 pb-3 border-bottom">
            <div className="d-flex align-items-center mb-2">
              <i className="bi bi-person-circle mr-2"></i>
              <strong>Name Surname</strong>
              <div className="ml-auto">
                <span className="text-warning">★★★☆☆</span>
              </div>
            </div>
            <p className="text-muted small">5 September 2018</p>
            <p>Porta corporis nibh. Adipisci maiores dui torquent porttitor nisi...</p>
          </div>

          {/* Additional Reviews */}
          <div className="mb-4 pb-3 border-bottom">
            <div className="d-flex align-items-center mb-2">
              <i className="bi bi-person-circle mr-2"></i>
              <strong>Name Surname</strong>
              <div className="ml-auto">
                <span className="text-warning">★★★☆☆</span>
              </div>
            </div>
            <p className="text-muted small">5 September 2018</p>
            <p>Porta corporis nibh. Adipisci maiores dui torquent porttitor nisi...</p>
          </div>
        </div>

        {/* Top Reviews Section */}
        <div className="col-lg-4">
          <h5>Top Reviews</h5>

          {/* Single Top Review */}
          <div className="mb-4 pb-3 border-bottom">
            <div className="d-flex align-items-center mb-2">
              <i className="bi bi-person-circle mr-2"></i>
              <strong>Name Surname</strong>
              <div className="ml-auto">
                <span className="text-warning">★★★★★</span>
              </div>
            </div>
            <p className="text-muted small">5 September 2018</p>
            <p>
              Porta corporis nibh. Adipisci maiores dui torquent porttitor nisi...
              <a href="#" className="text-dark">Read More</a>
            </p>
          </div>

          {/* Additional Top Reviews */}
          <div className="mb-4 pb-3 border-bottom">
            <div className="d-flex align-items-center mb-2">
              <i className="bi bi-person-circle mr-2"></i>
              <strong>Name Surname</strong>
              <div className="ml-auto">
                <span className="text-warning">★★★★★</span>
              </div>
            </div>
            <p className="text-muted small">5 September 2018</p>
            <p>
              Porta corporis nibh. Adipisci maiores dui torquent porttitor nisi...
              <a href="#" className="text-dark">Read More</a>
            </p>
          </div>
        </div>
      </div>
    </div>

    <div className="container mt-5">
      <h4 className="mb-4">Related Products</h4>

      {/* Carousel */}
      <div id="relatedProductsCarousel" className="carousel slide" data-bs-ride="carousel">
        <div className="carousel-inner">
          {/* Carousel Item 1 */}
          <div className="carousel-item active">
            <div className="row">
              {/* Product Card 1 */}
              <div className="col-lg-3 col-md-4 col-sm-6 mb-4">
                <div className="card h-100">
                  <img src="/image/pr-bg-04.png" className="card-img-top" alt="Product" />
                  <div className="card-body">
                    <span className="badge bg-dark mb-2">Category</span>
                    <h6 className="card-title">Product Title Goes Here</h6>
                    <p className="card-text text-muted small">Brand</p>
                    <div className="d-flex justify-content-between align-items-center">
                      <span className="text-muted small"><del>AED 32.00</del></span>
                      <span className="text-dark">AED 25.60</span>
                      <span className="badge bg-light text-dark">30% Off</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Product Card 2 */}
              <div className="col-lg-3 col-md-4 col-sm-6 mb-4">
                <div className="card h-100">
                  <img src="/image/pr-bg-05.png" className="card-img-top" alt="Product" />
                  <div className="card-body">
                    <span className="badge bg-dark mb-2">Skin Care</span>
                    <h6 className="card-title">Product Title Goes Here</h6>
                    <p className="card-text text-muted small">Brand</p>
                    <div className="d-flex justify-content-between align-items-center">
                      <span className="text-muted small"><del>AED 32.00</del></span>
                      <span className="text-dark">AED 25.60</span>
                      <span className="badge bg-light text-dark">30% Off</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Product Card 3 */}
              <div className="col-lg-3 col-md-4 col-sm-6 mb-4">
                <div className="card h-100">
                  <img src="/image/pr-bg-06.png" className="card-img-top" alt="Product" />
                  <div className="card-body">
                    <span className="badge bg-dark mb-2">Skin Care</span>
                    <h6 className="card-title">Product Title Goes Here</h6>
                    <p className="card-text text-muted small">Brand</p>
                    <div className="d-flex justify-content-between align-items-center">
                      <span className="text-muted small"><del>AED 32.00</del></span>
                      <span className="text-dark">AED 25.60</span>
                      <span className="badge bg-light text-dark">30% Off</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Product Card 4 */}
              <div className="col-lg-3 col-md-4 col-sm-6 mb-4">
                <div className="card h-100">
                  <img src="/image/pr-bg-07.png" className="card-img-top" alt="Product" />
                  <div className="card-body">
                    <span className="badge bg-dark mb-2">Skin Care</span>
                    <h6 className="card-title">Product Title Goes Here</h6>
                    <p className="card-text text-muted small">Brand</p>
                    <div className="d-flex justify-content-between align-items-center">
                      <span className="text-muted small"><del>AED 32.00</del></span>
                      <span className="text-dark">AED 25.60</span>
                      <span className="badge bg-light text-dark">30% Off</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* You can add more carousel items here if needed */}
        </div>

        {/* Carousel Controls */}
        <button className="carousel-control-prev" type="button" data-bs-target="#relatedProductsCarousel" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#relatedProductsCarousel" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </div>

    </>
  );
}