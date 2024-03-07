import { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route, useParams, Navigate } from "react-router-dom";
import ScrollToTop from "../../utils/ScrollToTop";
import Navbar from "../Navbar/Navbar";
import Home from "../../pages/Home/Home";
import Blogs from "../../pages/Layout/Blogs";
import Contact from "../../pages/Layout/ContactUs";
import About from "../../pages/Layout/AboutUs";
import Faq from "../../pages/Layout/Faq"
import NoPage from "../../pages/NoPage/NoPage";
import Footer from "../Footer/Footer";
import ProductDisplay from "../Context/ProductDisplay";
import ProductList from "../Context/ProductList";
import ProductListFiltered from "../Hooks/ProductListFiltered";
import Login from "../../pages/Login/Login";
import SearchComponent from "../Hooks/searchComponent";
import SearchResultsComponent from "../Hooks/searchResultsComponent";
// import InfiniteScroll from "../../utils/infiniteScroll";
// import Gallery from "../Hooks/Gallery";
import UserProfile from "../../pages/Login/UserProfile";
import Registration from "../../pages/Signup/Registration";
import Separator from "../../utils/Separator";
// import ForgetPassword from "../../pages/Login/ForgetPassword";
import Cart from "../Cart/Cart";
import TimeOut from "../../utils/TimeOut";
import CheckOut from "../CheckOut/CheckOut";
import Results from "../Hooks/Results";
import { ToastContainer } from "react-toastify";
import FilterSection from "../Context/FilterSection";
import NotFound from "../../utils/NotFound";



const SearchResultPage = () => {
  const { sText } = useParams();
  return <ProductListFiltered szuro={sText} />;
};



function Menu() {
  const [islogged, setIslogged] = useState(false);
  const [isLefut, setIsLefut] = useState(false);  
  const [cart, setCart] = useState([]); // A KOSÁR TARTALMA


  useEffect(() => {
    // Load cart from localStorage if it exists
    const existingCart = localStorage.getItem("cart");
    if (existingCart) {
      setCart(JSON.parse(existingCart));
    }
  }, []);

  useEffect(() => {
    // Save cart to localStorage whenever it changes
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  const addToCartFunction = (product) => {
    // Check if the product already exists in the cart
    const existingItem = cart.find((item) => item.product.id === product.id);
    if (existingItem) {
      // If it exists, increase the quantity
      const newCart = cart.map((item) =>
        item.product.id === product.id
          ? { ...item, quantity: item.quantity + 1 }
          : item
      );
      setCart(newCart);
    } else {
      // If it doesn't exist, add it to the cart with quantity 1
      setCart([...cart, { product: product, quantity: 1 }]);
    }
  };

  const updateQuantity = (product, change) => {
    const updatedCart = cart.map(item => {
      if (item.product.id === product.id) {
        const newQuantity = Math.max(1, item.quantity + change);
        return { ...item, quantity: newQuantity };
      }
      return item;
    });
    setCart(updatedCart);
  };

  const removeFromCart = (product) => {
    const updatedCart = cart.filter(item => item.product.id !== product.id)
    setCart(updatedCart)
  }

  const removeAllItems = () => {
    const shouldRemove = window.confirm("are you sure you want to delete?")

    if (shouldRemove) {
      setCart([]);
    }
  }

  useEffect(() => {
    const log = sessionStorage.getItem("islogged");
    if (log) {
      setIslogged(true);
    }
    console.log("Is logged:", islogged);
  }, [islogged]);

  console.log("Cart:", cart);

  return (
    <BrowserRouter>
      <Navbar cart={cart} />
      <Separator />
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/" element={<Navigate to="/home" />} />
        <Route
          path="/allbrands"
          element={
            <div>
              <FilterSection setIsLefut={setIsLefut} />
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
        <Route path="/auth/login" element={<About />} />
        <Route path="/allbrands/search/:sText" element={<SearchResultPage />} />
        <Route path="/searchPage" element={<SearchComponent />} />
        <Route path="/search" element={<SearchResultsComponent />} />
        {/* <Route path="/forgetpassword" element={<ForgetPassword />} /> */}
        <Route path="/about" element={<About />} />
        {/* <Route path="/blogs" element={<InfiniteScroll />} /> */}
        {/* <Route path="/contact" element={<Contact />} /> */}
        {/* <Route path="/contact" element={<Gallery />} /> */}
        <Route path="/faq" element={<Faq />} />
        <Route path="/cart" element={<Cart cart={cart} setCart={setCart} updateQuantity={updateQuantity} removeAllItems={removeAllItems} removeFromCart={removeFromCart} />} />

        <Route path="/timeout" element={<TimeOut />} />
        <Route path="/checkout" element={<CheckOut cart={cart} />} />
        <Route path="/allbrands/detailed" element={<Results isLefut={isLefut}  />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
      <ToastContainer />
      <ScrollToTop />
    </BrowserRouter>

  );
}

export default Menu;
