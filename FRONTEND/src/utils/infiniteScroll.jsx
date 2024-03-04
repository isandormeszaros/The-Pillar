// import React, { useState, useEffect, useRef } from 'react';
// import WatchesServices from "../services/WatchesServices";

// const InfiniteScroll = () => {
//   const [items, setItems] = useState([]);
//   const [isLoading, setIsLoading] = useState(false);
//   const [error, setError] = useState(null);
//   const [page, setPage] = useState(1);

//   // Adatbetöltő funkció
//   const fetchData = async () => {
//     setIsLoading(true);
//     setError(null);

//     try {
//       // const response = await fetch(`https://api.example.com/items?page=${page}`);
//       // Szűréshez: pl. /products?category=electronics&price_range=100-500&brand=samsung
//       const response = await WatchesServices.getPage(page);
//       console.log(page,response.data);
//       const data = await response.data;

//       setItems(prevItems => [...prevItems, ...data]);
//       //Bad! setPage(prevPage => prevPage + 1);
//       setPage(page+1);
//     //   console.log('Lapozás: '+page);
//     } catch (error) {
//       setError(error);
//     } finally {
//       setIsLoading(false);
//     }
//   };
//   //-------------- Adatbetöltés
//   useEffect(() => {
//     fetchData();
//   }, []);
//   //----------------- Scroll esemény
//   const handleScroll = () => {
//     if (window.innerHeight + document.documentElement.scrollTop <= document.documentElement.offsetHeight-20 || isLoading) {
//         return;
//     }
//     fetchData();
//   };

//   useEffect(() => {
//     window.addEventListener('scroll', handleScroll);
//     return () => window.removeEventListener('scroll', handleScroll);
//   }, [isLoading]);
//   //----------------------
//   return (
//     <div>
//       <div className="product-list">
//         {items.map(watch => (
//           <div className="product">
//           <h2>{watch.watchName}</h2>
//           <p>{watch.price}</p>
//           <button className="add-to-cart-button"> Kosárba </button>
//           </div>

//         ))}
//       </div>
//       {isLoading && <p>Loading...</p>}
//       {error && <p>Error: {error.message}</p>}
//     </div>
//   );
// };

// export default InfiniteScroll;
