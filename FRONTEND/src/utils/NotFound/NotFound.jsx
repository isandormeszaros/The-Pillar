import React from "react";
import "./NotFound.css";

const NotFound = () => {
    return (
        <div className="notfound-container">
            <div className="notfound-content justify-content-center align-items-center text-center text-white px-3">
                <h1 className="custom-heading-font mt-5">
                    404
                </h1>
                <h1 className="custom-heading-font">
                    Sajnáljuk, az oldalt nem találjuk
                </h1>
                <h5 className="pb-4">Próbáljon újra később, vagy térjen vissza a kezdőlapra.</h5>
                <a href="/home" className="default-button">
                    Kezdőlap
                </a>
            </div>
        </div>
    );
};

export default NotFound;
