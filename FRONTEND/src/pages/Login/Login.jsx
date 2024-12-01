import React, { useState } from "react";
import "./Login.css";
import { Link } from "react-router-dom";
import http from "../../http-common";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Login({ islogged, setIslogged }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPass, setShowPass] = useState(false);
  const images = "http://localhost:8080/images/login/"

  const handleLogin = () => {
    if (!email || !password) {
      toast.error("Kérjük, töltse ki mindkét mezőt!");
      return;
    }

    http.post("/auth/login", { email, password })
      .then((response) => {
        if (response.status === 200) {
          const token = response.data.token;
          localStorage.setItem("token", token);

          setIslogged(true);
          sessionStorage.setItem("islogged", islogged);
          toast.success("Sikeres bejelentkezés");
        } else {
          toast.error("Hibás adat");
        }
      })
      .catch((error) => {
        if (error.response) {
          // toast.error(error.response.data.message);
          toast.error("Hibás bejelentkezési adatok");
        } else {
          toast.error("Hiba a szerverrel való kommunikáció során");
        }
      });
  };

  return (
    <section className="login-section">
      <div className="container-fluid">
        <div className="row">
          <div className="col-lg-6 text-black d-flex align-items-center justify-content-center">
            <div className="d-flex align-items-center h-custom-2 ">

              <form style={{ width: "20rem" }} onKeyDown={(e) => e.keyCode === 13 && handleLogin()}>
                <h3 className="mb-3 pb-3 custom-heading-font">Bejelentkezés</h3>
                <div className="form-outline mb-2">
                  <p className="custom-p-font text-start small mb-0">
                    Email cím*
                  </p>
                  <input
                    className="form-control form-control-lg email-form-control"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>

                <div className="form-outline mb-4 position-relative">
                  <p className="custom-p-font text-start small mb-0">Jelszó*</p>
                  <input
                    className="form-control form-control-lg password-form-control"
                    type={!showPass ? "password" : "text"}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                  {!showPass ? (
                    <i
                      className="pi pi-eye pointer position-absolute"
                      style={{ right: "15px", top: "58%", fontSize: "1rem" }}
                      onClick={() => setShowPass(true)}
                    ></i>
                  ) : (
                    <i
                      className="pi pi-eye-slash pointer position-absolute"
                      style={{ right: "15px", top: "58%", fontSize: "1rem" }}
                      onClick={() => setShowPass(false)}
                    ></i>
                  )}
                </div>

                <div className="row pt-1 mb-4">
                  <div className="col">
                    <a onClick={handleLogin} className="d-flex default-button">
                      Belépés
                    </a>
                  </div>
                </div>

                <p className="small mb-5 pb-lg-2">
                  <Link
                    to="/forgetpassword"
                    className="text-decoration-none custom-p-font"
                  >
                    Elfelejtett jelszó?
                  </Link>
                </p>
                <p className="custom-p-font">
                  Még nincs fiókja?{" "}
                  <Link
                    to="/registration"
                    className="text-decoration-none register-info"
                  >
                    Regisztráció
                  </Link>
                </p>
              </form>
            </div>
          </div>

          <div className="col-lg-6 px-0 d-none d-lg-block bg-image-vertical">
            <img
              src={images + "login.jpg"}
              alt="Login"
              className="w-100 vh-100"
              style={{ objectFit: "cover", objectPosition: "left" }}
            />
            <div className="image-shadow"></div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Login;
