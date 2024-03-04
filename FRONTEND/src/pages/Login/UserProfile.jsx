import React, { useState, useEffect } from "react";
import http from "../../http-common";
import { Link, useNavigate } from "react-router-dom";
import { jwtDecode } from "jwt-decode";

export default function UserProfile({ islogged, setIslogged }) {
  // const [islogged, setIslogged] = useState(false);
  const [response, setResponse] = useState({});
  const [msg, setMsg] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      const decodedToken = jwtDecode(token);
      const currentTime = Date.now() / 1000;
      if (decodedToken.exp < currentTime) {
        handleLogout();
      } else {
        http
          .get("/auth/userprofile", {
            headers: { "x-access-token": token },
          })
          .then((response) => {
            setIslogged(true);
            setResponse(response);
            setMsg("Azonosítás OK");
            console.log(response);
          })
          .catch((error) => {
            setResponse(error);
            if (error.response) {
              setMsg(
                "Hiba: " +
                error.response.status +
                "" +
                error.response.data.message
              );
            } else {
              setMsg(error.message);
              console.log("Error", error);
            }
          });
      }
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("token");
    setIslogged(false);
    sessionStorage.removeItem("islogged");
    setMsg("Kijelenetketzve");
    navigate("/login");
  };

  return (
    <div>
      <h1>Felhasználói profil</h1>
      {!islogged ? (
        <>
          <h2>Nincs bejelentkezve</h2>
          <p>{JSON.stringify(response.data)}</p>
          <Link to="/login">
            <a className="default-button">Tovább a bejelentkezéshez</a>
          </Link>
        </>
      ) : (
        <div className="profil">
          <h2>A felhasználó adatai</h2>
          {Array.isArray(response.data) ? (
            response.data.map((user) => (
              <div>
                <table className="profil-table">
                  <tr>
                    <td>Név:</td>
                    <td>{user.name}</td>
                  </tr>
                  <tr>
                    <td>E-mail:</td>
                    <td>{user.userEmail}</td>
                  </tr>
                  <tr>
                    <td>Telefonszám:</td>
                    <td>{user.userPhone}</td>
                  </tr>
                  <tr>
                    <td>Verifikált:</td>
                    <td>
                      {user.userVerification === 0
                        ? <i className="pi pi-check-square"></i> : <i className="pi pi-times"></i>}
                    </td>
                  </tr>
                  <tr>
                    <td>Cím</td>
                    <td>{user.userAddress}</td>
                  </tr>
                  <tr>
                    <td>Hírlevél feliratkozás:</td>
                    <td>
                      {user.newsletter === 0
                        ? <i className="pi pi-check-square"></i> : <i className="pi pi-times"></i>}
                    </td>
                  </tr>
                </table>
              </div>
            ))
          ) : (
            <></>
          )}
          <button onClick={handleLogout} className="logOut default-button">
            kijelentkezés
          </button>
        </div>
      )}
    </div>
  );
}
