import React, { useState } from "react";
import "./Newsletter.css";

const Newsletter = () => {
  const [email, setEmail] = useState("");

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const subscribe = () => {
    console.log("Feliratkozás: " + email);
    // Ide írd meg a feliratkozás logikáját
  };

  return (
    <div className="container-fluid text-white p-4">
      <div className="row justify-content-center">
        <div className="col-md-6" style={{ maxWidth: "600px" }}>
          <h2 className="text-center custom-heading-font text-black">
            Irattkozz fel hírlevelünkre!
          </h2>
          <p className="text-center text-black">
            Join our mailing list to receive insider updates on our latest
            collections, invites to private events, and other personalized
            offerings.
          </p>
          <div className="input-group mb-3">
            <input
              type="email"
              className="form-control email-form"
              placeholder="E-mail cím"
              value={email}
              onChange={handleEmailChange}
            />
          </div>
          <div className="d-grid">
            <button className="default-button" onClick={subscribe}>
              Feliratkozás
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Newsletter;
