import "./about.styl";
import React from "react";

class About extends React.Component {
  static displayName = "About";

  render() {
    return(
      <div className="About">
        <div className="About-content">
          <div className="About-text">
            <p>
              O Catraio é o primeiro projecto que celebra a cultura da cerveja artesanal na
              Baixa do Porto. Somos uma loja, bar e ponto de encontro, onde os apreciadores de
              boa cerveja (artesanal) podem descobrir e desfrutar de novos aromas, sabores e experiências.
            </p>

            <p>
              Somos também uma plataforma de promoção dos mestres cervejeiros e da
              emergente indústria de cerveja artesanal.
            </p>

            <p>
              Reunimos uma colecção alargada de marcas artesanais nacionais e
              estrangeiras e servimos de montra aos empreendedores e profissionais do sector,
              apoiando também a sua projecção através de eventos de contacto, formação e divulgação.
            </p>

            <p>Acima de tudo, adoramos cerveja.</p>
          </div>
        </div>
      </div>
    );
  }
}

export default About;
