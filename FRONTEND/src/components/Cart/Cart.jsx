import { useEffect, useState } from "react";
import locales from "../../utils/locales.json";
import "./Cart.css"

// import { Dialog } from 'primereact/dialog';

// Increase, decrease quantity
// Delete one item
// Delete all item from the cart

const Cart = ({ cart, updateQuantity, removeFromCart, removeAllItems }) => {
    const [visible, setVisible] = useState(false);
    const [couponCode, setCouponCode] = useState("");

    const totalPrice = cart.reduce((total, item) => total + item.product.price * item.quantity, 0);

    useEffect(() => {
        console.log('cart:', cart);
    }, [cart]);

    const handleCheckOut = () => {
        console.log(cart)
    };

    const applyCoupon = () => {
        // Check if there is a valid coupon code
        if (couponCode === "teleki2024") {
            // Calculate the discounted total price
            const discountedPrice = totalPrice * 0.9; // 10% discount
            const discountAmount = totalPrice - discountedPrice; // Calculate the discount amount
            return {
                originalPrice: totalPrice.toLocaleString("en-US", locales["en-US"].currencyFormat),
                discountedPrice: discountedPrice.toLocaleString("en-US", locales["en-US"].currencyFormat),
                discountAmount: discountAmount.toLocaleString("en-US", locales["en-US"].currencyFormat) // Include the discount amount in the return value
            };
        } else {
            // If there is no valid coupon code, return the original total price without discount
            return {
                originalPrice: totalPrice.toLocaleString("en-US", locales["en-US"].currencyFormat),
                discountedPrice: totalPrice.toLocaleString("en-US", locales["en-US"].currencyFormat),
                discountAmount: '0' // Set the discount amount to 0 if no coupon is applied
            };
        }
    };



    return (
        <div className="cart-container container text-lg-start text-md-center text-center mt-5 ">
            {cart.length === 0 ? (
                <>
                    <div className="empty-cart empty-cart-mobile">
                        <hr />
                        <h3 className="custom-heading-font">Jelenleg a kosara üres</h3>
                        <p className="custom-p-font">Még nem adtál hozzá termékeket. Adjon hozzá terméket a táskájához, hogy itt láthassa.</p>
                        <a href="/allbrands" className="default-button">Vásárlás</a>
                    </div>
                </>
            ) : (

                <div className="container p-3">
                    <h3 className="custom-heading-font">Kosár tartalma <span className="dark-gold">({cart.length})</span></h3>
                    <div className="row">
                        <div className="col-lg-9 custom-p-font">
                            <div class="d-flex flex-row-reverse">
                                <div class="pt-2 error g-5"><i className="pi pi-trash"></i> Összes törlése</div>
                            </div>
                            <ul className="list-unstyled">
                                {cart.map((item, index) => (
                                    <li key={index}>
                                        <hr />
                                        <div class="d-flex justify-content-between">
                                            <div class="fw-bolder cart-item-font-size">{item.product.watchName}</div>
                                            <div class="fw-bolder cart-item-font-size">{item.product.price.toLocaleString("en-US", locales["en-US"].currencyFormat)}</div>
                                        </div>

                                        <p>
                                            <button className="pi pi-times-circle" onClick={() => removeFromCart(item.product)}></button>
                                        </p>
                                        <div className="quantity-checker">
                                            <button onClick={() => updateQuantity(item.product, -1)} className="quantity-chercker-button">
                                                <i className="pi pi-minus"></i>
                                            </button>
                                            <span className="px-2">{item.quantity}</span>
                                            <button onClick={() => updateQuantity(item.product, 1)} className="quantity-chercker-button">
                                                <i className="pi pi-plus"></i>
                                            </button>
                                        </div>

                                        <p>Mennyiség: {item.quantity}</p>

                                    </li>
                                ))}
                            </ul>
                        </div>


                        <div className="col-lg-3">
                            <div className="d-flex justify-content-center align-items-center cart-total-summary">
                                <div className="col-8 pl-lg-0">
                                    <p>Teljes összeg</p>
                                </div>
                                <div className="col-4 pr-lg-0">
                                    {totalPrice}
                                </div>

                            </div>

                            <div className="d-flex justify-content-center align-items-center cart-total-summary">
                                <div className="col-8 pl-lg-0">
                                    <div className="col-4 pr-lg-0">
                                        <input
                                            type="text"
                                            value={couponCode}
                                            onChange={(e) => setCouponCode(e.target.value)}
                                            placeholder="Kuponkód"
                                        />
                                    </div>
                                </div>
                            </div>

                            <div className="d-flex justify-content-center align-items-center cart-total-summary">
                                <div className="col-8 pl-lg-0">
                                    <div className="col-4 pr-lg-0">
                                        <div className="col-8 pl-lg-0">
                                            <p className="text-uppercase custom-heading-font small">Végösszeg</p>
                                        </div>
                                        <div className="col-4 pr-lg-0">
                                            <p className="font-weight-bold">
                                                Eredeti ár: {applyCoupon().originalPrice}
                                            </p>
                                        </div>
                                    </div>

                                </div>

                            </div>
                            <hr />
                            <div className="d-flex justify-content-center align-items-center cart-total-summary">
                                <div className="col-8 pl-lg-0">
                                    <p className="text-uppercase custom-heading-font small">Végösszeg</p>
                                </div>
                                <div className="col-4 pr-lg-0">
                                    <p className="font-weight-bold">
                                        Eredeti ár: {applyCoupon().originalPrice}
                                    </p>
                                </div>
                                <div className="col-4 pr-lg-0">
                                    <p className="font-weight-bold">
                                        Kedvezményes ár: {applyCoupon().discountedPrice}
                                    </p>
                                    {couponCode === "teleki2024" && (
                                        <p className="font-weight-bold">
                                            Kedvezmény: {applyCoupon().discountAmount}
                                        </p>
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>

                    <button className="pi pi-times" onClick={removeAllItems}></button>
                    <a href="/allbrands" className="default-button">Vissza</a>
                    <a href="/checkout" onClick={handleCheckOut} className="default-button float-right">Checkout</a>
                </div>
            )}
        </div>

    );
};

export default Cart;
