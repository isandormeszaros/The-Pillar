import React from "react";
import './Success.css'

function Status() {
    return (
        <div className="success-container text-white">
            <div className="success-content">
                <i className="pi pi-check-circle success-icon"></i>
                <h1 className="custom-heading-font">
                    Megrendelését sikeresen rögzítettük.
                </h1>
                <h5 className="mb-5">Köszönjük a bizalmat.</h5>
                <div className="row gx-5 m-a pt-3 pb-5 justify-content-center">
                    <div className="col-lg-4 col-md-12 d-flex p-2 justify-content-center justify-content-lg-start">
                        <button className="default-button w-75 order-status-button"><i className="pi pi-home"></i>Kezdőlap</button>


                    </div>
                    <div className="col-lg-4 col-md-12 d-flex p-2 justify-content-center justify-content-lg-end">
                        <button className="default-button w-75 order-status-button">Megrendeléseim<i className="pi pi-box"></i></button>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Status;



