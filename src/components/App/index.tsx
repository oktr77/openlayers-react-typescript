import React from 'react';
import Map from 'components/Map';
import { createGlobalStyle } from 'styled-components';

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
  <>
    <GlobalStyle/>
    <Map/>
  </>
);

export default App;
