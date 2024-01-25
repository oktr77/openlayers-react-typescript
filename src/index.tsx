import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './components/App';
import 'data/mocks';
import 'ol/ol.css';

const root = createRoot(document.getElementById('app-root'));

root.render(<App/>);
