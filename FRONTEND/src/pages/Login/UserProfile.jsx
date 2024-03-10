import React, { useState, useEffect } from "react";
import http from "../../http-common";
import { Link, useNavigate } from "react-router-dom";
import { jwtDecode } from "jwt-decode";
import { toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css'
import "./UserProfile.css"

function UserProfile({ islogged, setIslogged }) {
  const [response, setResponse] = useState({});
  const [openModal, setOpenModal] = useState(false);
  const [userIdToDelete, setUserIdToDelete] = useState(null); // Store the id of the user to delete
  const [msg, setMsg] = useState("");
  const navigate = useNavigate();
  const images = "http://localhost:8080/images/user/";

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

  const handleDeleteConfirmation = (id) => {
    // Set the userIdToDelete and open the modal
    setUserIdToDelete(id);
    setOpenModal(true);
  }


  const handleDelete = (id) => {
    http.delete(`/auth/delete/${id}`)
      .then((response) => {
        if (response.status === 200) {
          localStorage.removeItem("token");
          setIslogged(false);
          sessionStorage.removeItem("islogged");
          toast.success("Sikeres törlés");
          navigate("/home");
        } else {
          toast.error("Hiba történt a törlés során");
        }
      })
      .catch((error) => {
        if (error.response) {
          toast.error(error.response.data.message);
        } else {
          toast.error("Hiba a szerverrel való kommunikáció során");
        }
      })
  };

  return (
    <div>
      <section id="header" className="text-center pb-1">
        <div className="image-container">
          <img
            className="card-img-top"
            src={images + "user.jpeg"}
            alt="Card image cap"
            style={{ objectFit: "cover", height: "375px" }}
          />
        </div>
      </section>
      <h1 className="custom-heading-font user-profile-header text-white">Felhasználói profil</h1>
      {!islogged ? (
        <div>
          <h2>Nincs bejelentkezve</h2>
          <p>{JSON.stringify(response.data)}</p>
          <Link to="/login">
            <a className="default-button">Tovább a bejelentkezéshez</a>
          </Link>
        </div>
      ) : (
        <div className="profile p-0">
          <nav className="nav justify-content-center">
            <a className="nav-link active" aria-current="page" href="#">Profil</a>
            <a className="nav-link" href="#">Megrendeléseim</a>
            <a className="nav-link" href="#">Kedvenceim</a>
          </nav>

          {Array.isArray(response.data) ? (
            response.data.map((user) => (
              <div key={user.id}>
                <div className="container px-5">
                  <div className="row justify-content-center text-start">
                    <div className="col-lg-4 p-0 text-start custom-p-font">
                      <div className="p-2 custom-border">
                        <p className="m-0">Teljes név</p>
                        <input className="border border-white" type="text" value={user.name} name="name" id="email" />
                      </div>
                      <div className="p-2 custom-border">
                        <p className="m-0">Email cím</p>
                        <input className="border border-white" type="email" value={user.userEmail} name="email" id="email" />
                      </div>
                      <div className="p-2 custom-border">
                        <p className="m-0">Telefonszám</p>
                        <input className="border border-white" type="tel" value={user.userPhone} name="phone" id="phone" />
                      </div>

                    </div>
                    <div className="col-lg-4 p-0 custom-p-font">
                      <div className="p-2 custom-border">
                        <p className="m-0">Cím</p>
                        <input
                          className="border border-white placeholder"
                          type="text"
                          value={user.userAddress}
                          name="name"
                          id="email"
                          placeholder="Kérem töltse ki a mezőt!"
                        />
                      </div>
                      <div className="p-2 custom-border">
                        <p className="m-0">Fiók megerősítés</p>
                        <div> {user.userVerification === 0 ? (
                          <input placeholder="Megerősítve" className="border border-white" disabled />
                        ) : (
                          <input placeholder="Nincs megerősítve" className="border border-white" disabled />
                        )}</div>
                      </div>
                      <div className="p-2 custom-border">
                        <p className="m-0">Hírlevél feliratkozás</p>
                        {user.newsletter === 0 ? (
                          <i className="Feliratkozva"></i>
                        ) : (
                          <input placeholder="Nincs feliratkozva" className="border border-white" disabled />
                        )}
                      </div>
                    </div>
                  </div>
                  <div className="row">
                  
                  <div className="profile-buttons-gap pt-5">
                      <button onClick={() => handleDeleteConfirmation(user.id)} className="delete-btn default-button">Törlés</button>
                      <button onClick={handleLogout} className="logOut default-button">Kijelentkezés</button>
                    </div>
                  </div>
                </div>




                {openModal && userIdToDelete === user.id && (
                  <div className="modal-background">
                    <div className="modal-container">
                      <div className="modal-close-btn">
                        <button onClick={() => setOpenModal(false)}><i className="pi pi-times"></i></button>
                      </div>
                      <div className="modal-title">
                        <h1 className="custom-heading-font">Biztos benne, hogy törölni szeretné a fiókját?</h1>
                      </div>
                      <div className="modal-body">
                        <p className="custom-p-font">A művelet nem visszafordítható.</p>
                      </div>
                      <div className="modal-footer">
                        <button className="default-button profile-icon-button"
                          onClick={() => {
                            setOpenModal(false);
                          }}
                          id="cancelBtn"
                        >
                          <i className="pi pi-arrow-left"></i>Mégse
                        </button>
                        <button className="default-button default-delete-button profile-icon-button" onClick={() => handleDelete(user.id)}><i className="pi pi-trash"></i>Törlés</button>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            ))
          ) : (
            <></>
          )}
        </div>
      )}
    </div>
  );
};

export default UserProfile;
