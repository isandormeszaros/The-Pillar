import React, { useState, useEffect } from 'react';
import locales from "../../utils/locales.json";
import { loadStripe } from '@stripe/stripe-js';
import axios from 'axios';


function Checkout({ cart }) {

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
            console.log("Alma");
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
            // Fizetési adatok elküldése az API-nak
            const response = await axios.post('http://localhost:8080/allwatches/orders', {
                cart: cart.map(item => ({
                    product: item.watchName,
                    quantity: item.quantity
                })),
                userAddress: formData.address, // Módosítva: userAddress
                orderDate: new Date(), // Módosítva: orderDate
                shippingDate: new Date(), // Módosítva: shippingDate
                status: '0', // Módosítva: status
                paymentId: '1' // Módosítva: paymentId
            });

            console.log('Megrendelés sikeres:', response.data);
            // Sikeres megrendelés esetén átirányítás a sikeres megrendelés oldalra vagy más kezelt viselkedés
        } catch (error) {
            console.error('Hiba a megrendelés során:', error.response.data.error);
            // Hiba esetén kezelés, pl. hibaüzenet megjelenítése a felhasználónak
        }
    };


    return (
        <div className="container mt-5">
            <h2>Checkout</h2>

            <nav aria-label="breadcrumb">
                <ol class="breadcrumb">
                    <li class="breadcrumb-item"><a href="/home">Home</a></li>
                    <li class="breadcrumb-item"><a href="/cart">Kosár</a></li>
                    <li class="breadcrumb-item active" aria-current="page">Checkout</li>
                </ol>
            </nav>
            <div className="row">
                <div className="col-md-6">
                    {cart.map((item, index) => (
                        <div className="product" key={index}>
                            <h4>{item.product.watchName}</h4>
                            <p>{item.product.description}</p>
                            <p>
                                Ár:{" "}
                                {item.product.price.toLocaleString("en-US", locales["en-US"].currencyFormat)}
                            </p>
                            <p>
                                Mennyiség: {item.quantity}
                            </p>
                        </div>
                    ))}
                </div>
                <div className="col-md-6">
                    <form onSubmit={handleSubmit}>
                        <div className="form-group">
                            <label htmlFor="address">Cím</label>
                            <input type="text" className="form-control" id="address" name="address" value={formData.address} onChange={handleInputChange} required />
                        </div>
                        {/* Új input mező hozzáadása */}

                        {/* További input mezők */}
                        <button type="submit" className="btn btn-primary">Fizetés</button>
                        <button onClick={makePayment}>Stripe</button>
                    </form>
                </div>
            </div>
            <button className='default-button'>Vissza</button>
        </div>
    );
}

export default Checkout;
