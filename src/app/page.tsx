'use client'
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Link from 'next/link';
import Ambassador from '@/components/component/ambassador';
import TopSeller from '@/components/component/topSeller';
import BotSeller from '@/components/component/botseller';
interface Product {
  id: number; // Thêm thuộc tính id
  product_title: string;
  product_gallery: string[];
}
export default function Home() {
  const [products, setProducts] = useState<Product[]>([]);
  useEffect(() => {
    axios.get('https://api-pro.teklearner.com/product/v1/get-list-product')
      .then(response => {
        setProducts(response.data.data);
      })
      .catch(error => {
        console.error('Error fetching products:', error);
      });
  }, []);
  return (

    <>
      <section style={{ backgroundColor: "rgba(3, 6, 5, 1)" }} className="mymainmenu ">
        <div className="container">
          <div className="row">
            <div className="col-md-3 text-white py-3">Danh Mục sản Phẩm</div>
            <div className="col-md-9">
              <nav style={{ backgroundColor: "rgba(3, 6, 5, 1)" }} className="navbar navbar-expand-lg ">
                <div className="container-fluid">
                  <a className="navbar-brand d-none" href="#">Navbar</a>
                  <button className="navbar-toggler bg-white" type="button" data-bs-toggle="collapse"
                    data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                    aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                  </button>
                  <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                      <li className="nav-item">
                        <a className="nav-link active text-white" aria-current="page" href="#">Trang Chủ</a>
                      </li>
                      <li className="nav-item dropdown">
                      <Link  className="nav-link dropdown-toggle text-white" href="/profile " role="button"
                          data-bs-toggle="dropdown" aria-expanded="false">
                         Liên Hệ
                       </Link>
                        <ul className="dropdown-menu">
                          <li><a className="dropdown-item" href="#">Action</a></li>
                          <li><a className="dropdown-item" href="#">Another action</a></li>
                          <li>
                            <hr className="dropdown-divider" />
                          </li>
                          <li><a className="dropdown-item" href="#">Something else here</a></li>
                        </ul>
                      </li>
                      <li className="nav-item dropdown">
                       <Link  className="nav-link dropdown-toggle text-white" href="/products" role="button"
                          data-bs-toggle="dropdown" aria-expanded="false">
                          Sản Phẩm
                       </Link>
                        <ul className="dropdown-menu">
                          <li><a className="dropdown-item" href="#">Action</a></li>
                          <li><a className="dropdown-item" href="#">Another action</a></li>
                          <li>
                            <hr className="dropdown-divider" />
                          </li>
                          <li><a className="dropdown-item" href="#">Something else here</a></li>
                        </ul>
                      </li>
                      <li className="nav-item dropdown">
                      <Link  className="nav-link dropdown-toggle text-white" href="/cart" role="button"
                          data-bs-toggle="dropdown" aria-expanded="false">
                         Cart
                       </Link>
                        <ul className="dropdown-menu">
                          <li><a className="dropdown-item" href="#">Action</a></li>
                          <li><a className="dropdown-item" href="#">Another action</a></li>
                          <li>
                            <hr className="dropdown-divider" />
                          </li>
                          <li><a className="dropdown-item" href="#">Something else here</a></li>
                        </ul>
                      </li>
                      <li className="nav-item dropdown">
                      <Link  className="nav-link dropdown-toggle text-white" href="/check_out" role="button"
                          data-bs-toggle="dropdown" aria-expanded="false">
                          Check Out
                       </Link>
                        <ul className="dropdown-menu">
                          <li><a className="dropdown-item" href="#">Action</a></li>
                          <li><a className="dropdown-item" href="#">Another action</a></li>
                          <li>
                            <hr className="dropdown-divider" />
                          </li>
                          <li><a className="dropdown-item" href="#">Something else here</a></li>
                        </ul>
                      </li>

                    </ul>
                  </div>
                </div>
              </nav>
            </div>
          </div>
        </div>
      </section>

      {/*start carousel*/}
      <div id="carouselExample" className="carousel slide ">
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img src="/image/banner-01.png" className="d-block w-100" alt="..."/>
    </div>
    <div className="carousel-item">
      <img src="/image/banner-02.png" className="d-block w-100" alt="..."/>
    </div>
    <div className="carousel-item">
      <img src="/image/banner-03.png" className="d-block w-100" alt="..."/>
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>
      {/*end carousel*/}

      {/* New Arrivals Section */}
      <section className="products">
        <div className="container py-3">
          <h2><strong>NEW ARRIVALS</strong></h2>
          <div className="row py-4">
            {/* First Column */}
            {products.length > 0 && (
              <div className="col-md-6 text-center">
                {products[0].product_gallery.length > 0 ? (
                  <img
                    src={products[0].product_gallery[0]}
                    alt={products[0].product_title}
                    className="img-fluid mb-3 w-50"
                  />
                ) : (
                  <p>No image available</p>
                )}
                <div className="d-flex justify-content-center py-3">
                  <button style={{ borderRadius: "1px" }} type="button" className="btn btn-outline-dark w-25 p-3">
                    Buy now
                  </button>
                </div>
              </div>
            )}
            {/* Second Column with Products */}
            <div className="col-md-6">
              <div className="row">
                {products.slice(0, 2).map((product, index) => (
                  <div key={index} className="col-6">
                    <img
                      className="w-100"
                      src={product.product_gallery[0] || '/image/default.jpg'}
                      alt={product.product_title}
                    />
                    <strong ><Link style={{textDecoration:'none', color:"black"}} href={`/detail/${product.id}`}>
                      {product.product_title}
                    </Link>
                    </strong>
                    <br />
                    <p>BRAND</p>
                    <div className="row">
                      <div className="col-md-4">
                        <p>AED 32.00</p>
                      </div>
                      <div className="col-md-4">
                        <p>AED 25.60</p>
                      </div>
                      <div className="col-md-4">
                        <button type="button" className="btn btn-outline-dark w-100 h-75">
                          <p>30% OFF</p>
                        </button>
                      </div>
                    </div>

                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>


      <section className="topsaleler ">
       <TopSeller></TopSeller>
      </section>
      <section className="botsaleler">
        <BotSeller></BotSeller>
      </section>

      <section className="ambassador">
        <Ambassador></Ambassador>
      </section>

   {/*start tailwind*/}
   
   {/*end tailwind*/}


    </>



  );
}