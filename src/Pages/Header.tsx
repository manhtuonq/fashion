"use client";
import Link from "next/link";
import { SlBasket, SlCallIn, SlHeart, SlPresent, SlUser } from "react-icons/sl";
import { useState } from "react";
import axios from "axios";
import { useRouter } from "next/navigation";

export default function Header() {
  const [showLoginForm, setShowLoginForm] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const router = useRouter();

  const handleLogin = async () => {
    // Reset error before login attempt
    setError("");

    // Validate input
    if (!username) {
      setError("Hãy nhập email");
      return;
    }

    if (!password) {
      setError("Hãy nhập mật khẩu");
      return;
    }

    try {
      // API request for login
      await axios.post("https://api-pro.teklearner.com/auth/v1/login", { username, password });
      alert("Đăng nhập thành công!");
      setShowLoginForm(false);
      router.push("/");
    } catch (error: any) {
      // Handle login error
      if (error.response && error.response.status === 401) {
        setError("Tài khoản sai hoặc mật khẩu không đúng");
      } else {
        setError("Có lỗi xảy ra, vui lòng thử lại sau");
      }
      console.error("Error logging in:", error);
    }
  };

  return (
    <>
      {/* Start Header */}
      <section className="myheader">
        <div className="container py-3">
          <div className="row">
            <div className="col-md-3">
              <Link href={"/"}>
                <img src="/image/logo2.webp" className="img-fluid w-75" alt="" />
              </Link>
            </div>
            <div className="col-md-4">
              <div className="input-group">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Tìm Kiếm"
                  aria-label="Recipient's username"
                  aria-describedby="basic-addon2"
                />
                <span className="input-group-text" id="basic-addon2">
                  {/* <SlMagnifier /> */}
                </span>
              </div>
            </div>
            <div className="col-md-3">
              <div className="row">
                <div className="col">
                  <div className="row">
                    <div className="col-3">
                      <div style={{ color: "rgba(3, 6, 5, 1)" }} className="fs-2 ">
                        <SlCallIn />
                      </div>
                    </div>
                    <div className="col-9">
                      Tư vấn hỗ trợ <br />
                      <strong style={{ color: "rgba(3, 6, 5, 1)" }}>23095820935</strong>
                    </div>
                  </div>
                </div>
                <div className="col">
                  <div className="row">
                    <div className="col-3">
                      <div
                        style={{ color: "rgba(3, 6, 5, 1)" }}
                        onClick={() => setShowLoginForm(!showLoginForm)}
                        className="user-icon"
                      >
                        <SlUser className="fs-2" />
                      </div>
                    </div>
                    <div className="col-9">
                      Xin Chào <br />
                      <strong style={{ color: "rgba(3, 6, 5, 1)" }}>Đăng Nhập</strong>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-2">
              <div className="row">
                <div className="col">
                  <a href="/#" className="position-relative">
                    <span style={{ color: "rgba(3, 6, 5, 1)" }} className="fs-2 ">
                      <SlHeart />
                    </span>
                    <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                      0
                      <span className="visually-hidden">unread messages</span>
                    </span>
                  </a>
                </div>
                <div className="col">
                  <a href="/#" className="position-relative">
                    <span style={{ color: "rgba(3, 6, 5, 1)" }} className="fs-2 ">
                      <SlPresent />
                    </span>
                    <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                      0
                      <span className="visually-hidden">unread messages</span>
                    </span>
                  </a>
                </div>
                <div className="col">
                  <a href="/#" className="position-relative">
                    <span style={{ color: "rgba(3, 6, 5, 1)" }} className="fs-2 ">
                      <SlBasket />
                    </span>
                    <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                      0
                      <span className="visually-hidden">unread messages</span>
                    </span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* End Header */}

      {/* Login Form Overlay */}
      {showLoginForm && (
        <div className="login-form-overlay" onClick={() => setShowLoginForm(false)}>
          <div className="login-form-container" onClick={(e) => e.stopPropagation()}>
            <h3 className="form-title">Đăng Nhập</h3>
            {error && <p style={{ color: "red", textAlign: "center" }}>{error}</p>}
            <form>
              <label className="form-label">Tên đăng nhập</label>
              <input
                type="text"
                className="form-control"
                placeholder="Nhập Tên Đăng Nhập"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />

              <label className="form-label">Mật khẩu</label>
              <input
                type="password"
                className="form-control"
                placeholder="Nhập Mật Khẩu"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />

             
             <div className="form-links gap-4 p-2 flex justify-between items-center ">
                <button
                type="button"
                className="btn btn-dark btn-block  "
                onClick={handleLogin}
              >
                Đăng nhập
              </button>

              <a className="" href="#" style={{ color: "black" }}>Quên mật khẩu?</a>
              </div>

            
           

              <div className="or-divider">HOẶC</div>

             <div className=" flex">
             <button className="btn btn-outline-dark btn-block w-100">
                <span className="icon">? Đăng nhập bằng Facebook</span>
              </button>
              <button className="btn btn-outline-dark btn-block w-100">
                <span className="icon">?</span> Đăng nhập bằng Google +
              </button>
             </div>

              <div className="form-footer">
                Thành viên mới? <a href="#" style={{ color: "black" }}><Link href={"/register"}>Đăng ký ngay</Link></a>
              </div>
            </form>
          </div>
        </div>
      )}

      <style jsx>{`
        .user-icon {
          cursor: pointer;
          color: rgba(3, 6, 5, 1);
        }
        .login-form-overlay {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background-color: rgba(0, 0, 0, 0.5);
          display: flex;
          justify-content: center;
          align-items: center;
          z-index: 999;
        }
        .login-form-container {
          background-color: #fff;
          padding: 20px;
          border-radius: 8px;
          width: 350px;
          box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
        }
        .form-title {
          text-align: center;
          margin-bottom: 20px;
          font-weight: bold;
          font-size: 1.5rem;
        }
        .form-links {
          display: flex;
          justify-content: flex-end;
        }
        .or-divider {
          text-align: center;
          margin: 20px 0;
          color: #999;
        }
        .form-footer {
          text-align: center;
          margin-top: 20px;
        }
      `}</style>
    </>
  );
}
