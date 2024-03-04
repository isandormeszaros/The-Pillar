import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import http from "../../http-common";
import { ToastContainer, toast } from 'react-toastify';

function Login({ islogged, setIslogged }) {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [password, setPassword] = useState("");
  console.log(islogged);

  const handleLogin = () => {
    http.post("/auth/login", { email, password })
      .then((response) => {
        if (response.status === 200) {
          const token = response.data.token;
          localStorage.setItem("token", token);

          setIslogged(true); // Beállítjuk, hogy be van-e jelentkezve
          sessionStorage.setItem("islogged", islogged);

          setError("");
        } else {
          toast.error("Hibás bejelentkezés");
          return
        }
      })
      .catch((error) => {
        toast.error("Hibás felhasználónév vagy jelszó.");
        return
        console.log(error);
      });
  };

  return (
    <div className="login pt-5 mt-5">
      <div className="login-container">
        <h1>Jelentkez be!</h1>
        <div className="login-box">
          <label>
            Email cím
            <input
              className="form-control form-control-lg email-form-control"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </label>
        </div>
        <br />
        <div className="login-box">
          <label>
            Jelszó
            <input
              className="login-input"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </label>
        </div>
        <br />
        <button onClick={handleLogin} className="default-button">
          Belépés
        </button>
        <p>Don't have and account <NavLink to="/registration" className="text-decoration-none ">Regisztráció</NavLink> </p>
        {error && <p>{error}</p>}
      </div>
    </div>
  );
}

export default Login;
