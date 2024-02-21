import React, { useEffect, useState, useRef } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import MapsListItem from 'components/MapsListItem';
import { useMapContext } from 'components/MapContextProvider';
import VectorLayer from 'ol/layer/Vector';
import VectorSource from 'ol/source/Vector';
import GeoJSON from 'ol/format/GeoJSON';
import { Geometry } from 'ol/geom';
import Feature from 'ol/Feature';

const MapsList = () => {
  const [maps, setMaps] = useState([]);
  const selectedMapName = useRef('');
  const selectedFeatureLayer = useRef(null);
  const olMap = useMapContext();

  const handleItemClick = (event: any) => {
    const mapName = event.target.getAttribute('data-name');
    const mapItem = maps.find(({ name }) => name === mapName);

    if (mapName !== selectedMapName.current) {
      if (selectedFeatureLayer.current) {
        olMap.removeLayer(selectedFeatureLayer.current);
      }

      const geojsonObject = {
        type: 'FeatureCollection',
        features: mapItem.features,
      };

      //https://github.com/openlayers/openlayers/issues/15334
      const features: Feature[] = new GeoJSON().readFeatures(geojsonObject)
        .filter(feature => feature instanceof Feature) as Feature[];

      const featureLayer = new VectorLayer({
        source: new VectorSource<Feature<Geometry>>({
          features,
        }),
      });

      olMap.addLayer(featureLayer);

      const extent = featureLayer.getSource().getExtent();
      olMap.getView().fit(extent, { maxZoom: 6 });

      selectedMapName.current = mapItem.name;
      selectedFeatureLayer.current = featureLayer; 
    }
  }

  useEffect(() => {
    // fetch maps
    const controller = new AbortController();
    axios.get('/maps', { signal: controller.signal })
      .then(({ data }) => setMaps(data));

    return () => {
      controller.abort();

      if (selectedFeatureLayer.current) {
        olMap.removeLayer(selectedFeatureLayer.current);
      }
    };
  }, []);

  return (
    <div>
      {maps.map(mapData => (
        <MapsListItem
          key={mapData.name}
          onClick={handleItemClick}
          {...mapData}
        />
      ))}
    </div>
  );
}

const StyledMaps = styled(MapsList)`
  
`;

export default StyledMaps;
