import { useState, useEffect } from "react";

function useCart() {
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
    setCart([]);
  }

  return{cart, setCart, addToCartFunction, updateQuantity, removeFromCart, removeAllItems}
}

export default useCart;