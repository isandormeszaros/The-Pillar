import { useEffect, useState, useContext } from "react";
import locales from "../../utils/locales.json";
// import { Dialog } from 'primereact/dialog';

// Increase, decrease quantity
// Delete one item
// Delete all item from the cart

const Cart = ({ cart, updateQuantity, removeFromCart, removeAllItems }) => {
    const [visible, setVisible] = useState(false);

    const totalPrice = cart.reduce((total, item) => total + item.product.price * item.quantity, 0);

    useEffect(() => {
        console.log('cart:', cart);
    }, [cart]);

    const handleCheckOut = () => {
        console.log(cart)
    };



    return (
        <div className="cart-container container text-lg-start text-md-center text-center mt-5 ">
            {cart.length === 0 ? (
                <>
                    <hr />
                    <h3 className="custom-heading-font">Jelenleg a kosara üres</h3>
                    <p className="custom-p-font">Még nem adtál hozzá termékeket. Adjon hozzá terméket a táskájához, hogy itt láthassa.</p>
                    <a href="/allbrands" className="default-button">Vásárlás</a>
                </>
            ) : (
                <div>
                    <hr />
                    <h3 className="custom-heading-font">Kosár tartalma <span className="dark-gold">({cart.length})</span></h3>
                    <ul className="list-unstyled">
                        {cart.map((item, index) => (
                            <li key={index}>
                                <p>{item.product.watchName}</p>
                                <p>
                                    Price:{" "}
                                    {item.product.price.toLocaleString("en-US", locales["en-US"].currencyFormat)}
                                </p>
                                <p>
                                    <button className="pi pi-times" onClick={() => removeFromCart(item.product)}></button>
                                </p>
                                <button onClick={() => updateQuantity(item.product, -1)}>
                                    <i className="pi pi-minus"></i>
                                </button>
                                {item.quantity}
                                <button onClick={() => updateQuantity(item.product, 1)}>
                                    <i className="pi pi-plus"></i>
                                </button>
                                <p>Mennyiség: {item.quantity}</p>
                                <hr />
                            </li>
                        ))}
                    </ul>
                    <p className="font-weight-bold">Végösszeg:{" "}
                        {totalPrice.toLocaleString("en-US", locales["en-US"].currencyFormat)}
                    </p>
                    <div>
                        <button className="pi pi-times" onClick={removeAllItems}></button>
                    </div>

                    {/* <button label="Show" onClick={() => setVisible(true)} />
                    <Dialog header="Header" visible={visible} style={{ width: '50vw' }} onHide={() => setVisible(false)}>
                        <p className="m-0">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                            consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                        </p>
                    </Dialog> */}

                    <a href="/allbrands" className="default-button">Vissza</a>
                    <a href="/checkout" onClick={handleCheckOut} className="default-button float-right">Checkout</a>
                </div>
            )}
        </div>

    );
};

export default Cart;
