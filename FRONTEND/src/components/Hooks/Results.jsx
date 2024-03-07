import React, { useState, useEffect } from "react";
import WatchesServices from "../../services/WatchesServices";
import { useLocation } from "react-router-dom";
import FilterSection from "../Context/FilterSection";

const Results = ({ isLefut }) => {
    const location = useLocation();
    // console.log(location)

    const [data, setData] = useState([]);
    const [error, setError] = useState("");

    const [queryParams, setQueryParams] = useState({});
    console.log(queryParams);

    const [lefut, setLefut] = useState(false); // Kezdetben nem futott le a keresés

    useEffect(() => {
        const params = new URLSearchParams(location.search);
        const query = Object.fromEntries(params.entries());
        setQueryParams(query);
    }, [location.search]);


    useEffect(() => {
    console.log(queryParams);
    WatchesServices.getDetailedFiltered(queryParams)
        .then(response => {
            // Filter the data based on watchName and queryParams
            const filteredData = response.data.filter(item => item.watchName && item.watchName.includes(queryParams));
            
            // Set the filtered data state
            setData(filteredData);
            console.log(filteredData);
            setLefut(true);
        })
        .catch((err) => {
            console.error("Error fetching data:", err);
            setError("Error fetching data. Please try again later.");
        });
}, [queryParams]);


    return (
        <div>
            <FilterSection setIsLefut={setLefut} />
            <div className="container">
                <div className="row">
                    {data.length > 0 ? (
                        data.map((item) => (
                            <div key={item.id} className="col-lg-4 mb-4">
                                <div className="card border">
                                    <div className="view overlay">
                                        <a href="#!">
                                            <div className="mask rgba-white-slight"></div>
                                        </a>
                                        <div className="card-body">
                                            <h4 className="custom-card-title">Name: {item.product && item.product.watchName}</h4>
                                            <p className="card-text text-muted">ID: {item.product && item.product.id}</p>

                                        </div>
                                        <div
                                            style={{
                                                position: "absolute",
                                                top: "10px",
                                                right: "10px",
                                            }}
                                        >
                                            <a href="/" className="btn btn-outline-danger btn-sm">
                                                <i className="pi pi-heart"></i>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))
                    ) : (
                        <div>No data available</div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Results;
