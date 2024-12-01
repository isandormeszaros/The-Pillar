import React from 'react';

const Card = ({ title, content }) => {
  return (
    <div className="col-lg-6">
      <div className="p-3 border">
        <h1 className="custom-heading-font">{title}</h1>
        <p className="faq-box-content text-justify custom-p-font">{content}</p>
        <a className="faq-button">
          Tovább
          <i className="pi pi-arrow-right"></i>
        </a>
      </div>
    </div>
  );
};

const Cards = ({ items }) => {
  return (
    <div className="row g-2 text-start">
      {items.map((item, index) => (
        <Card key={index} title={item.title} content={item.content} />
      ))}
    </div>
  );
};

export default Cards;