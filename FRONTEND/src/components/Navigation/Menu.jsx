import { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route, useParams, Navigate } from "react-router-dom";
import ScrollToTop from "../../utils/Separator/ScrollToTop";
import Navbar from "../Navbar/Navbar";
import Home from "../../pages/Home/Home";
import About from "../../pages/Layout/About/AboutUs";
import Faq from "../../pages/Layout/Faq/Faq"
import Footer from "../Footer/Footer";
import ProductList from "../Context/ProductList";
import ProductListFiltered from "../Hooks/ProductListFiltered";
import Login from "../../pages/Login/Login";
import SearchComponent from "../Hooks/searchComponent";
import SearchResultsComponent from "../Hooks/searchResultsComponent";
import UserProfile from "../../pages/UserProfile/UserProfile"
import Registration from "../../pages/Registration/Registration";
import Separator from "../../utils/Separator/Separator";
import Cart from "../Cart/Cart";
import TimeOut from "../../utils/TimeOut/TimeOut";
import CheckOut from "../CheckOut/CheckOut";
import Results from "../Hooks/Results";
import { ToastContainer } from "react-toastify";
import FilterSection from "../Context/FilterSection";
import NotFound from "../../utils/NotFound/NotFound";
import AllWatches from "../../pages/Layout/AllWatches/AllWatches";
import useCart from "../Hooks/useCart";
import Success from "../CheckOut/Success/Success";
import Cancel from "../CheckOut/Cancel/Cancel";
import ProductDetailPage from "../Context/ProductDetailPage";

const SearchResultPage = () => {
  const { sText } = useParams();
  return <ProductListFiltered szuro={sText} />;
};

function Menu() {
  const [islogged, setIslogged] = useState(false);
  const { cart, setCart, addToCartFunction, updateQuantity, removeFromCart, removeAllItems, applyCoupon } = useCart();

  useEffect(() => {
    const log = sessionStorage.getItem("islogged");
    if (log) {
      setIslogged(true);
    }
    const sessionStorageData = JSON.parse(sessionStorage.getItem("islogged"));
    console.log("SessionStorage:", sessionStorageData);
  }, []);



  if (islogged) {
    console.log('User bejelentkezve')
  }

  return (
    <BrowserRouter>
      <Navbar cart={cart} islogged={islogged} />
      <Separator />
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/" element={<Navigate to="/home" />} />
        <Route
          path="/allbrands"
          element={
            <div>
              <ProductList addToCartFunction={addToCartFunction} />
            </div>
          }
        />
        <Route path="/registration" element={<Registration />} />
        {islogged ? (
          <Route
            path="/login"
            element={
              <UserProfile islogged={islogged} setIslogged={setIslogged} />
            }
          />
        ) : (
          <Route
            path="/login"
            element={<Login islogged={islogged} setIslogged={setIslogged} />}
          />
        )}
        <Route path="/allbrands/search/:sText" element={<SearchResultPage />} />
        <Route path="/searchPage" element={<SearchComponent />} />
        <Route path="/search" element={<SearchResultsComponent />} />
        <Route path="/about" element={<About />} />
        <Route path="/faq" element={<Faq />} />
        <Route path="/cart" element={<Cart cart={cart} setCart={setCart} updateQuantity={updateQuantity} removeAllItems={removeAllItems} removeFromCart={removeFromCart} />} />
        <Route path="/timeout" element={<TimeOut />} />
        <Route path="/checkout" element={<CheckOut cart={cart} />} />
        <Route path="/allbrands/detailed" element={<Results />} />
        <Route path="*" element={<NotFound />} />
        <Route path="/brands" element={<AllWatches />} />
        <Route path="/checkout/succeed" element={<Success />} />
        <Route path="/checkout/cancel" element={<Cancel />} />
        <Route path="/allwatches/watches/:id" element={<ProductDetailPage addToCartFunction={addToCartFunction} />} />

      </Routes>
      <Footer />
      <ToastContainer />
      <ScrollToTop />
    </BrowserRouter>

  );
}

export default Menu;
