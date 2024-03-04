// import React, { useState, useEffect } from "react";
// import WatchesServices from "../../services/WatchesServices";
// import SearchComponent from "./searchComponent";
// import FilterSection from "../Context/FilterSection";

// function Gallery() {
//   const [items, setItems] = useState([]);
//   const [isLoading, setIsLoading] = useState(false);
//   const [error, setError] = useState(null);
//   const [page, setPage] = useState(1);
//   const images = "http://localhost:8080/images/";

//   // Adatbetöltő funkció
//   const fetchData = async () => {
//     setIsLoading(true);
//     setError(null);

//     try {
//       // const response = await fetch(`https://api.example.com/items?page=${page}`);
//       // Szűréshez: pl. /products?category=electronics&price_range=100-500&brand=samsung
//       const response = await WatchesServices.getPage(page);
//       // console.log(page, response.data);
//       const data = await response.data;

//       setItems((prevItems) => [...prevItems, ...data]);
//       //Bad! setPage(prevPage => prevPage + 1);
//       setPage(page + 1);
//       //   console.log('Lapozás: '+page);
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
//     if (
//       window.innerHeight + document.documentElement.scrollTop <=
//       document.documentElement.offsetHeight - 20 ||
//       isLoading
//     ) {
//       return;
//     }
//     fetchData();
//   };

//   useEffect(() => {
//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, [isLoading]);

//   console.log(items);
//   return (
//     <div>
//       <section className="text-center py-5">
//         <div className="card-img-container">
//           <div className="dotted-bg"></div>
//           <img
//             className="card-img-top "
//             src={images + "allProductsThumbnail.jpg"}
//             alt="Card cap"
//             style={{ objectFit: "cover", height: "375px" }}
//           />
//         </div>

//         <div className="text-center">
//           <h1 className="custom-heading-font pt-4">All Watches</h1>
//           <p
//             className="small"
//             style={{
//               maxWidth: "90%",
//               margin: "0 auto",
//               textAlign: "center",
//             }}
//           >
//             With thousands of pre-owned luxury watches from the best brands
//             around the world, we are dedicated to bringing collectors and
//             enthusiasts an unrivaled selection of timepieces. Our in-house team
//             of Swiss-trained watchmakers, technicians, and refinishers are
//             highly skilled and have a passion for quality, authenticity, and
//             craftsmanship—so you never have to worry about compromising value or
//             provenance.
//           </p>
//         </div>
//       </section>

//       <SearchComponent />

//       <FilterSection />

//       <section id="gallery">
//         <div className="container">
//           <div className="row">
//             <div className="d-flex flex-row-reverse bd-highlight">
//             <div className="p-1 bd-highlight">Órák: {items.length} db</div>
//               <div className="p-1 bd-highlight">RENDEZÉS</div>
//             </div>
//             {items.map((watch) => (
//               <div key={watch.id} className="col-lg-3 mb-3">
//                 <div className="card border">
//                   <div className="view overlay">
//                     <img
//                       className="card-img-top"
//                       src={images + "test.jpg"}
//                       alt="Card"
//                     />
//                     <a href="#!">
//                       <div className="mask rgba-white-slight"></div>
//                     </a>
//                     <div className="card-body">
//                       <h4 className="custom-card-title">{watch.watchName}</h4>
//                       <p className="card-text text-muted">
//                         Price:{" "}
//                         {watch.price.toLocaleString("en-US", {
//                           style: "currency",
//                           currency: "USD",
//                           minimumFractionDigits: 0,
//                         })}
//                       </p>
//                       <a href="#" className="default-button">
//                         Button
//                       </a>
//                     </div>
//                     <div
//                       style={{
//                         position: "absolute",
//                         top: "10px",
//                         right: "10px",
//                       }}
//                     >
//                       <a href="/" className="btn btn-outline-danger btn-sm">
//                         <i className="pi pi-heart"></i>
//                       </a>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>
//     </div>
//   );
// }

// export default Gallery;
