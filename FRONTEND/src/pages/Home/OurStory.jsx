import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; 

const OurStory = () => {
  return (
    <div className="our-story container">
      <div className="row">
        <div className="col-12">
          <h1 className="text-center mt-5 custom-heading-font">Főcím</h1>
          <hr />
        </div>
      </div>
      <div className="row">
        <div className="col-12 col-md-6">
          <div className="box-left">
          <p className="text-justify pt-4 custom-p-font">Founded in 1993 by Jeff Hyland and Rick Hilton, Hilton & Hyland is synonymous with luxury real estate in Los Angeles, with an earned privilege and reputation for selling the most distinctive properties and estates in the world.</p>
          </div>
        </div>
        <div className="col-12 col-md-6">
          <div className="box-right">
          <p className="text-justify pt-4 pb-3 custom-p-font">Hilton & Hyland is well-positioned in Beverly Hills, serving many of Los Angeles’ most distinguished, influential, and affluent residents. We maintain an international presence in all major centers around the world as a founding affiliate and exclusive Los Angeles member of Forbes Global Properties, a Forbes company, and through our exclusive relationship with Luxury Portfolio International.</p>
          </div>
        </div>
        <div className="row">
        <div className="col-12">
        <a href="" className="default-button ">Read More</a>
        </div>
      </div>
      </div>
    </div>
  );
};

export default OurStory;
