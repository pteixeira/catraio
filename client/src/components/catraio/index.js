import "./catraio.styl";
import { translate, Interpolate } from "react-i18next";

import React from "react";

class Catraio extends React.Component {
  render() {
    return (
      <div className="Catraio" id="catraio">
        <div className="Catraio-photocatraios">
          <img src="https://www.placecage.com/g/800/600" alt=""/>
        </div>
        <div className="Catraio-textcatraio">
          <Interpolate i18nKey={"catraio:main_text"} useDangerouslySetInnerHTML />
        </div>
        <div className="Catraio-newsclips">
          <div>
            <img src="https://www.stevensegallery.com/400/400" alt=""/>
            <div><i>Nome do jornal/revista + data</i></div>
          </div>
          <div>
            <img src="https://www.placecage.com/400/400" alt=""/>
            <div><i>Nome do jornal/revista + data</i></div>
          </div>
        </div>
        <div className="Catraio-quote">
          Not all chemicals are bad. Without chemicals such as hydrogen and oxygen, for example,
          there would be no way to make water, a vital ingredient in beer.<br />
          - Dave Barry (Sometime, Somewhere)
        </div>
      </div>
    )
  }
}

export default translate(["catraio"])(Catraio);
