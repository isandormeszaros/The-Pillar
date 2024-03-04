import React from "react";
import "./TimeOut.css";

const Timeout = () => {

    return (

        <div className="timeout-container">
            <div className="timeout-content justify-content-center align-items-center text-center">
                <h1 className="custom-heading-font mt-5 px-3">
                    Sajnáljuk, az oldalt nem tudjuk betölteni
                </h1>
                <h5 className="text-muted pb-4">Kérjük, térjen vissza később.</h5>
                <a href="/home" className="default-button">
                    Kezdőlap
                </a>
            </div>
        </div>
    );
};

export default Timeout;
