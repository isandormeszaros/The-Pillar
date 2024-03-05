import React, { useState, useEffect } from "react";
import WatchesServices from "../../services/WatchesServices";
import { useLocation, useNavigate } from "react-router-dom";
import FilterSection from "../Context/FilterSection";

const Results = ({ isLefut }) => {
    const location = useLocation();
    const queryParams = new URLSearchParams(location.search);

    const [data, setData] = useState([]);
    const [error, setError] = useState("");
    const [lefut, setLefut] = useState(false);

    useEffect(() => {
        const szures = Object.fromEntries(queryParams.entries());
        
        WatchesServices.getDetailedFiltered(szures)
            .then((res) => {
                setData(res.data);
                console.log(res.data)
                setLefut(true);
            })
            .catch((err) => {
                setError(err);
                console.log(err);
            })
            .finally(() => {
                // Add any cleanup logic here if needed
            });
    }, [queryParams]);

    return (
        <div>
            <FilterSection setIsLefut={setLefut} />
            <div className="container">
                <div className="row">
                    {data.map((product) => (
                        <div key={product.id} className="col-lg-4 mb-4">
                            <div className="card border">
                                <div className="view overlay">
                                    <a href="#!">
                                        <div className="mask rgba-white-slight"></div>
                                    </a>
                                    <div className="card-body">
                                        <h4 className="custom-card-title">{product.watchName}</h4>
                                        <p className="card-text text-muted">ID: {product.id}</p>
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
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Results;
