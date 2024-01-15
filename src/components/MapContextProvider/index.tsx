import React, { createContext, useContext, PropsWithChildren } from 'react';
import OLMap from 'ol/Map';
import View from 'ol/View';
import TileLayer from 'ol/layer/Tile';
import XYZ from 'ol/source/XYZ';
import { ScaleLine } from 'ol/control';

const createMap = () => (
  new OLMap({
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
  })
);

export const MapContext = createContext<OLMap>(null);

const MapContextProvider = ({ children }: PropsWithChildren) => {
  const map = createMap();

  return (
    <MapContext.Provider value={map}>{children}</MapContext.Provider>
  );
}

export const useMapContext = () => useContext(MapContext);

export default MapContextProvider;
