import "./barmenu.styl";
import React from "react";

const BarMenu = () => {
  return (
    <div className="BarMenu">
      <div className="BarMenu-left">
        <img src="https://www.placecage.com/900/400" alt=""/>
      </div>
      <div className="BarMenu-right">
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

export default BarMenu;
