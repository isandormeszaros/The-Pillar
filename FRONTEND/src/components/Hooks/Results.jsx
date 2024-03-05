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
                setLefut(true);
            })
            .catch((err) => {
                setError(err);
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
                                            <h4 className="custom-card-title">{item.product.watchName}</h4>
                                            <p className="card-text text-muted">ID: {item.product.id}</p>
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
