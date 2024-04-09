import React, { useState, useEffect } from "react";
import http from "../../http-common";
import { Link, useNavigate } from "react-router-dom";
import { jwtDecode } from "jwt-decode";
import { toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css'
import WatchesServices from "../../services/WatchesServices";
import "./UserProfile.css"
import CustomModal from "./CustomModal";

function UserProfile({ islogged, setIslogged }) {
  const [response, setResponse] = useState({});
  const [userIdToDelete, setUserIdToDelete] = useState(null);
  const [msg, setMsg] = useState("");
  const navigate = useNavigate();
  const [data, setData] = useState([]);
  const [favourite, setFavourite] = useState([]);
  const [orderData, setOrderData] = useState([]);
  const [favouriteToDelete, setFavouriteToDelete] = useState([]);
  const images = "http://localhost:8080/images/";
  const userId = response.data && response.data.length > 0 ? response.data[0].id : null;
  const [orders, setOrders] = useState([]);
  const [userUpdate, setUserUpdate] = useState({
    name: "",
    userEmail: "",
    userPhone: "",
    userAddress: ""
  })
  const [openDeleteModal, setOpenDeleteModal] = useState(false);
  const [openDeleteAllFavouriteModal, setOpenDeleteAllFavouriteModal] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      const decodedToken = jwtDecode(token);
      const currentTime = Date.now() / 1000;
      if (decodedToken.exp < currentTime) {
        toast.error("Lejárt token, jelentkezzen be újra!")
        localStorage.removeItem('userId');
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

  const isEmailValid = (email) => {
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return emailRegex.test(email);
  };

  const handleUserUpdate = () => {
    if (userUpdate.userEmail.trim() !== "" && !isEmailValid(userUpdate.userEmail)) {
      toast.error("Érvénytelen e-mail cím");
      return;
    }

    const token = localStorage.getItem("token");
    if (token) {
      http.patch(`/auth/patch/${userId}`, userUpdate, {
        headers: { "x-access-token": token },
      })
        .then((response) => {
          if (response.status === 200) {
            toast.success("Felhasználói adatok sikeresen frissítve");
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
    if (name === "userPhone" && !/^[0-9]*$/.test(value)) {
      return; // Do not update state if input contains non-numeric characters
    }
    setUserUpdate(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleModifyClick = () => {
    const token = localStorage.getItem("token");
    if (token) {
      const modifiedData = { ...userUpdate };
      const isModified = Object.values(modifiedData).some(value => value !== "");

      if (isModified) {
        handleUserUpdate();
      } else {
        toast.info("Nincs változás az adatokban");
      }
    }
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
    localStorage.removeItem('userId');
    setMsg("Kijelenetketzve");
    toast.success("Sikeres kijelentkezés");
    navigate("/login");
  };

  const handleDeleteConfirmation = (id) => {
    setUserIdToDelete(id);
    setOpenDeleteModal(true);
  }

  const handleDeleteAllFavouriteConfirmation = () => {
    setFavouriteToDelete(userId)
    setOpenDeleteAllFavouriteModal(true);
  };

  const handleDelete = (id) => {
    http.delete(`/auth/delete/${id}`)
      .then((response) => {
        if (response.status === 200) {
          localStorage.removeItem("token");
          setIslogged(false);
          sessionStorage.removeItem("islogged");
          toast.success("Fiókja sikeres törölve");
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

  useEffect(() => {
    WatchesServices.getFavouriteById(userId)
      .then((response) => setFavourite(response.data))
      .catch((error) =>
        console.error("Error:", error)
      );
  }, [userId]);

  useEffect(() => {
    localStorage.setItem('userId', userId);
  }, [userId])


  const handleDeleteFavourite = (id, userId) => {
    http.delete(`/allwatches/favourite/delete/${id}`, { data: { userId } })
      .then((response) => {
        if (response.status === 200) {
          toast.success("Sikeres törölve a kedvencek közül");
          setFavourite(prevFavourite => prevFavourite.filter(item => item.id !== id));
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

  const handleDeleteAllFavourite = (userId) => {
    http.delete(`/allwatches/favourite/all/delete`, { data: { userId } })
      .then((response) => {
        if (response.status === 200) {
          setOpenDeleteAllFavouriteModal(false);
          toast.success("Összes termék sikeresen törölve a kedvencek közül");
          setFavourite(prevFavourite => prevFavourite.filter(item => item.userId !== userId));
        } else {
          setOpenDeleteAllFavouriteModal(false);
          toast.error("Hiba történt a törlés során");
        }
      })
      .catch((error) => {
        if (error.response) {
          setOpenDeleteAllFavouriteModal(false);
          toast.error(error.response.data.message);
        } else {
          setOpenDeleteAllFavouriteModal(false);
          toast.error("Hiba a szerverrel való kommunikáció során");
        }
      })
  };

  useEffect(() => {
    const token = localStorage.getItem('token');

    http.get("/auth/orders/all", {headers: { "x-access-token": token }})
      .then((response) => {
        setOrders(response.data);
      })
      .catch((error) => {
        if (error.response) {
          toast.error(error.response.data.error);
        } else {
          toast.error("Hiba a szerverrel való kommunikáció során");
        }
      });
  }, []);


  console.log(orders);

  return (
    <div>
      <section id="header" className="text-center pb-1">
        <div className="image-container">
          <img
            className="card-img-top"
            src={images + "/user/user.jpeg"}
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
                <ul className="nav nav-pills nav-fill mb-3" id="pills-tab" role="tablist">
                  <li className="nav-item" role="presentation">
                    <button className="nav-link active" id="pills-home-tab" data-bs-toggle="pill" data-bs-target="#pills-home" type="button" role="tab" aria-controls="pills-home" aria-selected="true">Profilom</button>
                  </li>
                  <li className="nav-item" role="presentation">
                    <button className="nav-link" id="pills-order-tab" data-bs-toggle="pill" data-bs-target="#pills-order" type="button" role="tab" aria-controls="pills-order" aria-selected="false">Megrendeléseim</button>
                  </li>
                  <li className="nav-item" role="presentation">
                    <button className="nav-link" id="pills-contact-tab" data-bs-toggle="pill" data-bs-target="#pills-contact" type="button" role="tab" aria-controls="pills-contact" aria-selected="false">Kedvenceim</button>
                  </li>
                  <li className="nav-item" role="presentation">
                    <button className="nav-link delete-btn" id="pills-contact-tab" data-bs-toggle="pill" data-bs-target="#pills-contact" type="button" role="tab" aria-controls="pills-contact" aria-selected="false" onClick={() => handleDeleteConfirmation(user.id)}>Fiók törlése</button>
                  </li>
                </ul>

                {/* NAV TABS CONTROL */}
                <div className="tab-content" id="pills-tabContent">
                  <div className="tab-pane fade show active" id="pills-home" role="tabpanel" aria-labelledby="pills-home-tab">
                    {/* PROFILE */}
                    <div className="container px-5">
                      <div className="row justify-content-center text-start">
                        <div className="col-lg-4 p-0 text-start custom-p-font">
                          <div className="p-2 custom-border">
                            <p className="m-0">Teljes név</p>
                            <input className="form-control border border-white placeholder-info w-100 rounded-0 form-control-font px-0" type="text" placeholder={user.name} value={userUpdate.name} onChange={handleInputChange} onBlur={handleInputBlur} name="name" id="name" />
                          </div>
                          <div className="p-2 custom-border">
                            <p className="m-0">Email cím</p>
                            <input className="form-control border border-white placeholder-info w-100 rounded-0 form-control-font px-0" type="email" placeholder={user.userEmail} value={userUpdate.userEmail} onChange={handleInputChange} onBlur={handleInputBlur} name="userEmail" id="email" />
                          </div>
                          <div className="p-2 custom-border">
                            <p className="m-0">Telefonszám</p>
                            <input className="form-control border border-white placeholder-info w-100 rounded-0 form-control-font px-0" type="tel" placeholder={user.userPhone} value={userUpdate.userPhone} onChange={handleInputChange} onBlur={handleInputBlur} pattern="[0-9]*" name="userPhone" id="phone" />
                          </div>

                        </div>
                        <div className="col-lg-4 p-0 custom-p-font">
                          <div className="p-2 custom-border">
                            <p className="m-0">Cím</p>
                            <input className="form-control border border-white placeholder-info w-100 rounded-0 form-control-font px-0" type="text" placeholder={user.userAddress} value={userUpdate.userAddress} onChange={handleInputChange} onBlur={handleInputBlur} name="userAddress" id="address" />
                          </div>
                          {/* <input
                              className="form-control border border-white w-100 rounded-0 form-control-font px-0"
                              type="text"
                              value={userUpdate.userAddress}
                              onChange={handleInputChange}
                              onBlur={handleInputBlur}
                              name="userAddress"
                              id="address"
                              placeholder={user.userAddress}
                            /> */}
                          <div className="p-2 custom-border">
                            <p className="m-0">Fiók megerősítés</p>
                            <div> {user.userVerification === 0 ? (
                              <input placeholder="Megerősítve" className="border border-white input-padd" disabled />
                            ) : (
                              <input placeholder="Nincs megerősítve" className="border border-white input-padd" disabled />
                            )}</div>
                          </div>
                          <div className="p-2 custom-border">
                            <p className="m-0">Hírlevél feliratkozás</p>
                            {user.newsletter === 0 ? (
                              <i className="Feliratkozva"></i>
                            ) : (
                              <input placeholder="Nincs feliratkozva" className="border border-white input-padd" disabled />
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
                  </div>

                  <div className="tab-pane fade" id="pills-order" role="tabpanel" aria-labelledby="pills-order-tab">
                    <div className="container">
                      <div className="row">
                        <div className="col-12">
                          <h1 className="custom-heading-font">Megrendeléseim</h1>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="tab-pane fade" id="pills-contact" role="tabpanel" aria-labelledby="pills-contact-tab">
                    {favourite.length === 0 ? (
                      <div className="container py-5">
                        <div className="row">
                          <div className="col-12">
                            <h1 className="custom-heading-font py-4">Önnek jelenleg nincs kedvenc terméke</h1>
                            <Link to={"/allbrands"} className="default-button product-default-button favourite-button">Keresés<i className="pi pi-arrow-right" style={{ fontSize: ".8rem" }}></i></Link>
                          </div>
                        </div>
                      </div>
                    ) : (
                      <div>
                        <div className="container px-5">
                          <h1 className="custom-heading-font">Kedvenceim ({favourite.length})</h1>
                          <div className="d-flex flex-row-reverse bd-highlight">
                            <button className="py-2 bd-highlight error pointer" onClick={() => handleDeleteAllFavouriteConfirmation(response.data.userId)}>Összes törlése</button>
                          </div>

                          <div className="row text-center">
                            {favourite && favourite[0] !== undefined && (
                              favourite.map((item, index) => (
                                <div key={index} className="col-12 col-md-4 col-lg-3 px-1 mb-2">
                                  <div className="card custom-border">
                                    <div className="view overlay">
                                      <img
                                        className="card-img-top rounded-0"
                                        src={images + item.brandId + "/10001.jpg"}
                                        alt="Card"
                                      />
                                      <a href="#!">
                                        <div className="mask rgba-white-slight"></div>
                                      </a>
                                      <div className="card-body">
                                        <h4 className="custom-card-title custom-heading-font mb-0">{item.product}</h4>
                                        <p className="text-muted m-0">-</p>
                                        <Link to={"/allwatches/watches/" + item.brandId} className="default-button product-default-button favourite-button"><i className="pi pi-info-circle" style={{ fontSize: "1rem" }}></i>Részletek</Link>
                                      </div>
                                      <div
                                        style={{
                                          position: "absolute",
                                          justifyContent: "center",
                                          alignItems: "center",
                                          top: "10px",
                                          right: "10px",
                                        }}
                                      >
                                        <button className="btn btn-outline-dangerborder-0 btn-sm" onClick={() => handleDeleteFavourite(item.id, userId)}>
                                          <i className="pi pi-trash text-warning"></i>
                                        </button>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              ))
                            )}
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                </div>

                <CustomModal
                  isOpen={openDeleteModal}
                  onClose={() => setOpenDeleteModal(false)}
                  title="Biztos benne, hogy törölni szeretné a fiókját?"
                  content="A művelet nem visszafordítható."
                  onConfirm={() => handleDelete(userIdToDelete)}
                />

                <CustomModal
                  isOpen={openDeleteAllFavouriteModal}
                  onClose={() => setOpenDeleteAllFavouriteModal(false)}
                  title="Biztos benne, hogy törölni szeretné az összes kedvenc terméket?"
                  content="A művelet nem visszafordítható."
                  onConfirm={() => handleDeleteAllFavourite(favouriteToDelete)}
                  confirmText="Törlés"
                />
              </div>
            ))
          ) : (
            <></>
          )
          }
        </div >
      )
      }
    </div >
  );
};

export default UserProfile;