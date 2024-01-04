import React from 'react';
import styled from 'styled-components';
import OLMap from 'ol/Map';
import View from 'ol/View';
import TileLayer from 'ol/layer/Tile';
import XYZ from 'ol/source/XYZ';
import { ScaleLine } from 'ol/control';

interface IProps {
  className?: string;
  mapRef?: (olMap: OLMap) => void;
}

class Map extends React.Component<IProps> {
  private mapElementRef: React.RefObject<HTMLDivElement> = React.createRef();

  async componentDidMount() {
    const map = new OLMap({
      target: this.mapElementRef.current,
      view: new View({
        center: [0, 0],
        zoom: 2,
      }),
      layers: [
        new TileLayer({
          source: new XYZ({
            url: 'http://mt{0-2}.google.com/vt/lyrs=y&hl=en&x={x}&y={y}&z={z}&s=Ga',
          }),
        }),
      ],
      controls: [
        new ScaleLine({
          units: 'metric',
        }),
      ],
    });

    window.onresize = () => map.updateSize();

    const { mapRef } = this.props;
    if (mapRef) {
      mapRef(map);
    }
  }

  shouldComponentUpdate() {
    return false;
  }
  
  render() {
    const { className } = this.props;

    return (
      <div className={className} ref={this.mapElementRef}/>
    );
  }
}

const StyledMap = styled(Map)`
  width: 100%;
  height: 100%;
  margin: 0;
`;

export default StyledMap;
