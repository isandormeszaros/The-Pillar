import React, { useState } from "react";
import http from "../../http-common";
import { toast } from 'react-toastify';
import WatchesServices from '../../services/WatchesServices';
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';
import './Registration.css';
import { Link, useNavigate } from "react-router-dom";


const Registration = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [showPass, setShowPass] = useState(false);
  const [showConfirmPass, setShowConfirmPass] = useState(false);
  const navigate = useNavigate();
  const images = "http://localhost:8080/images/register/";

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}/;

  const handleRegistration = (event) => {
    event.preventDefault();

    if (name === "" || email === "" || password === "" || confirmPassword === "" || phoneNumber === "") {
      toast.error("Kérem adja meg az összes adatot!");
      return;
    }

    if (password !== confirmPassword) {
      toast.error("A jelszó nem egyezik, kérem próbálja meg újra!");
      return;
    }

    if (!emailRegex.test(email)) {
      toast.error("Hibás email cím formátum.");
      return;
    }

    WatchesServices.getEmail()
    .then((response) => {
      const validEmails = response.data;
      const atIndex = email.indexOf('@');
      const inputDomain = email.slice(atIndex + 1);
      console.log(inputDomain);
  
      let isValid = false;
  
      validEmails.forEach(entry => {
        if (entry.email.includes(inputDomain)) {
          isValid = true;
        }
      });
  
      if (!isValid) {
        toast.error("A megadott email cím nem engedélyezett!");
        toast.info("Céges email cím esetén vegye fel velünk a kapcsolatot!");
        return;
      }



        if (!passwordRegex.test(password)) {
          toast.error("A jelszónak minimum 8 karakternek kell lennie, kis- és nagybetűket, számot és speciális karaktert kell tartalmaznia.");
          return;
        }

        const slicedPhoneNumber = phoneNumber.slice(2);

        http.post("/auth/register", { name, email, password, phone: slicedPhoneNumber })
          .then((response) => {
            if (response.status === 200) {
              toast.success("Sikeres regisztráció! " + name);
              navigate("/login");
              toast.success("Kérjük jelentkezzen be!");
            } else {
              toast.error("Hiba a regisztráció során: Nem sikerült feldolgozni a választ.");
            }
          })
          .catch((error) => {
            if (error.response.status === 409) {
              toast.error("Ezzel az email címmel már hoztak létre fiókot. Kérem jelentkezzen be.");
            } else {
              console.error(error);
              toast.error("Hiba a regisztráció során: " + error.message);
            }
          });
      })
      .catch((error) => {
        console.error(error);
        toast.error("Sajnáljuk, hiba történt a regisztráció során: " + error.message);
      });
  };

  console.log(phoneNumber.slice(2))

  return (
    <section className="registration-section">
      <div className="container-fluid">
        <div className="row">
          <div className="col-lg-6 px-0 d-none d-lg-block bg-image-vertical">
            <img
              src={images + "registration.jpg"}
              alt="Login"
              className="w-100 vh-100"
              style={{ objectFit: "cover", objectPosition: "left" }}
            />
            <div className="image-shadow"></div>
          </div>
          <div className="col-lg-6 text-black d-flex align-items-center justify-content-center">
            <div className="d-flex align-items-center h-custom-2">
              <form style={{ width: "20rem" }}>
                <h3 className="mb-3 pb-3 custom-heading-font">Regisztráció</h3>
                <div className="form-outline mb-2">
                  <p className="custom-p-font text-start small mb-0">
                    Teljes név*
                  </p>

                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="form-control form-control-lg name-form-control"
                    required
                  />
                </div>

                <div className="form-outline mb-2">
                  <p className="custom-p-font text-start small mb-0">
                    Email cím*
                  </p>

                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="form-control form-control-lg email-form-control"
                    required
                  />
                </div>


                <div className="form-outline mb-2 position-relative">
                  <p className="coustom-p-font text-muted text-start small mb-0">Jelszó*</p>
                  <input
                    className="form-control form-control-lg password-form-control"
                    type={!showPass ? "password" : "text"}
                    id="password"
                    name="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    onCopy={(e) => {
                      e.preventDefault();
                      return false;
                    }} onPaste={(e) => {
                      e.preventDefault();
                      return false;
                    }}
                    required
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

                <div className="form-outline mb-2 position-relative">
                  <p className="coustom-p-font text-muted text-start small mb-0">Jelszó megerősítése*</p>
                  <input
                    className="form-control form-control-lg confirm-password-form-control"
                    type={!showConfirmPass ? "password" : "text"}
                    id="confirm-password"
                    name="confirm-password"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    onCopy={(e) => {
                      e.preventDefault();
                      return false;
                    }} onPaste={(e) => {
                      e.preventDefault();
                      return false;
                    }}
                    required
                  />
                  {!showConfirmPass ? (
                    <i
                      className="pi pi-eye pointer position-absolute"
                      style={{ right: "15px", top: "58%", fontSize: "1rem" }}
                      onClick={() => setShowConfirmPass(true)}
                    ></i>
                  ) : (
                    <i
                      className="pi pi-eye-slash pointer position-absolute"
                      style={{ right: "15px", top: "58%", fontSize: "1rem" }}
                      onClick={() => setShowConfirmPass(false)}
                    ></i>
                  )}
                </div>

                <div className="form-outline mb-4 position-relative">
                  <p className="coustom-p-font text-muted text-start small mb-0">Telefonszám*</p>
                  <PhoneInput
                    className="form-control form-control-lg phone-password-form-control input-phone-number"
                    country={'hu'}
                    value={phoneNumber}
                    onChange={(value) => setPhoneNumber(value)}
                    keyboardType="phone-pad"
                    require
                    rules={{
                      required: "Phone is required",
                    }}
                    inputStyle={{
                      border: "none",
                      color: "#4b4b4b",
                    }}
                    placeholder="Telefonszám"
                  />
                </div>

                <div className="row pt-1 mb-4">
                  <div className="col">
                    <a className="d-flex default-button" onClick={handleRegistration}>
                      Regisztráció
                    </a>
                  </div>
                </div>

                <p className="custom-p-font">
                  Már van fiókja?{" "}
                  <Link
                    to="/login"
                    className="text-decoration-none register-info"
                  >
                    Bejelentkezés
                  </Link>
                </p>


              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Registration;
