import React, { Component } from "react";

class Shop extends Component {
  render() {
    return (
      <div>
        <h1>Oferece (-TE) Catraio</h1>
        <div>O nosso merchandising</div>
        <div className="Shop-photos">
          <img src="http://lorempicsum.com/futurama/200/200/1" alt=""/>
          <img src="http://lorempicsum.com/futurama/200/200/2" alt=""/>
          <img src="http://lorempicsum.com/futurama/200/200/3" alt=""/>
          <img src="http://lorempicsum.com/futurama/200/200/4" alt=""/>
        </div>
      </div>
    );
  }
}

export default Shop;
