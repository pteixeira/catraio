import "./menu.styl";
import React, { Component } from "react";

class Menu extends Component {
  render() {
    return (
      <div className="Menu">
        <div className="Menu-left">
          <img src="https://www.placecage.com/400/400" alt=""/>
        </div>
        <div className="Menu-right">
          <h2><i className="icon icon-untappd" />Cervejas para levares contigo</h2>
          <p>Lorem ipsum dolor sit amet, inani accusam definiebas vix ea.
            Wisi reque congue ea cum, in sed ignota conceptam concludaturque,
            et lobortis mediocritatem per. Ad altera inermis sensibus per,
            ex pri semper putant virtute. Vel voluptua vivendum ne.</p>
          <button>Menu</button>
        </div>
      </div>
    );
  }
}

export default Menu;
