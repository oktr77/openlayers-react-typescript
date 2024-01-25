import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import InputLabel from '@mui/material/InputLabel';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import FormControl from '@mui/material/FormControl';
import BaseLayer from 'ol/layer/Base';
import TileLayer from 'ol/layer/Tile';
import XYZ from 'ol/source/XYZ';
import { useMapContext } from 'components/MapContextProvider';
import { ILayer } from 'data/layers';

const LayerControl = () => {
  const map = useMapContext();
  const tileLayer = map.getLayers().getArray().find((layer: BaseLayer)  => layer instanceof TileLayer)
  const [baseLayer, setBaseLayer] = useState<BaseLayer>(tileLayer);
  const [layers, setLayers] = useState<ILayer[]>([]);

  useEffect(() => {
    // fetch layers list
    const controller = new AbortController();
    axios.get('/layers', { signal: controller.signal })
      .then(({ data }) => setLayers(data));

    return () => {
      controller.abort();
    };
  }, []);

  const handleBaseLayerChange = ({ target }: { target: { value: string }}) => {
    if (baseLayer) {
      map.removeLayer(baseLayer);
    }

    const layer: ILayer = layers.find(l => l.name === target.value);
    const newBaseLayer = new TileLayer({
      source: new XYZ({
        url: layer.data_source,
      }),
      zIndex: 0,
    });

    newBaseLayer.set('name', layer.name);
    map.addLayer(newBaseLayer);
    setBaseLayer(newBaseLayer);
  }

  return (
    <div>
      <FormControl fullWidth>
          <InputLabel id='base-layer-select-label'>
            Base Layer
          </InputLabel>
          <Select
            label='Base Layer'
            labelId='base-layer-select-label'
            value={baseLayer?.get('name')}
            onChange={handleBaseLayerChange}
          >
            {
              layers.map(layer => (
                <MenuItem
                  key={layer.name}
                  value={layer.name}
                >
                  <ListItemIcon
                    sx={{
                      width: 32,
                      height: 32,
                      verticalAlign: 'middle',
                    }}
                  >
                    <img src={require(`data/previews/${layer.name}.jpg`).default} alt={layer.name}/>
                  </ListItemIcon>
                  <ListItemText sx={{ display: 'inline-block' }}>
                    {layer.name}
                  </ListItemText>
                </MenuItem>
              ))
            }
          </Select>
        </FormControl>
    </div>
  );
};

export default LayerControl;
