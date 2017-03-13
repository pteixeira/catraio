import "./shop.styl";

import React from "react";

const Shop = ({ title, description }) => {
  return (
    <div className="Shop">
      <div className="Shop-title"><span>{title}</span></div>
      <div>{description}</div>
      <div className="Shop-photos">
        <div className="Shop-photo"><img src="http://lorempicsum.com/futurama/500/500/1" alt=""/></div>
        <div className="Shop-photo"><img src="http://lorempicsum.com/futurama/500/500/2" alt=""/></div>
        <div className="Shop-photo"><img src="http://lorempicsum.com/futurama/500/500/3" alt=""/></div>
        <div className="Shop-photo"><img src="http://lorempicsum.com/futurama/500/500/4" alt=""/></div>
      </div>
    </div>
  );
}

export default Shop;
