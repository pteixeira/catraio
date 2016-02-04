import "./events.styl";

import React from "react";
import { map } from "lodash";
import moment from "moment";
import { translate } from "react-i18next/lib";

const testJson = {
  "events": [
    {
      "attending_count": 114,
      "cover": {
        "offset_x": 50,
        "offset_y": 0,
        "source": "https://scontent.xx.fbcdn.net/hphotos-xtf1/t31.0-8/q82/s720x720/12615426_1680501695568451_4912708346388395496_o.jpg",
        "id": "1680501695568451"
      },
      "description": "Vamos celebrar o primeiro aniversário do Catraio - Craft Beer Shop no próximo sábado, dia 30, e estão todos convidados para uns brindes. Em janeiro de 2015, abrimos o Catraio porque acreditávamos numa tendência saborosa e emergente: a cerveja artesanal. Ao longo deste ano, o Catraio afirmou-se como um ponto de encontro para mestres cervejeiros e uma referência para apreciadores de vários países. Foi um ótimo ano para quem adora cerveja. Sábado, lançamos uma edição especial \"Catraio by Pedro Sousa\", enquanto cantamos os parabéns.",
      "name": "Catraio – Um Ano a Adorar Cerveja",
      "place": {
        "name": "Catraio - Craft Beer Shop",
        "location": {
          "city": "Porto",
          "country": "Portugal",
          "latitude": 41.149960202094,
          "longitude": -8.6167166072774,
          "street": "Rua de Cedofeita 256",
          "zip": "4050-174"
        },
        "id": "1444265872525369"
      },
      "start_time": "2016-01-30T16:00:00+0000",
      "id": "238126796519417"
    },
    {
      "attending_count": 18,
      "cover": {
        "offset_x": 50,
        "offset_y": 0,
        "source": "https://scontent.xx.fbcdn.net/hphotos-xaf1/t31.0-8/s720x720/12401737_1669360406682580_7549079689994256227_o.jpg",
        "id": "1669360406682580"
      },
      "description": "Este Sábado contiuamos com os festejos de Natal... Todas as cervejas da Post Scriptum Brewery, LDA à pressão e ainda mais algumas novidades by Pedro Sousa.",
      "place": {
        "name": "Catraio - Craft Beer Shop",
        "location": {
          "city": "Porto",
          "country": "Portugal",
          "latitude": 41.149960202094,
          "longitude": -8.6167166072774,
          "street": "Rua de Cedofeita 256",
          "zip": "4050-174"
        },
        "id": "1444265872525369"
      },
      "id": "1673278149582243"
    }
  ]
};

class Events extends React.Component {
  static displayName = "Events";

  static propTypes = {
    children: React.PropTypes.node
  };

  componentWillMount() {
  }

  componentDidMount() {
  }

  render() {
    const { t } = this.props;

    return (
      <div className="Events">
      <h2>{t("menu:events")}</h2>
      {map(testJson.events, (event, i) => {
        return(
          <div className="Events-event" key={i}>
            <div className="Events-eventimage">
              <img src={event.cover.source} />
            </div>
            <h3>{event.name}</h3>
            <div><strong>{t("events:where")}</strong>: {event.place.name}</div>
            <div><strong>{t("events:when")}</strong>: {moment(event.start_time).format("dddd, MMMM Do YYYY, HH:mm")}</div>
            <div>{event.description}</div>
            <div><strong>Attending</strong>: {event.attending_count}</div>
            <div>
              <a href={`http://www.facebook.com/events/${event.id}`} target="null">
                <strong>{t("events:viewInFacebook")}</strong>
              </a>
            </div>
          </div>
        )
      })}
      </div>
    );
  }
}

export default translate(["events", "menu"])(Events);
