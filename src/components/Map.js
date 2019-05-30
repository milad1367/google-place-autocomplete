import React from 'react';
import ReactDOM from 'react-dom'

class Map  extends React.Component {
    componentDidUpdate(prevProps, prevState) {
       if (prevProps.location != this.props.location) {
            this.map.fitBounds(this.props.location.geometry.viewport);
            this.marker.setPosition(this.props.location.geometry.location);
            this.marker.setVisible(true);

       }
       

    }
    componentDidMount() {
        //const {google} = this.props;
        const maps = window.google.maps;
  
        const mapRef = this.refs.map;

        const node = ReactDOM.findDOMNode(mapRef);
  
        let zoom = 14;
        let lat = 37.774929;
        let lng = -122.419416;
        const center = new maps.LatLng(lat, lng);
        const mapConfig = Object.assign({}, {
          center: center,
          zoom: zoom
        })
        this.map = new maps.Map(node, mapConfig);
        this.marker = new  window.google.maps.Marker({
            map: this.map,
            anchorPoint: new window.google.maps.Point(0, -29)
          });

    }
     

    render() {
      return (
        <div className="map" ref='map'>
        </div>
        
      )
    }
}

export default Map