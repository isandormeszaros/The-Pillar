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
  const [userUpdate, setUserUpdate] = useState({
    name: "",
    userEmail: "",
    userPhone: "",
    userAddress: ""
  })
  const [msg, setMsg] = useState("");
  const navigate = useNavigate();
  const images = "http://localhost:8080/images/user/";

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      const decodedToken = jwtDecode(token);
      const currentTime = Date.now() / 1000;
      if (decodedToken.exp < currentTime) {
        toast.error("Lejárt token, jelentkezzen be újra!")
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

  const handleUserUpdate = () => {
    const token = localStorage.getItem("token");
    if (token) {
      const userId = response.data[0].id;
      http.patch(`/auth/patch/${userId}`, userUpdate, {
        headers: { "x-access-token": token },
      })
        .then((response) => {
          if (response.status === 200) {
            toast.success("Felhasználói adatok sikeresen frissítve");
            // Válasz alapján lehet esetleg további műveleteket végezni, például frissíteni a felhasználói adatokat a frontend oldalon
          } else {
            toast.error("Hiba történt az adatok frissítése során");
          }
        })
        .catch((error) => {
          if (error.response) {
            toast.error(error.response.data.message);
          } else {
            toast.error("Hiba a szerverrel való kommunikáció során");
          }
        });
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUserUpdate(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleModifyClick = () => {
    handleUserUpdate();
  };

  const handleInputBlur = (e) => {
    const { name, value } = e.target;
    setUserUpdate(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleLogout = () => {
    localStorage.removeItem("token");
    setIslogged(false);
    sessionStorage.removeItem("islogged");
    setMsg("Kijelenetketzve");
    navigate("/login");
  };

  const handleDeleteConfirmation = (id) => {
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


          {Array.isArray(response.data) ? (
            response.data.map((user) => (
              <div key={user.id}>

                <nav className="nav justify-content-center p-2">
                  <a className="nav-link active" aria-current="page" href="#">Profil</a>
                  <a className="nav-link" href="#">Megrendeléseim</a>
                  <a className="nav-link" href="#">Kedvenceim</a>
                  <a onClick={() => handleDeleteConfirmation(user.id)} className="delete-btn nav-link">Fiók törlése </a>
                </nav>


                <div className="container px-5">
                  <div className="row justify-content-center text-start">
                    <div className="col-lg-4 p-0 text-start custom-p-font">
                      <div className="p-2 custom-border">
                        <p className="m-0">Teljes név</p>
                        <input className="border border-white placeholder-info" type="text" placeholder={user.name} value={userUpdate.name} onChange={handleInputChange} onBlur={handleInputBlur} name="name" id="name" />
                      </div>
                      <div className="p-2 custom-border">
                        <p className="m-0">Email cím</p>
                        <input className="border border-white placeholder-info" type="email" placeholder={user.userEmail} value={userUpdate.userEmail} onChange={handleInputChange} onBlur={handleInputBlur} name="userEmail" id="email" />
                      </div>
                      <div className="p-2 custom-border">
                        <p className="m-0">Telefonszám</p>
                        <input className="border border-white placeholder-info" type="tel" placeholder={user.userPhone} value={userUpdate.userPhone} onChange={handleInputChange} onBlur={handleInputBlur} name="userPhone" id="phone" />
                      </div>

                    </div>
                    <div className="col-lg-4 p-0 custom-p-font">
                      <div className="p-2 custom-border">
                        <p className="m-0">Cím</p>
                        <input
                          className="border border-white placeholder-error"
                          type="text"
                          value={userUpdate.userAddress} onChange={handleInputChange} onBlur={handleInputBlur}
                          name="userAddress"
                          id="address"
                          placeholder={!userUpdate.userAddress ? "Kérem adja meg a szállítási címet " : userUpdate.userAddress}
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
                  <div className="row gx-5 m-a pt-3 pb-5 justify-content-center">
                    <div className="col-lg-4 col-md-12 d-flex p-2 justify-content-center justify-content-lg-start">
                      <button onClick={handleModifyClick} className="logOut default-button modify-button setting-default-button w-100 w-lg-65"><i className="pi pi-user-edit"></i>Módosítás</button>


                    </div>
                    <div className="col-lg-4 col-md-12 d-flex p-2 justify-content-center justify-content-lg-end">
                      <button onClick={handleLogout} id="log-out" className="default-button setting-default-button w-100 w-lg-65">Kijelentkezés<i className="pi pi-sign-out"></i></button>
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
                          id="cancelBtn" w
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
