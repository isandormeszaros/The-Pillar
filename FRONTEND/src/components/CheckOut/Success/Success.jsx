import React, { useState, useEffect } from "react";
import './Success.css'
import { loadStripe } from '@stripe/stripe-js';
import { toast } from 'react-toastify';
import http from "../../../http-common";

function Status() {
    const [orderPlaced, setOrderPlaced] = useState(false);
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

            const sessionData = await response.json();
            const session = sessionData.data;
            const lineItems = sessionData.lineItems;

            if (sessionData.data.payment_status === 'paid') {
                const coupon = JSON.parse(localStorage.getItem("couponBool"));

                const cart = JSON.parse(localStorage.getItem('cart'));

                const userAddressLine2 = sessionData.data.customer_details.address.line2 !== null ? sessionData.data.customer_details.address.line2 + " " : ""
                const quantityItem = lineItems.map(item => item.quantity);
                const productIdItem = cart.map(item => item.product.id);

                const header = {
                    userId: localStorage.getItem("userId"),
                    coupon: coupon,
                    userAddress: sessionData.data.customer_details.address.postal_code + "," + sessionData.data.customer_details.address.city + " " + sessionData.data.customer_details.address.line1 + " " + userAddressLine2
                }

                const body = productIdItem.map((productId, index) => ({
                    productId: productId,
                    quantity: quantityItem[index]
                }));

                http.post(`/auth/orders`, { header: header, body: body })
                    .then((response) => {
                        if (response.status === 200) {
                            toast.success("Sikeres rendelés");
                            ["cart", "couponBool", "coupon"].forEach(key => {
                                localStorage.removeItem(key);
                            });
                        } else {
                            toast.error("Hiba történt a rendelés leadása során");
                        }
                    })
                    .catch((error) => {
                        if (error.response) {
                            toast.error(error.response.data.message);
                        } else {
                            toast.error("Hiba a szerverrel való kommunikáció során");
                        }
                    })

                // console.log(header);
                // console.log(body);
            } else {
                console.log("A fizetés nem történt megfelelően.");
            }
        }
        catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        if (!orderPlaced) {
            getData();
        }
    }, [orderPlaced]);

    return (
        <div className="success-container text-white">
            <div className="success-content">
                <i className="pi pi-check-circle success-icon"></i>
                <h1 className="custom-heading-font">
                    Megrendelését sikeresen rögzítettük.
                </h1>
                <h5 className="mb-1 custom-p-font text-white">Köszönjük a bizalmat. A megrendelések megjelenítése megnüpontban megtalálja a rendelés részletes adatait.</h5>
                <div className="row pt-3 pb-5 m-0 justify-content-center">
                    <div className="col-lg-4 col-md-12 d-flex py-2 px-0 justify-content-center justify-content-lg-start">
                        <button className="default-button w-75 order-status-button" onClick={getData}><i className="pi pi-home"></i>Kezdőlap</button>


                    </div>
                    <div className="col-lg-4 col-md-12 d-flex py-2 px-0 justify-content-center justify-content-lg-end">
                        <button className="default-button w-75 order-status-button">Megrendeléseim<i className="pi pi-box"></i></button>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Status;



