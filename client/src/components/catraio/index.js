import "./catraio.styl";

import React from "react";

class Catraio extends React.Component {
  render() {
    return (
      <div className="Catraio">
        <div className="Catraio-photocatraios">
          <img src="https://www.placecage.com/g/800/600" alt=""/>
        </div>
        <div className="Catraio-textcatraio">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque ut lorem eu ipsum tincidunt consequat.
          Quisque convallis mollis velit, ac vehicula ex maximus sit amet. Donec dapibus justo sed libero mollis,
          non mattis mi consequat. In volutpat mi odio, id pulvinar magna gravida eu. Ut venenatis enim massa,
          eu egestas diam tempus at. Praesent dolor eros, cursus nec congue gravida, maximus nec tortor. Ut ac turpis leo.
          Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nunc sed mauris a nibh lobortis
          facilisis ac vitae magna. Suspendisse potenti.
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

export default Catraio;
