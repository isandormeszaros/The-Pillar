import React, { useState } from 'react';
import locales from "../../utils/locales.json";
import axios from 'axios'; // Axios importálása

function Checkout({ cart }) {
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
                    product: item.product,
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
    console.log(handleInputChange)

    return (
        <div className="container mt-5">
            <h2>Checkout</h2>
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
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Checkout;
