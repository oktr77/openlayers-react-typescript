import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { createGlobalStyle } from 'styled-components';
import Map from 'components/Map';
import Navigation from 'components/Navigation';
import LayerControl from 'components/LayerControl';
import About from 'components/About';
import MapContextProvider from 'components/MapContextProvider';


const GlobalStyle = createGlobalStyle`
  html, body, #app-root {
    margin: 0;
    height: 100%;
  }

  #app-root {
    position: relative;
  }
`;

interface IProps {

}

const App = (props: IProps) => (
  <BrowserRouter>
    <GlobalStyle/>
    <MapContextProvider>
      <Map/>
      <Navigation/>
    </MapContextProvider>

    <Routes>
      <Route path='/layers' element={<LayerControl/>} />
      <Route path='/about' element={<About/>} />
    </Routes>
  </BrowserRouter>
);

export default App;
