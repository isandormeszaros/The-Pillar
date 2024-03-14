import { useState, useEffect } from "react";
import WatchesServices from "../../../services/WatchesServices";
import "./AllWatches.css"

function AllWatches() {
    const [allWatches, setAllWatches] = useState([]);
    const images = "http://localhost:8080/images/";

    useEffect(() => {
        WatchesServices.getBrands()
            .then((response) => setAllWatches(response.data))
            .catch((error) =>
                console.error("Error occurred while fetching brands:", error)
            );
    }, []);
    console.log(allWatches)

    return (
        <div>
            <section id="header" className="text-center pb-5">
                <img
                    className="card-img-top"
                    src={images + "allProductsThumbnail.jpg"}
                    alt="Card image cap"
                    style={{ objectFit: "cover", height: "375px" }}
                />
                <div className="text-center">
                    <h1 className="custom-heading-font pt-4">Márkáink</h1>
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
                    {allWatches.map((brand, index) => (
                        <div className="col-3 col-lg-3 p-2 pointer h-50">
                            <div key={index}>
                                <div className="card">
                                    <img src={images + "allProductsThumbnail.jpg"} alt="" />
                                    <h1 className="custom-heading-font display-6">{brand.brand}</h1>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}



export default AllWatches;