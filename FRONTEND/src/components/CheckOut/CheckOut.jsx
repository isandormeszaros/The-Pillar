import React, { useState } from 'react';
import locales from "../../utils/locales.json";
import { loadStripe } from '@stripe/stripe-js';
import { useLocation } from 'react-router-dom';
import axios from 'axios';
import './CheckOut.css'

function Checkout({ cart }) {
    const location = useLocation();
    // const { totalPriceWithShipping } = location.state || {};
    console.log(location.state)

    const makePayment = async () => {
        const stripe = await loadStripe("pk_test_51OqjCM01VYY1Q06qzRZJ5ftluZMxe6FN1iZZpf7agPSgsZNoe8OqTxnc0wO0DDJfIZgzpIygQIJVcx4JQzsCv4vV00JpYY0CUo");

        const body = {
            cart
        }

        const headers = {
            "Content-Type": "application/json"
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
                sessionId: session.id
            });

            console.log(result);
        }
        catch (error) {
            console.log(error);
        }
    }

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        address: 'Budapest, Kiss utca 10',
        city: '',
        zip: ''
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:8080/allwatches/orders', {
                cart: cart.map(item => ({
                    product: item.watchName,
                    quantity: item.quantity
                })),
                userAddress: formData.address,
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

    console.log(cart)
    // console.log(totalPriceWithShipping)

    return (
        //             <div className="row">
        //                 <div className="col-3"><input type="text" /></div>
        //                 <form onSubmit={handleSubmit}>
        //                     <div className="form-group">
        //                         <label htmlFor="address">Cím</label>
        //                         <input type="text" className="form-control address-input" id="address" name="address" value={formData.address} onChange={handleInputChange} required />
        //                     </div>
        //                     <button type="submit" className="btn btn-primary">Fizetés</button>
        //                     <button onClick={makePayment}>Stripe</button>
        //                 </form>
        //             </div>
        //         </div>

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
                    <div className="col-lg-8 custom-p-font cart-items-container">
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

                    <div className="col-lg-4 custom-p-font pt-lg-0 pt-5">
                        <div className="d-flex align-items-center cart-total-summary">
                            <div className="col-12 pl-lg-0">
                                <input className="my-1 form-control  coupon-input"
                                    type="text"
                                    value=""

                                    placeholder="Szállítási cím"
                                />
                            </div>
                        </div>
                        <hr />
                        <div className="d-flex align-items-center justify-content-between gap-1">
                            <div className="card col-2 border-color custom-card">
                                <div className="card-body mt-4">
                                    <div><i className='pi pi-credit-card card-icon'></i></div>
                                    <p>Bankkártya</p>
                                </div>
                            </div>
                            <div className="card col-2 border-color custom-card">
                                <div className="card-body mt-4">
                                    <div><i className='pi pi-wallet card-icon'></i></div>
                                    <p>Utánvétel</p>
                                </div>
                            </div>
                            <div className="card col-2 border-color custom-card">
                                <div className="card-body mt-4">
                                    <div><i className='pi pi-truck card-icon'></i></div>
                                    <p>Csomagpont</p>
                                </div>
                            </div>
                        </div>
                        <hr />
                        <div className="d-flex justify-content-center align-items-center cart-total-summary pb-4">
                            <div className="col-8 pl-lg-0">
                                <p className="my-1 text-start">Végösszeg</p>
                            </div>
                            <div className="col-4 pr-lg-0">
                                <p className="my-1 text-end">
                                    {location.state.totalPriceWithShipping}
                                </p>
                            </div>
                        </div>
                        <hr />

                        <button onClick={makePayment} className="default-button d-flex">Checkout</button>
                    </div>
                </div>
            </div>

        </div>
    );
}

export default Checkout;
