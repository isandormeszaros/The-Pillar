import { useEffect, useState } from "react";
import locales from "../../utils/locales.json";
import { Link } from "react-router-dom";
import "./Cart.css"

const Cart = ({ cart, updateQuantity, removeFromCart, removeAllItems, islogged }) => {
    const [couponCode, setCouponCode] = useState("");
    const totalPrice = cart.reduce((total, item) => total + item.product.price * item.quantity, 0);
    const [openModal, setOpenModal] = useState(false);
    const [couponError, setCouponError] = useState(false);

    function applyCoupon() {
        let discountedPrice, discountAmount;
        if (couponCode === "teleki2024") {
            discountedPrice = totalPrice * 0.9;
            discountAmount = totalPrice - discountedPrice;
        } else {
            discountedPrice = totalPrice;
            discountAmount = 0;
        }

        const taxPrice = discountedPrice * 0.27;
        const totalWithShipping = discountedPrice + taxPrice;

        return {
            originalPrice: totalPrice.toLocaleString("en-US", locales["en-US"].currencyFormat),
            discountedPrice: discountedPrice.toLocaleString("en-US", locales["en-US"].currencyFormat),
            discountAmount: discountAmount.toLocaleString("en-US", locales["en-US"].currencyFormat),
            taxPrice: taxPrice.toLocaleString("en-US", locales["en-US"].currencyFormat),
            totalPriceWithShipping: totalWithShipping.toLocaleString("en-US", locales["en-US"].currencyFormat)
        };
    }


    console.log(applyCoupon().totalPriceWithShipping)
    console.log(couponCode)


    const jsonCoupon = JSON.stringify(couponCode)

    function handleApplyCoupon() {
        localStorage.setItem('coupon', jsonCoupon);
    }

    useEffect(() => {
        const savedCoupon = localStorage.getItem('coupon');
        const parsedCoupon = JSON.parse(savedCoupon);
        if (savedCoupon) {
            setCouponCode(parsedCoupon);
        }
    }, []);

    const handleDeleteConfirmation = () => {
        setOpenModal(true)
    }

    function removeCouponItems() {
        localStorage.removeItem('coupon')
    }

    if (couponCode && couponCode !== "teleki2024" && !couponError) {
        setCouponError(true);
    }
    else if (couponError && couponCode === "teleki2024") {
        setCouponError(false);
    }

    const couponClass = couponError ? 'invalid-coupon' : 'valid-coupon';

    if (!islogged) {
        return (
            <div className="cart-container container text-lg-start text-md-center text-center mt-5 align-items-center ">
                <div className="empty-cart empty-cart-mobile">
                    <hr />
                    <h3 className="custom-heading-font pb-3">Vásárláshoz jelentkezzen be!</h3>
                    <Link to="/login" className="default-button">Bejelentkezés</Link>
                </div>
            </div>
        );
    }
    else {
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
                        <nav aria-label="breadcrumb custom-p-font">
                            <ol className="breadcrumb justify-content-center justify-content-lg-start">
                                <li className="breadcrumb-item custom-p-font"><a href="/home" className="breadcrumb-anchor-cart">Nyitóoldal</a></li>
                                <li className="breadcrumb-item custom-p-font"><a href="/allbrands" className="breadcrumb-anchor-cart">Órák</a></li>
                                <li className="breadcrumb-item custom-p-font active" aria-current="page">Kosár</li>
                            </ol>
                        </nav>
                        <h3 className="custom-heading-font pb-3">Kosár tartalma <span className="dark-gold">({cart.length})</span></h3>
                        <div className="row">
                            <div className="col-lg-9 custom-p-font cart-items-container">
                                <div className="d-flex flex-row-reverse">
                                    {/* <div onClick={removeAllItems} className="pt-2 error delete-all-items"><i className="pi pi-trash"></i> Összes törlése</div> */}
                                    <div onClick={() => handleDeleteConfirmation()} className="pt-2 error delete-all-items"><i className="pi pi-trash"></i> Összes törlése</div>
                                </div>
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
                                                    <button onClick={() => updateQuantity(item.product, -1)} className="quantity-chercker-button">
                                                        <i className="pi pi-minus"></i>
                                                    </button>
                                                    <span className="px-2">{item.quantity}</span>
                                                    <button onClick={() => updateQuantity(item.product, 1)} className="quantity-chercker-button">
                                                        <i className="pi pi-plus"></i>
                                                    </button>
                                                </div>
                                                <div>
                                                    <button className="delete" onClick={() => removeFromCart(item.product)}>
                                                        Törlés
                                                    </button>
                                                </div>
                                            </div>
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            <div className="col-lg-3 custom-p-font pt-lg-0 pt-5">
                                <div className="d-flex justify-content-center align-items-center cart-total-summary">
                                    <div className="col-8 pl-lg-0">
                                        <p className="my-1 text-start">Teljes összeg</p>
                                    </div>
                                    <div className="col-4 pr-lg-0">
                                        <p className="my-1 text-end">{applyCoupon().originalPrice}</p>
                                    </div>
                                </div>
                                <hr />
                                <div className="d-flex align-items-center cart-total-summary">
                                    <div className="col-12 pl-lg-0">
                                        <input className={`my-1 form-control coupon-input ${couponClass}`}
                                            type="text"
                                            value={couponCode}
                                            onChange={(e) => setCouponCode(e.target.value)}
                                            placeholder="Kuponkód"
                                        />
                                        <p className="m-0 p-0 small text-muted text-start">10% kedvezmény</p>
                                    </div>
                                </div>
                                <hr />
                                <div className="d-flex justify-content-center align-items-center cart-total-summary">
                                    <div className="col-8 pl-lg-0">
                                        <p className="my-0 mt-1 text-start">Adó</p>
                                        <p className="m-0 p-0 small text-muted text-start">27% ÁFA</p>
                                    </div>
                                    <div className="col-4 pr-lg-0">
                                        <p className="my-1 text-end">
                                            {applyCoupon().taxPrice}
                                        </p>
                                    </div>
                                </div>
                                <hr />
                                <div className="d-flex justify-content-center align-items-center cart-total-summary">
                                    <div className="col-8 pl-lg-0">
                                        <p className="my-1 text-start">Kedvezmény</p>
                                    </div>
                                    <div className="col-4 pr-lg-0">
                                        {couponCode === "teleki2024" ? (
                                            <p className="my-1 text-end">
                                                {applyCoupon().discountAmount}
                                            </p>
                                        ) : (<p className="my-1 text-end">{applyCoupon().discountAmount}</p>)}
                                    </div>

                                </div>
                                <hr />
                                <div className="d-flex justify-content-center align-items-center cart-total-summary pb-4">
                                    <div className="col-8 pl-lg-0">
                                        <p className="my-1 text-start">Végösszeg</p>
                                    </div>
                                    <div className="col-4 pr-lg-0">
                                        <p className="my-1 text-end">
                                            {applyCoupon().totalPriceWithShipping}
                                        </p>
                                    </div>
                                </div>
                                <Link to="/checkout" onClick={handleApplyCoupon} state={{ totalPriceWithShipping: applyCoupon().totalPriceWithShipping }} className="default-button default-button-width d-flex ">
                                    Checkout
                                </Link>
                            </div>
                        </div>

                        {openModal && (
                            <div className="modal-background">
                                <div className="modal-container">
                                    <div className="modal-close-btn">
                                        <button onClick={() => setOpenModal(false)}><i className="pi pi-times"></i></button>
                                    </div>
                                    <div className="modal-title">
                                        <h1 className="custom-heading-font">Biztos benne, hogy törli a kosár tartalmát?</h1>
                                    </div>
                                    <div className="modal-body">
                                        <p className="custom-p-font">A művelet nem visszafordítható.</p>
                                    </div>
                                    <div className="modal-footer">
                                        <button className="default-button profile-icon-button"
                                            onClick={() => {
                                                setOpenModal(false);
                                            }}
                                            id="cancelBtn"
                                        >
                                            <i className="pi pi-arrow-left"></i>Mégse
                                        </button>
                                        <button className="default-button default-delete-button profile-icon-button" onClick={() => { removeAllItems(); removeCouponItems() }}><i className="pi pi-trash"></i>Törlés</button>
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>
                )}
            </div>

        );
    }
};

export default Cart;
