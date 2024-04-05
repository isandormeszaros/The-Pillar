import React, { useEffect, useState } from 'react';
import { loadStripe } from '@stripe/stripe-js';
import { useLocation } from 'react-router-dom';
import locales from "../../utils/locales.json";
import { toast } from 'react-toastify';
import axios from 'axios';
import './CheckOut.css'
import http from "../../http-common";

function Checkout({ cart }) {
    const location = useLocation();
    const [couponCode, setCouponCode] = useState('');
    const [userData, setUserData] = useState({});

    useEffect(() => {
        const token = localStorage.getItem("token");
        http.get("/auth/userprofile", {
            headers: { "x-access-token": token },
        })
        .then((response) => {
            setUserData(response.data[0]);
        })
        .catch((error) => {
            setUserData(error);
            if (error.response) {
                toast.error(error.response.data.message);
            } else {
                console.log("Error", error);
            }
        });
    }, []);

    const makePayment = async () => {
        const stripe = await loadStripe("pk_test_51OqjCM01VYY1Q06qzRZJ5ftluZMxe6FN1iZZpf7agPSgsZNoe8OqTxnc0wO0DDJfIZgzpIygQIJVcx4JQzsCv4vV00JpYY0CUo");

        const body = {
            cart,
            couponCode: couponCode,
            userData
        }

        const headers = {
            "Content-Type": "application/json",
            withCredentials: true
        }

        try {
            const response = await fetch("http://localhost:8080/auth/create-checkout-session", {
                method: "POST",
                headers: headers,
                mode: "cors",
                body: JSON.stringify(body)
            });

            const session = await response.json();

            const result = await stripe.redirectToCheckout({
                sessionId: session.id,
            });

            console.log(result);
        }
        catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        const savedCoupon = localStorage.getItem('coupon');
        const parsedCoupon = JSON.parse(savedCoupon);
        if (savedCoupon) {
            setCouponCode(parsedCoupon);
        }
    }, []);

    if (couponCode && couponCode !== "teleki2024") {
        toast.error("Érvénytelen kupon");
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:8080/auth/orders', {
                cart: cart.map(item => ({
                    product: item.watchName,
                    quantity: item.quantity
                })),
                userAddress: userData.address,
                orderDate: new Date(),
                shippingDate: new Date(),
                status: '0',
                paymentId: '1'
            });

            console.log('Megrendelés sikeres:', response.data);
        } catch (error) {
            console.error('Hiba a megrendelés során:', error.response.data.error);
        }
    };

    return (
        <div className="checkout-container container text-lg-start text-md-center text-center mt-5 ">
            <div className="container p-3">
                <nav aria-label="breadcrumb custom-p-font">
                    <ol className="breadcrumb justify-content-center justify-content-lg-start">
                        <li className="breadcrumb-item custom-p-font"><a href="/home" className="breadcrumb-anchor-cart">Nyitóoldal</a></li>
                        <li className="breadcrumb-item custom-p-font"><a href="/allbrands" className="breadcrumb-anchor-cart">Órák</a></li>
                        <li className="breadcrumb-item custom-p-font"><a href="/cart" className="breadcrumb-anchor-cart">Kosár</a></li>
                        <li className="breadcrumb-item custom-p-font active" aria-current="page">Checkout</li>
                    </ol>
                </nav>
                <h3 className="custom-heading-font pb-3">Checkout <span className="dark-gold">({cart.length})</span></h3>
                <div className="row">
                    <div className="col-lg-9 custom-p-font cart-items-container">
                        <ul className="list-unstyled">
                            {cart.map((item, index) => (
                                <li key={index}>
                                    <hr />
                                    <div className="d-flex justify-content-between">
                                        <div className="fw-bolder cart-item-font-size">{item.product.watchName}</div>
                                        <div className="fw-bolder cart-item-font-size">{(item.product.price * item.quantity).toLocaleString("en-US", locales["en-US"].currencyFormat)}</div>
                                    </div>
                                    <div className="d-flex justify-content-between">
                                        <div className="fw-bolder cart-item-font-size">{item.product.price.toLocaleString("en-US", locales["en-US"].currencyFormat)}</div>

                                    </div>
                                    <div className="p-4"></div>
                                    <div className="d-flex justify-content-between">
                                        <div className="quantity-checker">
                                            <span className="px-2">{item.quantity}</span>
                                        </div>
                                        <div>

                                        </div>
                                    </div>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className="col-lg-3 custom-p-font pt-lg-0 pt-5">
                        <hr />
                        <div className="d-flex d-md-inline align-items-center justify-content-center">
                            <div className="row g-2">
                                <div className="col-6 pointer">
                                    <div className="p-3 custom-card custom-card-active">
                                        <div className="pt-3"><i className='pi pi-credit-card card-icon'></i></div>
                                        <p>Kártyás tranzakció</p>
                                    </div>
                                </div>
                                <div className="col-6 pointer">
                                    <div className="p-3 custom-card">
                                        <div className="pt-3"><i className='pi pi-wallet card-icon'></i></div>
                                        <p>Utánvételes fizetés</p>
                                    </div>
                                </div>
                                <div className="col-6 pointer">
                                    <div className="p-3 custom-card">
                                        <div className="pt-3"><i className='pi pi-map-marker card-icon'></i></div>
                                        <p>Postapont átvétel</p>
                                    </div>
                                </div>
                                <div className="col-6 pointer">
                                    <div className="p-3 custom-card">
                                        <div className="pt-3"><i className='pi pi-map card-icon'></i></div>
                                        <p>Személyes átvétel</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <hr />
                        <div className="d-flex justify-content-center align-items-center cart-total-summary pb-5 pb-lg-3">
                            <div className="col-8 pl-lg-0">
                                <p className="my-1 text-start">Végösszeg</p>
                            </div>
                            <div className="col-4 pr-lg-0">
                                <p className="my-1 text-end">
                                    {location.state.totalPriceWithShipping}
                                </p>
                            </div>
                        </div>
                        <div className="d-flex justify-content-center align-items-center cart-total-summary">
                            <button onClick={makePayment} className="default-button d-flex w-100">Checkout</button>
                        </div>
                        <button className='default-button mt-3 w-100' onClick={handleSubmit}>Rendelés leadása</button>
                    </div>
                </div>
            </div>

        </div >
    );
}

export default Checkout;
