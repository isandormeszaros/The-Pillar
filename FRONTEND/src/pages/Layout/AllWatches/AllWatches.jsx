import { useState, useEffect } from "react";
import WatchesServices from "../../../services/WatchesServices";
import { Link } from "react-router-dom";
import "./AllWatches.css"

function AllWatches() {
    const [data, setData] = useState([]);
    const images = "http://localhost:8080/images/allwatches/";

    useEffect(() => {
        WatchesServices.getBrands()
            .then((response) => setData(response.data))
            .catch((error) =>
                console.error("Error occurred while fetching brands:", error)
            );
    }, []);

    console.log();

    return (
        <div>
            <section id="header" className="text-center pb-5">
                <section className="allwatches-parallax">
                    <div className="parallax-inner">
                    </div>
                </section>
                <div className="text-center">
                    <h1 className="custom-heading-font pt-4">Márkáink ({data && data.length})</h1>
                    <p
                        className="small"
                        style={{
                            maxWidth: "90%",
                            margin: "0 auto",
                            textAlign: "center",
                        }}
                    >
                        With thousands of pre-owned luxury watches from the best brands
                        around the world, we are dedicated to bringing collectors and
                        enthusiasts an unrivaled selection of timepieces. Our in-house team
                        of Swiss-trained watchmakers, technicians, and refinishers are
                        highly skilled and have a passion for quality, authenticity, and
                        craftsmanship—so you never have to worry about compromising value or
                        provenance.
                    </p>
                </div>
            </section>

            <div className="container">
                <div className="row justify-content-start align-items-center">
                    {data.map((product, index) => (
                        <div className="col-12 col-md-4 col-lg-3 p-2 pointer h-100">
                            <div key={index}>

                                <div className="card custom-border h-100">
                                    <div className="view overlay">
                                        <Link to={`/allbrands?watchName=${product.brand}`} className="text-decoration-none custom-p-font">
                                            <img
                                                className="card-img-top custom-brand-image rounded-0"
                                                src={images + `${product.brand}` + "/1.avif"}
                                                alt="Card"
                                            />
                                        </Link>
                                        <a href="#!">
                                            <div className="mask rgba-white-slight"></div>
                                        </a>
                                        <div className="card-body">
                                            <h4 className="custom-card-title custom-heading-font mb-0">{product.brand}</h4>
                                        </div>
                                    </div>
                                </div>
                                {/* <Link to={`/allbrands?watchName=${brand.brand}`} className="text-decoration-none custom-p-font"> */}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}



export default AllWatches;