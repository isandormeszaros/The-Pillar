import React from "react";
import './Cancel.css'

function Status() {
    return (
        <div className="cancel-container text-white">
            <div className="cancel-content">
                <i className="pi pi-times-circle cancel-icon"></i>
                <h1 className="custom-heading-font">
                    Hiba történt a fizetés során
                </h1>
                <h5 className="mb-5">Kérjük térjen vissza később.</h5>
                <div className="row gx-5 m-a pt-3 pb-5 justify-content-center">
                    <div className="p-2 justify-content-center justify-content-lg-start">
                        <button className="default-button w-75 order-status-button"><i className="pi pi-home"></i>Kezdőlap</button>


                    </div>
                    <div className="col-lg-4 col-md-12 d-flex p-2 justify-content-center justify-content-lg-end">
                        <button className="default-button w-75 order-status-button">Újra próbálkozás<i className="pi pi-replay"></i></button>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Status;



