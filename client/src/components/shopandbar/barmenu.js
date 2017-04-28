import "./barmenu.styl";
import React from "react";

const BarMenu = ({ title, description }) => {
  return (
    <div className="BarMenu">
      <div className="BarMenu-left">
        <img src="https://www.placecage.com/900/400" alt=""/>
      </div>
      <div className="BarMenu-right">
        <h2><i className="icon icon-untappd" />{title}</h2>
        <p>{description}</p>
        <button>Menu</button>
      </div>
    </div>
  );
}

BarMenu.propTypes = {
  title: React.PropTypes.string.isRequired,
  description: React.PropTypes.object.isRequired
}
export default BarMenu;
