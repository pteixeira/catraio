import React from "react";

class Map extends React.Component {
  static displayName = "Map";

  static propTypes = {
    children: React.PropTypes.node,
    lat: React.PropTypes.number,
    lng: React.PropTypes.number,
    zoom: React.PropTypes.number
  };

  // Catraio coordinates and zoom in map
  static defaultProps =  {
    zoom: 15,
    lat: 41.151108,
    lng: -8.617305
  };

  componentDidMount() {
    const mapOptions = {
      center: new google.maps.LatLng(this.props.lat, this.props.lng),
      zoom: this.props.zoom
    }

    const position = {
      lat: this.props.lat,
      lng: this.props.lng
    }

    this.map = new google.maps.Map(this.refs.map, mapOptions);
    new google.maps.Marker({
      position: position,
      map: this.map,
      title: "Catraio - Craft Beer Shop"
    });
  }

  componentWillUnmount() {
    this.map = null;
  }

  render() {
    return (
      <div className="Map" ref="map"></div>
    );
  }
}

export default Map;
