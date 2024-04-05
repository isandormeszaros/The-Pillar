import React, { useEffect } from "react";
import './Success.css'
import { loadStripe } from '@stripe/stripe-js';
import { toast } from 'react-toastify';

function Status() {
    const getData = async () => {
        const stripe = await loadStripe("pk_test_51OqjCM01VYY1Q06qzRZJ5ftluZMxe6FN1iZZpf7agPSgsZNoe8OqTxnc0wO0DDJfIZgzpIygQIJVcx4JQzsCv4vV00JpYY0CUo");

        const headers = {
            "Content-Type": "application/json",
            withCredentials: true
        }

        try {
            const urlParams = new URLSearchParams(window.location.search);
            const sessionId = urlParams.get("session_id");
            const response = await fetch(`http://localhost:8080/auth/checkout/succeed?session_id=${sessionId}`, {
                method: "GET",
                headers: headers,
                mode: "cors",
            });

            const session = await response.json();

            console.log("Add " + JSON.stringify(session.data));

            console.log(sessionId)

        }
        catch (error) {
            console.log(error);
        }
        
    }

    useEffect(() => {
        toast.success("Sikeres megrendelés! Kérjük tekintse meg a rendeléseit a megrendeléseim gombra kattintva!");
    }, [])

    
    return (
        <div className="success-container text-white">
            <div className="success-content">
                <i className="pi pi-check-circle success-icon"></i>
                <h1 className="custom-heading-font">
                    Megrendelését sikeresen rögzítettük.
                </h1>
                <h5 className="mb-1 custom-p-font text-white">Köszönjük a bizalmat. Email-ben megtalálja a rendelés részletes adatait.</h5>
                <div className="row gx-5 m-a pt-3 pb-5 justify-content-center">
                    <div className="col-lg-4 col-md-12 d-flex p-2 justify-content-center justify-content-lg-start">
                        <button className="default-button w-75 order-status-button" onClick={getData}><i className="pi pi-home"></i>Kezdőlap</button>


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



